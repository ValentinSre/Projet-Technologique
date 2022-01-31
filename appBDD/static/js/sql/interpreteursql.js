var interpBtn = document.getElementById("interpreter");
var tables = document.getElementById("tables");
var outputDiv = document.getElementById('output');
var errorDiv = document.getElementById('echec');
var commandsElm = document.getElementById('input');

var worker = new Worker("/static/js/sql/worker.sql-wasm.js"); // Besoin d'un worker pour faire tourner sql.js
var worker2 = new Worker("/static/js/sql/worker.sql-wasm.js"); // Besoin d'un worker pour faire tourner sql.js

interpBtn.addEventListener("click", executionComm, true);
window.addEventListener("onload", references());
worker.onerror = erreurTab;
worker.postMessage({ action: 'open' }); // Ouverture d'une BDD
worker2.onerror = erreurTab;
worker2.postMessage({ action: 'open' }); // Ouverture d'une BDD

function interprete(input) { // Exécution des requêtes
  worker.onmessage = function (event) {
      var results = event.data.results;
      if (!results) {
          erreurTab({msg: event.data.error});
          return;
      }
      outputDiv.innerHTML = "";
      for (var i = 0; i < results.length; i++) {
        outputDiv.appendChild(creationTableau(results[i].columns, results[i].values));
      }
  }
  worker.postMessage({ action: 'exec', sql: input });
  outputDiv.textContent = "...";
}

var creationTableau = function () { // création d'un tableau pour afficher les résultats
  function conc(valeurs, nom) {
      if (valeurs.length === 0) return '';
      var ouv = '<' + nom + '>', ferm = '</' + nom + '>';
      return ouv + valeurs.join(ferm + ouv) + ferm;
  }
  return function (col, valeurs) {
      var tableau = document.createElement('table');
      var html = '<thead>' + conc(col, 'th') + '</thead>';
      var lignes = valeurs.map(function (v) { 
        return conc(v, 'td'); 
      });
      html += '<tbody>' + conc(lignes, 'tr') + '</tbody>' + "<br>";
      tableau.innerHTML = html;
      return tableau;
  }
}();

function executionComm() { // exécution quand le bouton est cliqué
  errorDiv.style.height = '0'; // si pas d'erreur, on réduit l'espace d'erreur
  interprete(editor.getValue() + ';');
}

function test(input) { // Exécution des requêtes
  worker2.onmessage = function (event) {
      var results = event.data.results;
      if (!results) {
          erreurTab({msg: event.data.error});
          return;
      }
      tables.innerHTML = "";
      for (var i = 0; i < results.length; i++) {
        tables.appendChild(creationTableau(results[i].columns, results[i].values));
      }
  }
  worker2.postMessage({ action: 'exec', sql: input });
  tables.textContent = "...";
}

function references(){
  test("SELECT * FROM livre; \ SELECT * FROM adaptation; \ SELECT * FROM artiste;");
}
function erreurTab(err) {
  errorDiv.style.height = '2rem'
  errorDiv.textContent = err.msg;
}

var editor = CodeMirror.fromTextArea(commandsElm, {
	mode: 'text/x-mysql',
	viewportMargin: Infinity,
	indentWithTabs: true,
	smartIndent: true,
	lineNumbers: true,
	matchBrackets: true,
	autofocus: true
});