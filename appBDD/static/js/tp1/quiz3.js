// --------------------- GESTION DU QUIZ -------------------------//

(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
      monQuiz3.forEach((currentQuestion, questionNumber) => {
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
      monQuiz3.forEach( (currentQuestion, questionNumber) => { // pour chaque question
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
      resultsContainer.innerHTML = `${numCorrect} sur ${monQuiz3.length} <br> (tu peux revenir en arrière)`; // on affiche le nb total de bonnes réponses
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
    const quizContainer = document.getElementById('quiz3');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    // Questions
    const monQuiz3 = [
      { question: "Qu'est-ce qu'un hyperlien ?",
        answers: { a: "Un lien plus que super", b: "Une liaison directe entre deux ordinateurs", c: "Un lien entre deux documents du Web" },
        correctAnswer: "c" },
      { question: "À quoi cela sert-il ?",
        answers: { a: "Naviguer de page en page", b: "Pas grand chose", c: "Voir le contenu de l'ordinateur connecté" },
        correctAnswer: "a" }
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })()

// --------------------- GESTION DES BOUTONS -------------------------//

  let btn1 = document.getElementById("submit");
	let btn2 = document.getElementById("btn2");
	let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("submit31");
	let div0 = document.getElementById("div0");
	let div1 = document.getElementById("div1");
	let div2 = document.getElementById("div2");
	let div3 = document.getElementById("div3");
	let div4 = document.getElementById("div4");
  let div5 = document.getElementById("div5");
  let div6 = document.getElementById("div6");

	btn1.addEventListener("click", () => {
	  	if(getComputedStyle(div1).display == "none"){
	    	div1.style.display = "block";
	  	}
	})

	btn2.addEventListener("click", () => {
	  	if(getComputedStyle(div3).display != "none"){
			  div3.style.display = "none";
	  	} else {
			  div3.style.display = "block";
	    	div2.style.display = "none";
	  	}
	})

	btn3.addEventListener("click", () => {
	  	if(getComputedStyle(div0).display == "none"){
	    		div0.style.display = "block";
          div6.style.display = "none";
	  	}
	})

  btn4.addEventListener("click", () => {
    if(getComputedStyle(div5).display == "none"){
        div5.style.display = "block";
    }
  })