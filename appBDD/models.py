# -- coding: utf-8 --

from flask_sqlalchemy import SQLAlchemy
import logging as lg
import enum

from .views import app
# Create database connection object
db = SQLAlchemy(app)

class Style(enum.Enum):
    manga = 0
    comics = 1
    bd = 2

class Livre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titre = db.Column(db.String(200), nullable=False)
    style = db.Column(db.Enum(Style), nullable=False)

    def __init__(self, titre, style):
        self.titre = titre
        self.style = style

#Initialisation BDD
def initdb():
    db.drop_all()
    db.create_all()
    db.session.add(Livre("Pokémon", Style["manga"]))
    db.session.add(Livre("Civil War", Style["comics"]))
    db.session.commit()
    lg.warning('Database initialized!')
