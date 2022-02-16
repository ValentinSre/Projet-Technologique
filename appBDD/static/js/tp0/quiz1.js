// --------------------- GESTION DU QUIZ -------------------------//

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
    monQuiz2.forEach((currentQuestion, questionNumber) => {
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
    monQuiz2.forEach( (currentQuestion, questionNumber) => { // pour chaque question
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
    resultsContainer.innerHTML = `${numCorrect} sur ${monQuiz2.length} <br> (tu peux revenir en arrière)`; // on affiche le nb total de bonnes réponses
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz1');
  const resultsContainer = document.getElementById('results1');
  const submitButton = document.getElementById('submit1');

  //----------- QUESTIONS -----------//
  const monQuiz2 = [
    { question: "Tableau à 2 colonnes avec des nombres",
    answers: { a: "C'est une donnée", b: "C'est une information"},
    correctAnswer: "a" },
    { question: "Le nombre '18'",
    answers: { a: "C'est une donnée", b: "C'est une information"},
    correctAnswer: "a" },
    { question: "Tableau avec les températures de chaque ville",
    answers: { a: "C'est une donnée", b: "C'est une information"},
    correctAnswer: "b" },
    { question: "18 ans = âge de la majorité",
    answers: { a: "C'est une donnée", b: "C'est une information"},
    correctAnswer: "b" },
    { question: "Photo de 1000 pixels",
    answers: { a: "C'est une donnée", b: "C'est une information"},
    correctAnswer: "a" },
    { question: "Graphique montrant les entrées d'Avengers chaque semaine",
    answers: { a: "C'est une donnée", b: "C'est une information"},
    correctAnswer: "b" },
    
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous1");
  const nextButton = document.getElementById("next1");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  showSlide(currentSlide);
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})()

// --------------------- GESTION DES BOUTONS -------------------------//

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

btn1.addEventListener("click", () => {
    if(getComputedStyle(div1).display == "none"){
      div1.style.display = "block";
    }
})

btn2.addEventListener("click", () => {
    if(getComputedStyle(div2).display == "none"){
      div2.style.display = "block";
    }
})
