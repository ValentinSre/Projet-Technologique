
import random

from appBDD.models import Livre, Style

def find_content(style):
    contents = Livre.query.filter(Livre.style == Style[style]).all()
    return random.choice(contents)
