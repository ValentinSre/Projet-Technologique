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
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz5');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    // Questions 
    const monQuiz5 = [
      { question: "Qu'est-ce que le RDF ?",
        answers: { a: "Un PDF que l'on peut lire", b: "Un format pour décrire les données", c: "Un registre de tous les documents du Web" },
        correctAnswer: "b" }
    ];
  
    buildQuiz();
  
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
  })()

// --------------------- GESTION DES BOUTONS  -------------------------//

  let btn1 = document.getElementById("submit");
  let btn2 = document.getElementById("btn2");
  let div1 = document.getElementById("div1");
  let div2 = document.getElementById("div2");

  btn1.addEventListener("click", () => {
    if(getComputedStyle(div1).display == "none"){
      div1.style.display = "block";
    }
  })
