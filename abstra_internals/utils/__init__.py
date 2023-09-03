import base64, simplejson, jwt, os, traceback, re, socket
from contextlib import closing
from traceback import StackSummary


def serialize(obj):
    return simplejson.dumps(obj, ignore_nan=True)


def deserialize(st):
    return simplejson.loads(st)


def is_serializable(st):
    try:
        serialize(st)
        return True
    except:
        return False


def btos(b64):
    return base64.b64decode(b64).decode()


def get_staticmethod(cls, name):
    # hack because python sucks
    method_key = f"_{cls.__name__}{name}"
    return getattr(cls, method_key, None)


def parse_value(cls, value):
    convert = get_staticmethod(cls, "__parse_value")
    return convert(value) if convert else value


def serialize_value(cls, value):
    revert = get_staticmethod(cls, "__serialize_value")
    return revert(value) if revert else value


def filter_object(object, filter_func):
    filtered = {}
    for key, value in object.items():
        if filter_func(value):
            filtered[key] = value
    return filtered


def prepate_traceback(tb: StackSummary):
    for i, stack in enumerate(tb):
        if stack.filename == "<string>":
            return [{"line": x.lineno, "filename": x.filename} for x in tb[i:]]
    else:
        return []


def formated_traceback_error_message(e: Exception, main_file="<string>"):
    files = [
        re.sub(r"<string>", main_file, f)
        for f in traceback.format_tb(e.__traceback__)
        if "abstra_server" not in f
    ]
    formated_error = "\n".join(files)
    formated_error += re.sub(r"<string>", main_file, str(e))
    return formated_error


def decode_jwt(jwt_str: str):
    try:
        if os.getenv("PASSWORDLESS_JWT_SECRET"):
            return jwt.decode(
                jwt_str, key=os.getenv("PASSWORDLESS_JWT_SECRET"), algorithms=["HS256"]
            )
        return jwt.decode(
            jwt_str, options={"verify_signature": False}, algorithms=["HS256"]
        )
    except:
        return None


def random_id(length=10):
    import random, string

    return "".join(random.choices(string.ascii_letters + string.digits, k=length))


def get_package_version(package_name):
    import pkg_resources

    try:
        version = pkg_resources.get_distribution(package_name).version
        return version
    except pkg_resources.DistributionNotFound:
        return None


def hash_string(value):
    import hashlib

    sha256_hash = hashlib.sha256()
    sha256_hash.update(value.encode("utf-8"))
    hashed_string = sha256_hash.hexdigest()

    return hashed_string


def get_local_user_id():
    import uuid

    id = str(uuid.getnode())

    return hash_string(id)


def check_is_url(url: str) -> bool:
    return bool(re.match(r"^https?://", url))


def get_free_port(default_port=3000):
    for port in range(default_port, default_port + 10):
        with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
            port_is_available = sock.connect_ex(("localhost", port)) != 0
            if port_is_available:
                return port