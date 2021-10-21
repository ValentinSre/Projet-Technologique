from flask import Flask, render_template, url_for, request

app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

from .utils import find_content

@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')

@app.route('/tp1/')
@app.route('/tp1/part1')
def tp1_q1():
    return render_template('/tp1/part1.html')

@app.route('/result/')
def result():
    style = request.args.get('style')
    user_name = request.args.get('first_name')
    uid = request.args.get('id')
    titre = find_content(style).titre
    return render_template('result.html',
                            user_name=user_name,
                            titre=titre)


# @app.route('/contents/<int:content_id>/')
# def content(content_id):
#     return '%s' % content_id
