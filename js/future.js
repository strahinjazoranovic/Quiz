const questions = [
    {
        question: "Wat is de echte naam van Future?",
        answers: [
            { text: "Aubrey Drake Graham", correct: false },
            { text: "Nayvadius DeMun Wilburn", correct: true },
            { text: "Sean Michael Leonard Anderson", correct: false },
        ]
    },
    {
        question: "In welk jaar bracht Future zijn debuutalbum uit?",
        answers: [
            { text: "2010", correct: false },
            { text: "2014", correct: false },
            { text: "2012", correct: true },
        ]
    },
    {
        question: "Hoe heet het debuutalbum van Future?",
        answers: [
            { text: "Pluto", correct: true },
            { text: "Honest", correct: false },
            { text: "DS2", correct: false },
        ]
    },
    {
        question: "Welke mixtape bracht Future uit in samenwerking met Drake?",
        answers: [
            
            { text: "Monster", correct: false },
            { text: "What a Time to Be Alive", correct: true },
            { text: "Beast Mode", correct: false },
        ]
    },
    {
        question: "Hoeveel kinderen heeft Future?",
        answers: [
            { text: "5", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
        ]
    },
    {
        question: "Welke nummer van Future bevat een feature van The Weeknd?",
        answers: [
            { text: "Low Life", correct: true },
            { text: "Mask Off", correct: false },
            { text: "Jumpman", correct: false },
        ]
    },
    {
        question: "Met welke artiest had Future een langdurige relatie?",
        answers: [
            { text: "Ciara", correct: true },
            { text: "Rihanna", correct: false },
            { text: "Nicki Minaj", correct: false },
        ]
    },
    {
        question: "Welke nummer van Future bevat de tekst 'Mask on, f*** it, mask off'?",
        answers: [
            { text: "March Madness", correct: false },
            { text: "Stick Talk", correct: false },
            { text: "Mask Off", correct: true },
        ]
    },
    {
        question: "Hoe heet de samenwerking tussen Future en Juice WRLD?",
        answers: [
            { text: "WRLD on Drugs", correct: true },
            { text: "Super Slimey", correct: false },
            { text: "Drip Harder", correct: false },
        ]
    },
    {
        question: "Welke nummer van Future bevat een feature van Kendrick Lamar?",
        answers: [
            { text: "Fine China", correct: false },
            { text: "King's Dead", correct: true },
            { text: "Life Is Good", correct: false },
        ]
    },
    {
        question: "In welk jaar bracht Future het album 'DS2' uit?",
        answers: [
            { text: "2015", correct: true },
            { text: "2016", correct: false },
            { text: "2014", correct: false },
        ]
    },
    {
        question: "Hoe heet de samenwerking tussen Future en Young Thug?",
        answers: [
            { text: "What a Time to Be Alive", correct: false },
            { text: "Super Slimey", correct: true },
            { text: "Drip Harder", correct: false },
        ]
    },
    {
        question: "Welke nummer van Future bevat een feature van Lil Wayne?",
        answers: [
    
            { text: "Used to This", correct: false },
            { text: "Life Is Good", correct: false },
            { text: "Love Me", correct: true },
        ]
    },
    {
        question: "Hoe heet de samenwerking tussen Future en Zaytoven?",
        answers: [
            { text: "Monster", correct: false },
            { text: "56 Nights", correct: false },
            { text: "Beast Mode", correct: true },
        ]
    },
    {
        question: "Welke nummer van Future bevat een feature van Rihanna?",
        answers: [
            { text: "Loveeeeeee Song", correct: true },
            { text: "Low Life", correct: false },
            { text: "Jumpman", correct: false },
        ]
    },
    {
        question: "Hoe heet de samenwerking tussen Future en DJ Esco?",
        answers: [
            { text: "Beast Mode", correct: false },
            { text: "56 Nights", correct: true },
            { text: "Monster", correct: false },
        ]
    },
    {
        question: "Welke nummer van Future bevat een feature van Drake?",
        answers: [
            { text: "Low Life", correct: false },
            { text: "Life Is Good", correct: true },
            { text: "Mask Off", correct: false },
        ]
    },
    {
        question: "In welk jaar bracht Future het album 'The WIZRD' uit?",
        answers: [
            { text: "2019", correct: true },
            { text: "2018", correct: false },
            { text: "2020", correct: false },
        ]
    },
    {
        question: "Hoe heet de samenwerking tussen Future en Metro Boomin?",
        answers: [
            { text: "Beast Mode", correct: false },
            { text: "56 Nights", correct: false },
            { text: "Monster", correct: true },
        ]
    },
    {
        question: "Welke nummer van Future bevat een feature van Travis Scott?",
        answers: [
            { text: "Low Life", correct: false },
            { text: "Mask Off", correct: false },
            { text: "3500", correct: true },
        ]
    }
];
    


// Elementen voor het weergeven van de vraag en antwoorden
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");
const muziek = new Audio('sounds/future.1.mp3') //Dit is het geluid dat je hoort wanneer je een 10 scoort bij quiz


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
    button.innerHTML = answer.text;  // Zet de tekst van de knop
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
    questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> LIFE IS GOOD YOU KNOW WHAT I MEAN`;  // Toon de score
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