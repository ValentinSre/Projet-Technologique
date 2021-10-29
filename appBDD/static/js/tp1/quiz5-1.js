// --------------------- GESTION DU QUIZ -------------------------//

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
    monQuiz51.forEach((currentQuestion, questionNumber) => {
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
    monQuiz51.forEach( (currentQuestion, questionNumber) => { // pour chaque question
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
    resultsContainer.innerHTML = `${numCorrect} sur ${monQuiz51.length} <br>`; // on affiche le nb total de bonnes réponses
  }

  function showSlide(n) {
  }

  // Variables
  const quizContainer = document.getElementById('quiz51');
  const resultsContainer = document.getElementById('results51');
  const submitButton = document.getElementById('submit51');
  const monQuiz51 = [
    { question: "Qu'est-ce qu'un moteur de recherche ?",
      answers: { a: "Une voiture expérimentale", b: "Une application pour chercher des informations sur le Web", c: "Un site qui traduit le HTML pour moi"},
      correctAnswer: "b" }
  ];

  buildQuiz();

  const slides = document.querySelectorAll(".slide");
  slides[1].classList.add('active-slide');
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})()
