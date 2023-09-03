import flask_sock, typing, threading, uuid, traceback, os, typing, threading, time
from .contract import Message, should_send, StdioMessage
from .contract.common import FilesChangedMessage
from .utils import serialize, deserialize
from .utils.environment import is_preview
from .monitoring import log, LogMessage
from pathlib import Path
from datetime import datetime


class Execution:
    type = "execution"
    executions: typing.ClassVar[typing.Dict] = {}

    @classmethod
    def get_execution(cls) -> typing.Optional["Execution"]:
        thread_id = threading.get_ident()
        return cls.executions.get(thread_id)

    def __init__(self, runtime_type: str, runtime_name: str):
        self.id: str = uuid.uuid4().__str__()
        self.thread_id = threading.get_ident()
        self.runtime_type: str = runtime_type
        self.runtime_name: str = runtime_name
        self.stderr: typing.List[str] = []
        self.stdout: typing.List[str] = []
        self.context: typing.Dict = {}
        Execution.executions[self.thread_id] = self

    @property
    def is_preview(self) -> bool:
        return is_preview()

    def stdio(self, type: str, text: str):
        if type == "stderr":
            self.stderr.append(text)
        elif type == "stdout":
            self.stdout.append(text)

    def log(self, event: str, payload: typing.Any):
        if event == "heartbeat":
            return
        log(
            LogMessage(
                event=event,
                payload=payload,
                executionId=self.id,
                runtime_type=self.runtime_type,
                runtime_name=self.runtime_name,
            )
        )

    def delete(self):
        del Execution.executions[self.thread_id]


class LiveSession(Execution):
    type = "session"

    @staticmethod
    def get_session() -> typing.Optional["LiveSession"]:
        execution = Execution.get_execution()
        if isinstance(execution, LiveSession):
            return execution

        return None

    def __init__(
        self, connection: flask_sock.Server, runtime_type: str, runtime_name: str
    ):
        super().__init__(runtime_type, runtime_name)
        self.__connection = connection
        self.closed = False

    def files_changed_polling_loop(self, path: Path):
        last_change = datetime.now().timestamp()
        while True:
            if self.closed:
                break
            something_changed = False
            for root, dirs, files in os.walk(path):
                for file in files:
                    if not Path(file).exists() or Path(file).name == "abstra.json":
                        continue
                    st_mtime = os.stat(file).st_mtime
                    if st_mtime > last_change:
                        last_change = st_mtime
                        something_changed = True
            if something_changed:
                self.send(FilesChangedMessage())
            time.sleep(1)

    def start_files_monitoring(self, path: Path):
        if not self.is_preview:
            return
        threading.Thread(target=lambda: self.files_changed_polling_loop(path)).start()

    def send(self, msg: Message):
        self.log(msg.type, msg.data)

        if not should_send(msg, self.is_preview):
            return

        str_data = serialize(msg.to_json(self.is_preview))
        self.__connection.send(str_data)

    def recv(self) -> typing.Tuple[str, typing.Dict]:
        str_data = self.__connection.receive()
        data = deserialize(str_data)
        self.log(data["type"], data)
        return data["type"], data

    def close(self, reason: str = ""):
        self.__connection.close(message=reason)
        self.closed = True

    def stdio(self, type: str, text: str):
        self.send(StdioMessage(type, text))
        return super().stdio(type, text)

    @property
    def connected(self) -> bool:
        return self.__connection.connected

    def end(self):
        if self.connected:
            self.close(reason=traceback.format_exc() or None)
        self.delete()


class StaticSession(Execution):
    type = "static-session"

    @staticmethod
    def get_session() -> typing.Optional["StaticSession"]:
        execution = Execution.get_execution()
        if isinstance(execution, StaticSession):
            return execution

        return None

    def __init__(self, runtime_type: str, runtime_name: str):
        super().__init__(runtime_type, runtime_name)

    def stdio(self, type: str, text: str):
        self.log(type, text)
        return super().stdio(type, text)


def get_live_session_throwable() -> LiveSession:
    session = LiveSession.get_session()
    if not session:
        raise Exception("No session found")
    return session


def get_static_session_throwable() -> StaticSession:
    session = StaticSession.get_session()
    if not session:
        raise Exception("No session found")
    return session