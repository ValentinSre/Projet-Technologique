import os

SECRET_KEY = "#d*KPfFLM\nilK\\9g\x0b7#\tj%dA"

# Database initialization
basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')


