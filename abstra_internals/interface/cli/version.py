import pkg_resources, requests
from ...utils.environment import IS_PRODUCTION
from ...utils import get_package_version


TIMEOUT = 5


def check_latest_version(package_name="abstra"):
    if IS_PRODUCTION:
        return

    try:
        current_version = get_package_version(package_name)
        response = requests.get(
            f"https://pypi.org/pypi/{package_name}/json", timeout=TIMEOUT
        )
        latest_version = response.json()["info"]["version"]

        if current_version == latest_version:
            print(f"Abstra Editor is up to date (version {current_version}).")
        else:
            print(
                f"A new version of Abstra Editor is available. Latest version is {latest_version}, but you have {current_version}."
            )
            print(f"Please run 'pip install {package_name} --upgrade' to update.")

    except pkg_resources.DistributionNotFound:
        print(f"{package_name} is not installed.")

    except requests.exceptions.RequestException:
        print(f"Unable to fetch version information for {package_name} from PyPI.")

    print("\n")
