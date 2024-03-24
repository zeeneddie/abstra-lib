from ....utils import serialize as json_serialize
import typing
from datetime import datetime, date
from uuid import UUID


def escape_ref(ref: str):
    return ref.replace('"', '""')


def quoted_identifier(ref: str):
    return f'"{escape_ref(ref)}"'


def serialize(value: typing.Any):
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    if isinstance(value, (dict, list, tuple)):
        return json_serialize(value)
    if isinstance(value, set):
        return json_serialize(list(value))
    if isinstance(value, UUID):
        return str(value)

    return value