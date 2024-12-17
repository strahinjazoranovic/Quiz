const questions = [
    {
        question: "Wat is de echte naam van Yuno Miles?",
        answers: [
            { text: "Miles Parker", correct: false },
            { text: "Yuno Miles", correct: false },
            { text: "Miles Wahlberg", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "In welk jaar bracht Yuno Miles zijn eerste single uit?",
        answers: [
            { text: "2018", correct: false },
            { text: "2019", correct: true }, // Juist antwoord
            { text: "2020", correct: false },
        ]
    },
    {
        question: "Wat is de titel van Yuno Miles' eerste album?",
        answers: [
            { text: "Yuno World", correct: false },
            { text: "Miles Ahead", correct: false },
            { text: "Yuno Universe", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Welke producer werkte veel samen met Yuno Miles?",
        answers: [
            { text: "Metro Boomin", correct: false },
            { text: "Pierre Bourne", correct: false },
            { text: "Yuno Beats", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Wat is de naam van Yuno Miles' tweede studioalbum?",
        answers: [
            { text: "Yuno World", correct: true }, // Juist antwoord
            { text: "Miles Ahead", correct: false },
            { text: "Yuno Universe", correct: false },
        ]
    },
    {
        question: "Welke unieke stemstijl gebruikt Yuno Miles vaak?",
        answers: [
            { text: "Baby Voice", correct: false },
            { text: "Mumble Flow", correct: false },
            { text: "Yuno Voice", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Welke rapper is een frequente samenwerkingspartner van Yuno Miles?",
        answers: [
            { text: "Lil Uzi Vert", correct: false },
            { text: "Travis Scott", correct: false },
            { text: "Yuno Buddy", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Hoe noemen fans de dans bij het nummer 'Yuno Hit'?",
        answers: [
            { text: "The Yuno Dance", correct: true }, // Juist antwoord
            { text: "The Dab", correct: false },
            { text: "The Woah", correct: false },
        ]
    },
    {
        question: "In welk jaar werd Yuno Miles geboren?",
        answers: [
            { text: "1995", correct: false },
            { text: "1996", correct: false },
            { text: "1992", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Wat is de stijl die vaak wordt geassocieerd met Yuno Miles' muziek?",
        answers: [
            { text: "Trap", correct: false },
            { text: "Lo-fi Hip Hop", correct: false },
            { text: "Yuno Style", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Welke bekende artiest heeft Yuno Miles als inspiratiebron genoemd?",
        answers: [
            { text: "Kanye West", correct: false },
            { text: "Drake", correct: false },
            { text: "Tyler, The Creator", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Wat is de naam van Yuno Miles' fanbase?",
        answers: [
            { text: "Yuno Nation", correct: true }, // Juist antwoord
            { text: "Miles Army", correct: false },
            { text: "Yuno Squad", correct: false },
        ]
    },
    {
        question: "Welke muziekvideo van Yuno Miles ging viraal op YouTube?",
        answers: [
            { text: "Yuno Hit", correct: true }, // Juist antwoord
            { text: "Miles Ahead", correct: false },
            { text: "Yuno Dance", correct: false },
        ]
    },
    {
        question: "Welke sociale media platform gebruikt Yuno Miles het meest?",
        answers: [
            { text: "Instagram", correct: false },
            { text: "Twitter", correct: false },
            { text: "TikTok", correct: true }, // Juist antwoord
        ]
    },
    {
        question: "Wat is de naam van Yuno Miles' eerste mixtape?",
        answers: [
            { text: "Yuno Tape", correct: true }, // Juist antwoord
            { text: "Miles Tape", correct: false },
            { text: "Yuno Mix", correct: false },
        ]
    },
    {
        question: "Welke bekende producer heeft Yuno Miles ontdekt?",
        answers: [
            { text: "Dr. Dre", correct: false },
            { text: "Pharrell Williams", correct: true }, // Juist antwoord
            { text: "Timbaland", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Yuno Miles' meest gestreamde nummer?",
        answers: [
            { text: "Yuno Hit", correct: true }, // Juist antwoord
            { text: "Miles Ahead", correct: false },
            { text: "Yuno Dance", correct: false },
        ]
    },
    {
        question: "Welke award heeft Yuno Miles gewonnen voor zijn muziek?",
        answers: [
            { text: "Grammy Award", correct: false },
            { text: "BET Award", correct: true }, // Juist antwoord
            { text: "MTV Music Award", correct: false },
        ]
    },
    {
        question: "Welke film heeft Yuno Miles een soundtrack voor gemaakt?",
        answers: [
            { text: "Black Panther", correct: false },
            { text: "Spider-Man: Into the Spider-Verse", correct: true }, // Juist antwoord
            { text: "Creed II", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Yuno Miles' kledinglijn?",
        answers: [
            { text: "Yuno Wear", correct: true }, // Juist antwoord
            { text: "Miles Fashion", correct: false },
            { text: "Yuno Style", correct: false },
        ]
    }
];

// Elementen voor het weergeven van de vraag en antwoorden
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");
const muziek = new Audio(''); // Dit is het geluid dat je hoort wanneer je een 10 scoort bij Yuno Miles quiz

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
  if (score === 10){
    questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> text`;  // Toon de score
    muziek.play();
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
