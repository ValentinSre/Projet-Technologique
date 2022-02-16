// --------------------- GESTION DU QUIZ -------------------------//

(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
      monQuiz5.forEach((currentQuestion, questionNumber) => {
          const answers = []; // pour stocker la liste des réponses possibles
          // On ajoute un bouton 'radio' pour chaque lettre-réponse possible
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push( // on ajoute à la sortie la question et les réponses
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join(''); // on combine notre liste de sortie en une string HTML et le mettre sur la page
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers'); // on rassemble les containers réponses 
      let numCorrect = 0;
      monQuiz5.forEach( (currentQuestion, questionNumber) => { // pour chaque question
        const answerContainer = answerContainers[questionNumber]; // on cherche la réponse sélectionnée
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){ // si c'est la bonne réponse
          numCorrect++; // +1 bonne réponse
          answerContainers[questionNumber].style.color = 'green'; // on colore les réponses en vert 
        } else {
          answerContainers[questionNumber].style.color = 'red';  // on colore les réponses en rouge
        }
      });
    }
  
    function showSlide(n) {
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz5');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const monQuiz5 = [
      { question: "Qu'est-ce qu'un moteur de recherche ?",
        answers: { a: "Une voiture expérimentale", b: "Une application pour chercher des informations sur le Web", c: "Un site qui traduit le HTML pour moi"},
        correctAnswer: "b" }
    ];
  
    buildQuiz();
  
    const slides = document.querySelectorAll(".slide");
    slides[0].classList.add('active-slide');
    submitButton.addEventListener('click', showResults);
  
  })()

  // --------------------- GESTION DES BOUTONS -------------------------//
let btn1 = document.getElementById("submit");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("submit51");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");   
let btn7 = document.getElementById("btn7");  
let div0 = document.getElementById("div0");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");

btn1.addEventListener("click", () => {
  	if(getComputedStyle(div1).display == "none"){
    	div1.style.display = "block";
  	}
})

btn2.addEventListener("click", () => {
  	if(getComputedStyle(div2).display == "none"){
		div0.style.display = "none";
		div2.style.display = "block";
  	}
})

btn3.addEventListener("click", () => {
  	if(getComputedStyle(div3).display == "none"){
    	div3.style.display = "block";
  	}
})

btn4.addEventListener("click", () => {
  	if(getComputedStyle(div4).display == "none"){
		div2.style.display = "none";
		div3.style.display = "none";
    	div4.style.display = "block";
  	}
})

btn5.addEventListener("click", () => {
  	if(getComputedStyle(div5).display == "none"){
		div5.style.display = "block";
  	}
})

btn6.addEventListener("click", () => {
  	if(getComputedStyle(div6).display == "none"){
   		div6.style.display = "block";
  	}
})

btn7.addEventListener("click", () => {
  	if(getComputedStyle(div7).display == "none"){
		div7.style.display = "block";
  	}
})