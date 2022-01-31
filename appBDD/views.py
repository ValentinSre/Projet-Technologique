from flask import Flask, render_template, url_for, request, send_file
import json
import html
import glob
import os
from flask import request, redirect


app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

from .utils import find_content
import codecs

@app.route('/tp2/part1-1')
@app.route('/tp2/')
def tp2_par1_1():
    return render_template('/tp2/part1-1.html', tp=2, part=1)

@app.route('/tp2/part1-2')
def tp2_par1_2():
    return render_template('/tp2/part1-2.html', tp=2, part=1)

@app.route('/tp2/part1-3')
def tp2_par1_3():
    return render_template('/tp2/part1-3.html', tp=2, part=1)

@app.route('/tp2/part1-4')
def tp2_par1_4():
    return render_template('/tp2/part1-4.html', tp=2, part=1)

@app.route('/tp2/part1-5')
def tp2_par1_5():
    return render_template('/tp2/part1-5.html', tp=2, part=1)

@app.route('/tp2/part1-1-html', methods = ['GET', 'POST'])
def tp2_par1_html():
    prod = production()
    if prod:
        path = "/app/appBDD/templates/html.html"
    else:
        path = r".\appBDD\templates\html.html"
    if request.method == "POST":
        req = request.form
        code = req["code"]
        table_file = open(path, 'w')
        table_file.write(code)
        modifie = True
        table_file.close()
    else: 
        table_file = open(path, 'w')
        table_file.write("<h1>Ceci est une balise de grand titre.</h1><h2>Ceci est une balise de titre moins grand.</h2><p>Ceci est une balise de paragraphe</p><p>Tout est personnalisable : page faite par (mets ton prenom) !</p>")
        table_file.close()
        modifie = False
    return render_template('/tp2/part1-1-bis.html', tp=3, part=2, modification = modifie)

@app.route('/html')
def html_test():
    return render_template('html.html')

@app.route('/css')
def css_test():
    return render_template('css.html')

@app.route('/tp2/part1-2-css', methods = ['GET', 'POST'])
def tp2_par1_css():
    prod = production()
    if prod:
        path = "/app/appBDD/templates/css.html"
    else:
        path = r".\appBDD\templates\css.html"
    
    if request.method == "POST":
        req = request.form
        code = req["code"]
        htmlStruct = "<h1>Ceci est une balise de grand titre.</h1><h2>Ceci est une balise de titre moins grand.</h2><p>Ceci est une balise de paragraphe</p><style>" + code + "</style>"
        table_file = open(path, 'w')
        table_file.write(htmlStruct)
        modifie = True
        table_file.close()
    else: 
        table_file = open(path, 'w')
        table_file.write("<h1>Ceci est une balise de grand titre.</h1><h2>Ceci est une balise de titre moins grand.</h2><p>Ceci est une balise de paragraphe</p>")
        table_file.close()
        modifie = False
    return render_template('/tp2/part1-2-bis.html', tp=3, part=2, modification = modifie)

#Accueil
@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')

# Interface SQL
@app.route('/sql')
def sql():
    return render_template('/sql.html')

#----------------------------------------------------------
#TP 0 : INTRODUCTION
#----------------------------------------------------------
# TP0 : page 1
@app.route('/tp0/')
def tp0():
    return render_template('/tp0/introduction.html', tp=0)

# TP0 : page 1
@app.route('/tp0/part1')
def tp0_par1():
    return render_template('/tp0/part1.html', tp=0)

#----------------------------------------------------------
#TP 1 : FONCTIONNEMENT DU WEB
#----------------------------------------------------------
#TP1 partie 1.1
@app.route('/tp1/')
@app.route('/tp1/part1-1')
def tp1_par1_1():
    return render_template('/tp1/part1-1.html', tp=1, part=1)

#TP1 partie 1.2
@app.route('/tp1/part1-2')
def tp1_par1_2():
    return render_template('/tp1/part1-2.html', tp=1, part=1)

#TP1 partie 1.3
@app.route('/tp1/part1-3')
def tp1_par1_3():
    return render_template('/tp1/part1-3.html', tp=1, part=1)

#TP1 partie 1.4
@app.route('/tp1/part1-4')
def tp1_par1_4():
    return render_template('/tp1/part1-4.html', tp=1, part=1)

#TP1 partie 2.1
@app.route('/tp1/part2-1')
def tp1_part2_1():
    return render_template('/tp1/part2-1.html', tp=1, part=2)

#TP1 partie 2.2
@app.route('/tp1/part2-2')
def tp1_part2_2():
    return render_template('/tp1/part2-2.html', tp=1, part=2)

#TP1 partie 2.3
@app.route('/tp1/part2-3')
def tp1_part2_3():
    return render_template('/tp1/part2-3.html', tp=1, part=2)

