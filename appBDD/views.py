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
def tp1_par1():
    return render_template('/tp1/part1.html')

@app.route('/tp1/eval1')
@app.route('/tp1/quiz1')
def tp1_quiz1():
    return render_template('/tp1/quiz1.html');

@app.route('/tp1/part2')
def tp1_part2():
    return render_template('/tp1/part2.html');

@app.route('/tp1/part2-1')
def tp1_part2_1():
    return render_template('/tp1/part2-1.html');

@app.route('/tp1/eval2')
@app.route('/tp1/quiz2')
def tp1_quiz2():
    return render_template('/tp1/quiz2.html');

@app.route('/tp1/part3')
def tp1_part3():
    return render_template('/tp1/part3.html');

@app.route('/tp1/eval3')
@app.route('/tp1/quiz3')
def tp1_quiz3():
    return render_template('/tp1/quiz3.html');

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
