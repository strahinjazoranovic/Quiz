// Array van vragen en antwoorden voor de quiz
const questions = [
    {
      question: "Wat is de volledige naam van Kanye West?", // Vraag 1
      answers: [
        { test: "Kanye Omari West", correct: true },   // Juist antwoord
        { test: "Kanye Alexander West", correct: false },  // Onjuist antwoord
        { test: "Kanye David West", correct: false },  // Onjuist antwoord
      ]
    },
    {
      question: "Welk album van Kanye West werd bekroond met de Grammy voor Album of the Year in 2011?", // Vraag 2
      answers: [
        { test: "The Life of Pablo", correct: false },
        { test: "My Beautiful Dark Twisted Fantasy", correct: true }, // Juist antwoord
        { test: "Graduation", correct: false },
      ]
    },
    {
      question: "In welk jaar bracht Kanye West zijn debuutalbum The College Dropout uit?", // Vraag 3
      answers: [
        { test: "2004", correct: true },  // Juist antwoord
        { test: "2007", correct: false },
        { test: "2010", correct: false },
      ]
    },
    {
      question: "Kanye West begon zijn carrière in de muziek als producer. Voor welke rapper produceerde hij het beroemde nummer “Izzo (H.O.V.A.)", // Vraag 4
      answers: [
        { test: "Nas", correct: false },
        { test: "Lil Wayne", correct: false },  
        { test: "Jay-Z", correct: true }, // Juist antwoord
      ]
    },
    {
      question: "Welke controversiële uitspraak deed Kanye West tijdens een MTV Awards-uitreiking in 2009?", // Vraag 5
      answers: [
        { test: "Ik ga de politiek in", correct: false },
        { test: "Beyoncé had de beste video, ooit", correct: true },  // Juist antwoord
        { test: "Ik stop met muziek", correct: false },
      ]
    },
    {
      question: "Wat is de naam van Kanye West's modebedrijf?", // Vraag 6
      answers: [
        { test: "Westward BoundBaby Voice", correct: false },  
        { test: "K-West", correct: false },
        { test: "Yeezy", correct: true }, // Juist antwoord
      ]
    },
    {
      question: "Kanye West is getrouwd geweest met welke beroemdheid?", // Vraag 7
      answers: [
        { test: "Rihanna", correct: false },
        { test: "Kim Kardashian", correct: true },  // Juist antwoord
        { test: "Playboi Carti", correct: true }, // Juist antwoord
      ]
    },
    {
      question: "Wat is de naam van Kanye's bekende album uit 2018 dat controversieel was vanwege de themas van zelfreflectie en geestelijke gezondheid?", // Vraag 8
      answers: [
        { test: "Ye", correct: true },  // Juist antwoord
        { test: "Life of Pablo", correct: false },
        { test: "Jesus Is King", correct: false },
      ]
    },
    {
      question: "Kanye West heeft zich publiekelijk uitgesproken over een mogelijke politieke carrière. In welk jaar kondigde hij zijn intentie aan om voor president van de Verenigde Staten te lopen?", // Vraag 9
      answers: [
        { test: "2024", correct: false },
        { test: "2020", correct: true },  // Juist antwoord
        { test: "2018", correct: false },
      ]
    },
    {
      question: "In welk nummer van Kanye West komt de beroemde uitspraak “I am a god” voor?", // Vraag 10
      answers: [
        { test: " I Am A God", correct: true },  // Juist antwoord
        { test: "Power", correct: false },
        { test: "Power", correct: false },
      ]
    }
  ];

// Elementen voor het weergeven van de vraag en antwoorden
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");
const muziek = new Audio('sounds/kanye.mp3') //Dit is het geluid dat je hoort wanneer je een 10 scoort bij quiz


// Variabelen om de voortgang en score bij te houden
let currentQuestionindex = 0;
let score = 0;

// Start de quiz
function startQuiz() {
  currentQuestionindex = 0; // Stel de vraagindex in op 0 (eerste vraag)
  score = 0;  // Reset de score
  nextButton.innerHTML = "Next";  // Zet de tekst van de "Next" knop
  showQuestion();  // Laat de eerste vraag zien
}

// Functie om de vraag en de antwoordknoppen weer te geven
function showQuestion() {
  resetstate();  // Reset de vorige antwoorden
  let currentQuestion = questions[currentQuestionindex];  // Haal de huidige vraag op
  let questionNo = currentQuestionindex + 1;  // Bereken het vraagnummer
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  // Toon de vraag

  // Maak een knop voor elk antwoord
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");  // Maak een nieuwe knop
    button.innerHTML = answer.test;  // Zet de tekst van de knop
    button.classList.add("btn");  // Voeg de knopklasse toe
    answerButtons.appendChild(button);  // Voeg de knop toe aan de pagina

    // Voeg een data-attribuut toe om het correcte antwoord aan te geven
    button.dataset.correct = answer.correct ? "true" : "false";  // Als correct is waar, zet data.correct op true
    button.addEventListener("click", selectAnswer);  // Voeg een eventlistener toe aan de knop
  });
}

// Functie om de weergave van vorige vraag en antwoorden te resetten
function resetstate() {
  nextButton.style.display = "none";  // Verberg de "Next" knop
  // Verwijderd alle antwoordknoppen van het scherm
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Functie die wordt aangeroepen wanneer een antwoord wordt geselecteerd
function selectAnswer(e) {
  const selectedBtn = e.target;  // Het aangeklikte antwoord
  const isCorrect = selectedBtn.dataset.correct === "true";  // Controleer of het antwoord correct is
  if (isCorrect) {
    selectedBtn.classList.add("correct");  // Voeg de klasse 'correct' toe als het juist is
    score++;  // Verhoog de score
  } else {
    selectedBtn.classList.add("incorrect");  // Voeg de klasse 'incorrect' toe als het fout is
  }

  // Disable alle knoppen en markeer de juiste knoppen
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";  // Toon de "Next" knop
}

// Functie om de score weer te geven
function showScore() {
  resetstate();  // Reset de weergave
  questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}!`;  // Toon de score
  if (score === 20){
    questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> Look at Gaga she is the creative director at Polaroid. I like some of the gaga songs, wtf does she know about cameras?`;  // Toon de score
    muziek.play()
}
  nextButton.innerHTML = "Speel opnieuw";  // Zet de tekst van de knop op "Speel opnieuw"
  nextButton.style.display = "block";  // Toon de knop
}

// Functie om de "Next" knop te verwerken
function handleNextButton() {
  currentQuestionindex++;  // Verhoog de vraagindex
  if (currentQuestionindex < questions.length) {
    showQuestion();  // Toon de volgende vraag
  } else {
    showScore();  // Toon de score als alle vragen beantwoord zijn
  }
}

// Eventlistener voor de "Next" knop
nextButton.addEventListener("click", () => {
  if (currentQuestionindex < questions.length) {
    handleNextButton();  // Ga naar de volgende vraag
  } else {
    startQuiz();  // Start de quiz opnieuw
  }
});


// Start de quiz bij het laden van de pagina
startQuiz();