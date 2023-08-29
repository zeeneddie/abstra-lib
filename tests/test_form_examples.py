import unittest
from pathlib import Path
from .utils import assert_form
import json
import os


class TestFormExamples(unittest.TestCase):
    def setUp(self) -> None:
        os.chdir(Path(__file__).parent)

    def test_back_and_forth(self):
        code_path = "./resources/test_run_steps/test_back_and_forth/code.py"
        msgs_path = "./resources/test_run_steps/test_back_and_forth/messages.json"
        code = open(code_path).read()
        msgs = json.load(open(msgs_path))
        assert_form(self, code, msgs, session_id="session-id")

    # def test_list_reactive(self):
    #     code_path = "./resources/test_run_steps/test_list_reactive/code.py"
    #     msgs_path = "./resources/test_run_steps/test_list_reactive/messages.json"
    #     code = open(code_path).read()
    #     msgs = json.load(open(msgs_path))
    #     assert_form(self, code, msgs, session_id="session-id")