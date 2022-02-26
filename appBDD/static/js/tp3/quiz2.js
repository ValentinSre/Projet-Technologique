(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
    monQuiz1.forEach((currentQuestion, questionNumber) => {
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
    monQuiz1.forEach( (currentQuestion, questionNumber) => { // pour chaque question
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
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

    
    // Questions
    const monQuiz1 = [
      { question: "Que remarquez-vous ?",
        answers: { a: "Il n'y a aucun point commun", b: "Tout est identique sur les 2 sites", c: "Les données de DBPedia sont celles de Wikipédia agencées différemment" },
        correctAnswer: "c" }
    ];
  
    buildQuiz();
  
    const slides = document.querySelectorAll(".slide");
    console.log(slides);
    let currentSlide = 0;
    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
  })()

// --------------------- GESTION DES BOUTONS -------------------------//

  let btn1 = document.getElementById("submit");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let div1 = document.getElementById("div1");
  let div2 = document.getElementById("div2");
  let div3 = document.getElementById("div3");

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

  btn3.addEventListener("click", () => {
      if(getComputedStyle(div3).display == "none"){
        div3.style.display = "block";
      }
  })