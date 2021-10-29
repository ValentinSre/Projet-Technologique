from flask import Flask, render_template, url_for, request

app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

from .utils import find_content

#Accueil
@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')

#TP1 partie 1.1
@app.route('/tp1/')
@app.route('/tp1/part1')
def tp1_par1():
    return render_template('/tp1/part1.html')

#TP1 partie 1.2
@app.route('/tp1/part1-1')
def tp1_par1_1():
    return render_template('/tp1/part1-1.html')

#TP1 partie 1.3
@app.route('/tp1/part1-2')
def tp1_par1_2():
    return render_template('/tp1/part1-2.html')

#TP1 partie 2.1
@app.route('/tp1/part2')
def tp1_part2():
    return render_template('/tp1/part2.html');

#TP1 partie 2.2
@app.route('/tp1/part2-1')
def tp1_part2_1():
    return render_template('/tp1/part2-1.html');

#TP1 partie 3.1
@app.route('/tp1/part3')
def tp1_part3():
    return render_template('/tp1/part3.html');

#TP1 partie 3.2
@app.route('/tp1/part3-1')
def tp1_part3_1():
    return render_template('/tp1/part3-1.html');


# @app.route('/contents/<int:content_id>/')
# def content(content_id):
#     return '%s' % content_id
