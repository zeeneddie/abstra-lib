import os, requests

CLOUD_API_ENDPOINT = (
    os.environ.get("CLOUD_API_ENDPOINT") or "https://cloud-api.abstra.cloud"
)


def create_build(headers: dict) -> dict:
    url = f"{CLOUD_API_ENDPOINT}/cli/builds"
    return requests.post(url=url, headers=headers).json()


def update_build(build_id: str, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/builds/{build_id}"
    return requests.patch(url=url, headers=headers).json()


def get_auth_info(headers: dict) -> dict:
    url = f"{CLOUD_API_ENDPOINT}/cli/auth-info"
    try:
        response = requests.get(url, headers=headers)
    except:
        return {"logged": False, "reason": "CONNECTION_ERROR"}
    if response.ok:
        response_json = response.json()
        return {
            "logged": True,
            "author_id": response_json["authorId"],
            "project_id": response_json["projectId"],
        }
    else:
        return {"logged": False, "reason": "INVALID_API_TOKEN"}


def get_ai_messages(messages, runtime, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/ai/messages"
    body = {"messages": messages, "runtime": runtime}
    return requests.post(url, headers=headers, json=body, stream=True).iter_content()