from flask import Flask
from flask_cors import CORS

from src.routes.health.health_routes import health
from src.routes.sheets.sheets_routes import sheets

app = Flask(__name__)
CORS(app)
app.register_blueprint(health)
app.register_blueprint(sheets)