#TP1 partie 2.4
@app.route('/tp1/part2-4')
def tp1_part2_4():
    return render_template('/tp1/part2-4.html', tp=1, part=2)

#TP1 conclusion
@app.route('/tp1/conclusion')
def tp1_ccl():
    return render_template('/tp1/ccl.html', tp=1)

#----------------------------------------------------------
#TP 3 : LE WEB DES DONNÉES
#----------------------------------------------------------

#TP3 partie 1.1
@app.route('/tp3')
@app.route('/tp3/part1-1')
def tp3_par1_1():
    return render_template('/tp3/part1-1.html', tp=3, part=1)

#TP3 partie 1.2
@app.route('/tp3/part1-2')
def tp3_par1_2():
    return render_template('/tp3/part1-2.html', tp=3, part=1)

#TP3 partie 1.3
@app.route('/tp3/part1-3')
def tp3_par1_3():
    return render_template('/tp3/part1-3.html', tp=3, part=1)

#TP3 partie 2.1
@app.route('/tp3/part2-1')
def tp3_par2_1():
    return render_template('/tp3/part2-1.html', tp=3, part=2)

#TP3 partie 2.2
@app.route('/tp3/part2-2')
def tp3_par2_2():
    regenGraphe()
    path = "/app/appBDD/static/json/graph(vers=[0-9]*).json"
    urlFichier = glob.glob(path)
    if len(urlFichier) < 1:
        path = r".\appBDD\static\json\graph(vers=[0-9]*).json"
        urlFichier = glob.glob(path)
    decompoUrl = (urlFichier[-1]).split("=")[1]
    version = int(decompoUrl.split(")")[0])
    return render_template('/tp3/part2-2.html', id=version, tp=3, part=2)

#TP3 partie 2.3
@app.route('/tp3/part2-3')
def tp3_par2_3():
    return render_template('/tp3/part2-3.html', tp=3, part=2)

# @app.route('/contents/<int:content_id>/')
# def content(content_id):
#     return '%s' % content_id

def production():
    path = "/app/appBDD/static/json/graph(vers=[0-9]*).json"
    urlFichier = glob.glob(path)
    if len(urlFichier) < 1:
        return False
    else:
        return True
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
def formulaireGraphe():
    if request.method == "POST":
        req = request.form

        sujet = req["subject"]
        relation = req["relation"]
        objet = req["object"]

        production = True
        path = "/app/appBDD/static/json/graph(vers=[0-9]*).json"
        urlFichier = glob.glob(path)
        if len(urlFichier) < 1:
            production = False
            path = r".\appBDD\static\json\graph(vers=[0-9]*).json"
            urlFichier = glob.glob(path)

        existeSujet = False
        existeObjet = False
        idSujet = -1
        idObjet = -1
        
        with open(urlFichier[-1]) as json_file:
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

        decompoUrl = urlFichier[-1].split("=")[1]
        version = int(decompoUrl.split(")")[0]) + 1
        
        os.remove(urlFichier[-1])
    
        if production:
            urlFichier = "/app/appBDD/static/json/graph(vers=" + str(version) + ").json"
        else:
            urlFichier = "./appBDD/static/json/graph(vers=" + str(version) + ").json"
        
        with open(urlFichier, 'w') as fp:
            json.dump(file, fp)
        
    return render_template('/tp3/part2-2.html', id=version, tp=3, part=2)

# Fonction pour regénérer le graphe à 0 (version 1)
def regenGraphe():
    # On localise le JSON du graphe
    production = True
    path = "/app/appBDD/static/json/graph(vers=[0-9]*).json"
    urlFichier = glob.glob(path)
    if len(urlFichier) < 1:
        production = False
        path = r".\appBDD\static\json\graph(vers=[0-9]*).json"
        urlFichier = glob.glob(path)

    # On le supprime
    os.remove(urlFichier[-1])

    # On en regénère un nouveau JSON
    file = {
    "nodes": [{ "name": "Peter Parker", "id": 1 }, { "name": "Norman Osborn", "id": 2 }, { "name": "Oscorp", "id": 3 }, { "name": "Spider-Man", "id": 4 } ],
    "links": [{ "source": 1, "target": 2, "type": "CONNAIT" }, {"source": 1, "target": 3, "type": "A_CRÉÉ" }, { "source": 2, "target": 3, "type": "TRAVAILLE_CHEZ" }, { "source": 1, "target": 4, "type": "EST" }] }

    if production:
        urlFichier = "/app/appBDD/static/json/graph(vers=1).json"
    else:
        urlFichier = "./appBDD/static/json/graph(vers=1).json"

    with open(urlFichier, 'w') as fp:
        json.dump(file, fp)