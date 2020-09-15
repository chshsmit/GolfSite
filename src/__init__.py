from flask import Flask

from src.routes.health.health_routes import health
from src.routes.sheets.sheets_routes import sheets

app = Flask(__name__)
app.register_blueprint(health)
app.register_blueprint(sheets)
