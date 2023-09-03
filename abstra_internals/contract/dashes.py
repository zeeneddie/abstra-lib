import typing, traceback
from .common import (  # exported
    Message,
    StdioMessage,
    AuthValidJWTMessage,
    AuthInvalidJWTMessage,
    AuthRequireInfoMessage,
    RedirectMessage,
    ExecuteJSRequestMessage,
    AlertMessage,
)
from ..utils import prepate_traceback


class ExecutionIdMessage(Message):
    type = "execution-id"

    def __init__(self, executionId: str):
        super().__init__({"executionId": executionId})


class ErrorMessage(Message):
    type = "error"

    def __init__(self, error: str):
        super().__init__({"error": error})


class ProgramStartFailedMessage(Message):
    type = "program-start-failed"

    def __init__(self, error: str, tb: traceback.StackSummary):
        super().__init__({"error": error, "stack": prepate_traceback(tb)})

    def to_json(self, is_preview: bool):
        if is_preview:
            return super().to_json(is_preview)
        return {"type": self.type}


class EvalReturnMessage(Message):
    type = "eval-return"

    def __init__(self, repr: str):
        super().__init__({"repr": repr})


class EvalErrorMessage(Message):
    type = "eval-error"

    def __init__(self, repr: str):
        super().__init__({"repr": repr})


class AutocompleteSuggestionsMessage(Message):
    type = "autocomplete:suggestions"

    def __init__(self, suggestionsFor: str, suggestions: typing.List[str]):
        super().__init__({"suggestions": suggestions, "suggestionsFor": suggestionsFor})


class WidgetsComputedMessage(Message):
    type = "widgets-computed"

    def __init__(
        self,
        props: dict,
        variables: dict,
        errors: dict,
        stateTimestamp: typing.Union[int, str],
    ):
        super().__init__(
            {
                "props": props,
                "variables": variables,
                "errors": errors,
                "stateTimestamp": stateTimestamp,
            }
        )


class WidgetsComputedGeneralErrorMessage(Message):
    type = "widgets-computed"

    def __init__(
        self,
        repr: str,
    ):
        super().__init__({"errors": {"general": {"repr": repr}}})


class SetupRefreshIntervalMessage(Message):
    type = "refresh:setup"

    def __init__(self):
        super().__init__({})