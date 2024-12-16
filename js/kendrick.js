const questions = [
    {
        question: "Wat is de echte naam van Kendrick Lamar?",
        answers: [
            { text: "Kendrick Lamar Duckworth", correct: true },
            { text: "Kendrick Lamar Scott", correct: false },
            { text: "Kendrick Lamar Williams", correct: false },
        ]
    },
    {
        question: "In welk jaar werd Kendrick Lamar geboren?",
        answers: [
            { text: "1987", correct: true },
            { text: "1985", correct: false },
            { text: "1990", correct: false },
        ]
    },
    {
        question: "Wat is de titel van Kendrick Lamar's debuutalbum?",
        answers: [
            { text: "good kid, m.A.A.d city", correct: false },
            { text: "To Pimp a Butterfly", correct: false },
            { text: "Section.80", correct: true }
        ]
    },
    {
        question: "Welke stad is Kendrick Lamar's geboorteplaats?",
        answers: [
            { text: "Compton", correct: true },
            { text: "Los Angeles", correct: false },
            { text: "Oakland", correct: false },
        ]
    },
    {
        question: "Welke artiest heeft Kendrick Lamar vaak als mentor genoemd?",
        answers: [
            { text: "Snoop Dogg", correct: false },
            { text: "Eminem", correct: false },
            { text: "Dr. Dre", correct: true },
        ]
    },
    {
        question: "Wat is de naam van Kendrick Lamar's alter ego?",
        answers: [
            { text: "Kung Fu Kenny", correct: false },
            { text: "K.Dot", correct: true },
            { text: "King Kendrick", correct: false },
        ]
    },
    {
        question: "Welke hit single bracht Kendrick Lamar uit in 2017?",
        answers: [
            { text: "DNA.", correct: false },
            { text: "HUMBLE.", correct: true },
            { text: "LOYALTY.", correct: false },
        ]
    },
    {
        question: "Welke prijs won Kendrick Lamar voor zijn album 'DAMN.'?",
        answers: [
            { text: "Grammy Award", correct: false },
            { text: "MTV Music Award", correct: false },
            { text: "Pulitzer Prize", correct: true },
        ]
    },
    {
        question: "Welke film soundtrack produceerde Kendrick Lamar in 2018?",
        answers: [
            { text: "Creed II", correct: false },
            { text: "Black Panther", correct: true },
            { text: "Spider-Man: Into the Spider-Verse", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Kendrick Lamar's tweede studioalbum?",
        answers: [
            
            { text: "To Pimp a Butterfly", correct: false },
            { text: "DAMN.", correct: false },
            { text: "good kid, m.A.A.d city", correct: true },
            
        ]
    },
    {
        question: "Welke groep is Kendrick Lamar lid van?",
        answers: [
            { text: "Odd Future", correct: false },
            { text: "Black Hippy", correct: true },
            { text: "A$AP Mob", correct: false },
        ]
    },
    {
        question: "Welke producer werkt vaak samen met Kendrick Lamar?",
        answers: [
            { text: "Sounwave", correct: true },
            { text: "Metro Boomin", correct: false },
            { text: "Mike Will Made It", correct: false },
        ]
    },
    {
        question: "Welke track van Kendrick Lamar bevat de lyrics 'I got loyalty, got royalty inside my DNA'?",
        answers: [
            { text: "HUMBLE.", correct: false },
            { text: "DNA.", correct: true },
            { text: "ELEMENT.", correct: false },
        ]
    },
    {
        question: "Welke artiest heeft Kendrick Lamar als invloed genoemd?",
        answers: [
            { text: "Jay-Z", correct: false },
            { text: "Nas", correct: false },
            { text: "Tupac Shakur", correct: true },
        ]
    },
    {
        question: "Wat is de naam van Kendrick Lamar's derde studioalbum?",
        answers: [
            { text: "DAMN.", correct: false },
            { text: "good kid, m.A.A.d city", correct: false },
            { text: "To Pimp a Butterfly", correct: true },
        ]
    },
    {
        question: "Welke hit single bracht Kendrick Lamar uit in 2015?",
        answers: [
            { text: "King Kunta", correct: false },
            { text: "Alright", correct: true },
            { text: "i", correct: false },
        ]
    },
    {
        question: "Welke fastfoodketen werkte samen met Kendrick Lamar voor een speciale maaltijd?",
        answers: [
            { text: "McDonald's", correct: false },
            { text: "Geen", correct: true },
            { text: "Burger King", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Kendrick Lamar's partner?",
        answers: [
            { text: "Whitney Alford", correct: true },
            { text: "Kylie Jenner", correct: false },
            { text: "Rihanna", correct: false },
        ]
    },
    {
        question: "Welke festival organiseert Kendrick Lamar jaarlijks?",
        answers: [
            { text: "Astroworld Festival", correct: false },
            { text: "Geen", correct: true },
            { text: "Rolling Loud", correct: false },
        ]
    },
    {
        question: "Welke track van Kendrick Lamar bevat de lyrics 'If Pirus and Crips, all got along'?",
        answers: [
            { text: "m.A.A.d city", correct: true },
            { text: "Swimming Pools (Drank)", correct: false },
            { text: "Bitch, Don't Kill My Vibe", correct: false },
        ]
    }
];


const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");
const muziek = new Audio('sounds/'); // Dit is het geluid dat je hoort wanneer je een 10 scoort bij Travis Scott quiz

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
        questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> FWEEHHHHHHH HOMICIDE`;  // Toon de score
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