import sys
from ..session import Execution


def __overload_stdio():
    def writeWraper(type, write, text):
        try:
            write(text)
            execution = Execution.get_execution()
            if execution:
                execution.stdio(type, text)
        finally:
            return len(text)

    stdout_write = sys.stdout.write
    stderr_write = sys.stderr.write

    sys.stdout.write = lambda text: writeWraper("stdout", stdout_write, text)
    sys.stderr.write = lambda text: writeWraper("stderr", stderr_write, text)


def overloads():
    __overload_stdio()