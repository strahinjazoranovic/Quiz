// Array van vragen en antwoorden voor de quiz
const questions = [
  {
    question: "Wat is de hoofdstad van Nederland?", // Vraag 1
    answers: [
      { test: "Rotterdam", correct: false },  // Onjuist antwoord
      { test: "Amsterdam", correct: true },   // Juist antwoord
      { test: "Haarlem", correct: false },    // Onjuist antwoord
    ]
  },
  {
    question: "Wat is de hoofdstad van Frankrijk", // Vraag 2
    answers: [
      { test: "Marseille", correct: false },
      { test: "Lyon", correct: false },
      { test: "Parijs", correct: true }, // Correct antwoord
    ]
  },
  {
    question: "Wat is de hoofdstad van Duitsland", // Vraag 3
    answers: [
      { test: "München", correct: false },
      { test: "Frankfurt", correct: false },
      { test: "Berlijn", correct: true }, // Correct antwoord
    ]
  },
  {
    question: "Wat is de hoofdstad van België", // Vraag 4
    answers: [
      { test: "Brussel", correct: true }, // Correct antwoord
      { test: "Gent", correct: false },
      { test: "Antwerpen", correct: false },
    ]
  },
  {
    question: "Wat is de hoofdstad van Zweden?", // Vraag 5
    answers: [
      { test: "Göteborg", correct: false },
      { test: "Stockholm", correct: true }, // Correct antwoord
      { test: "Malmö", correct: false },
    ]
  },
  {
    question: "Wat is de hoofdstad van Mexico?", // Vraag 6
    answers: [
      { test: "Guadalajara", correct: false },
      { test: "Monterrey", correct: false },
      { test: "Mexico-Stad", correct: true }, // Correct antwoord
    ]
  },
  {
    question: "Wat is de hoofdstad van Griekenland?", // Vraag 7
    answers: [
      { test: "Athene", correct: true }, // Correct antwoord
      { test: "Thessaloniki", correct: false },
      { test: "Kreta", correct: false },
    ]
  },
  {
    question: "Wat is de hoofdstad van China?", // Vraag 8
    answers: [
      { test: "Shanghai", correct: false },
      { test: "Peking (Beijing)", correct: true }, // Correct antwoord
      { test: "Hong Kong", correct: false },
    ]
  },
  {
    question: "Wat is de hoofdstad van Argentinië?", // Vraag 9
    answers: [
      { test: "Rosario", correct: false },
      { test: "Buenos Aires", correct: true }, // Correct antwoord
      { test: "Córdoba", correct: false },
    ]
  },
  {
    question: "Wat is de hoofdstad van Indonesië?", // Vraag 10
    answers: [
      { test: "Bali", correct: false },
      { test: "Jakarta", correct: true }, // Correct antwoord
      { test: "Surabaya", correct: false },
    ]
  }
];

//  elementen voor het weergeven van de vraag en antwoorden
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;  // Toon de score
  nextButton.innerHTML = "Play Again";  // Zet de tekst van de knop op "Play Again"
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
