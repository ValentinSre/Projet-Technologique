from flask import Flask, render_template, url_for, request, send_file
import json
import glob
import os
from flask import request, redirect


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
@app.route('/tp1/part1-2-0')
def tp1_par1_2_0():
    return render_template('/tp1/part1-2-0.html')

@app.route('/tp1/part1-2')
def tp1_par1_2():
    return render_template('/tp1/part1-2.html')

#TP1 partie 2.1
@app.route('/tp1/part2')
def tp1_part2():
    return render_template('/tp1/part2.html')

#TP1 partie 2.2
@app.route('/tp1/part2-1')
def tp1_part2_1():
    return render_template('/tp1/part2-1.html')

#TP1 partie 3.1
@app.route('/tp1/part3')
def tp1_part3():
    return render_template('/tp1/part3.html')

#TP1 partie 3.2
@app.route('/tp1/part3-1')
def tp1_part3_1():
    return render_template('/tp1/part3-1.html')

#TP1 conclusion
@app.route('/tp1/conclusion')
def tp1_ccl():
    return render_template('/tp1/ccl.html')

# Interface SQL
@app.route('/sql')
def sql():
    return render_template('/sql.html')

# TP2 partie 1.1
@app.route('/tp2/')
@app.route('/tp2/part1')
def tp2_par1():
    return render_template('/tp2/part1.html')

#TP2 partie 1.2
@app.route('/tp2/part1-1')
def tp2_par1_1():
    return render_template('/tp2/part1-1.html')

#TP2 partie 1.3
@app.route('/tp2/part1-2')
def tp2_par1_2():
    return render_template('/tp2/part1-2.html')

#TP2 partie 1.4
@app.route('/tp2/part1-3')
def tp2_par1_3():
    return render_template('/tp2/part1-3.html')

#TP2 partie 2.1
@app.route('/tp2/part2')
def tp2_par2():
    return render_template('/tp2/part2.html')

#TP2 partie 2.2
@app.route('/tp2/part2-1')
def tp2_par2_1():
    #targetPattern = r".\appBDD\static\json\graph(vers=[0-9]*).json"
    #urlFichier = glob.glob(targetPattern)[-1]
    #decompoUrl = urlFichier.split("=")[1]
    #version = int(decompoUrl.split(")")[0])
    return render_template('/tp2/part2-1.html', id=5)

# @app.route('/contents/<int:content_id>/')
# def content(content_id):
#     return '%s' % content_id

""""
import graphviz
import os
import io
import pydot
import PIL.Image as Image

@app.route('/test', methods = ['GET', 'POST'])
def test():
    if request.method == "POST":
        req = request.form

        sujet = req["subject"]
        relation = req["relation"]
        objet = req["object"]

        #os.environ["PATH"] += os.pathsep + "C:\\users\\valen\\anaconda3\Library\\bin\\graphviz"
        # create file-object in memory
        file_object = io.BytesIO()
        d = graphviz.Graph()
        d.edge("Peter Parker", "Spider-Man")
        d.edge("Peter Parker", "Horizon Labs", "travaille")
        d.edge("Peter Parker", "Gwen Stacy", "aime")
        d.edge("Peter Parker", "Harry Osborn", "meilleur ami")
        d.edge(sujet, objet, relation)
        test = d._repr_image_png()
        imageTest = Image.open(io.BytesIO(test))
        im1 = imageTest.save(r".\appBDD\static\img\graphe.png")
    image = r".\static\img\graphe.png"
    return send_file(image, mimetype='image/png')
"""

@app.route('/formulaire', methods = ['GET', 'POST'])
def test():
    if request.method == "POST":
        req = request.form

        sujet = req["subject"]
        relation = req["relation"]
        objet = req["object"]

        targetPattern = r".\appBDD\static\json\graph(vers=[0-9]*).json"
        urlFichier = glob.glob(targetPattern)[-1]

        existeSujet = False
        existeObjet = False
        idSujet = -1
        idObjet = -1

        with open(urlFichier) as json_file:
            data = json.load(json_file)
            noeuds = data['nodes']
            liens = data['links']
            for p in noeuds:
                if p['name'] == sujet:
                    existeSujet = True
                    idSujet = p['id']
                if p['name'] == objet:
                    existeObjet = True
                    idObjet = p['id']
        if existeSujet == False:
            idSujet = len(noeuds) + 1 
            dic = {'name': sujet, 'id': idSujet}
            noeuds.append(dic)
        if existeObjet == False:
            idObjet = len(noeuds) + 1
            dic = {'name': objet, 'id': idObjet}
            noeuds.append(dic)
        link = {"source": idSujet, "target": idObjet, "type": relation}
        liens.append(link)
        file = {"nodes": noeuds, "links": liens}

        decompoUrl = urlFichier.split("=")[1]
        version = int(decompoUrl.split(")")[0]) + 1
        os.remove(urlFichier)
        urlFichier = "./appBDD/static/json/graph(vers=" + str(version) + ").json"

        with open(urlFichier, 'w') as fp:
            json.dump(file, fp)
    return render_template('/tp2/part2-1.html', id=version)


