import flask
import flask_cors

from ...server.sentry import init_sentry
from ..blueprints.editor import get_editor_bp
from ..blueprints.player import get_player_bp
from ..controller import MainController


def get_local_app(controller: MainController) -> flask.Flask:
    init_sentry("local")

    app = flask.Flask(__name__)
    app.url_map.strict_slashes = False
    flask_cors.CORS(app)

    editor = get_editor_bp(controller)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(controller)
    app.register_blueprint(player)

    return app
