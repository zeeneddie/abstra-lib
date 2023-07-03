import os
from .utils import CREDENTIALS_FILE


def get_credentials(root_path):
    if os.getenv("ABSTRA_API_TOKEN"):
        return os.getenv("ABSTRA_API_TOKEN")

    credentials_path = os.path.join(root_path, CREDENTIALS_FILE)
    if not os.path.exists(credentials_path):
        return None

    with open(credentials_path) as f:
        return f.read().strip()


def delete_credentials(root_path):
    credentials_path = os.path.join(root_path, CREDENTIALS_FILE)
    if os.path.exists(credentials_path):
        os.remove(credentials_path)


def set_credentials(root_path, token):
    credentials_path = os.path.join(root_path, CREDENTIALS_FILE)
    with open(credentials_path, "w") as f:
        f.write(token)