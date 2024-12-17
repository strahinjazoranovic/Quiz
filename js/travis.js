const questions = [
    {
        question: "Wat is de echte naam van Travis Scott?",
        answers: [
            { text: "Jacques Webster", correct: true },
            { text: "Travis Barker", correct: false },
            { text: "Scott Mescudi", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Travis Scott's debuutalbum?",
        answers: [
            { text: "Astroworld", correct: false },
            { text: "Birds in the Trap Sing McKnight", correct: false },
            { text: "Rodeo", correct: true },
        ]
    },
    {
        question: "Welke stad is Travis Scott's geboorteplaats?",
        answers: [
            { text: "Houston", correct: true },
            { text: "Atlanta", correct: false },
            { text: "Los Angeles", correct: false },
        ]
    },
    {
        question: "Met welke realityster heeft Travis Scott een relatie gehad?",
        answers: [
            { text: "Kim Kardashian", correct: false },
            { text: "Khloe Kardashian", correct: false },
            { text: "Kylie Jenner", correct: true },
        ]
    },
    {
        question: "Wat is de naam van Travis Scott's derde studioalbum?",
        answers: [
            { text: "Rodeo", correct: false },
            { text: "Astroworld", correct: true },
            { text: "Birds in the Trap Sing McKnight", correct: false },
            
        ]
    },
    {
        question: "Welke hit single bracht Travis Scott uit in 2018?",
        answers: [
            { text: "Goosebumps", correct: false },
            { text: "Sicko Mode", correct: true },
            { text: "Butterfly Effect", correct: false },
           
        ]
    },
    {
        question: "Welke fastfoodketen werkte samen met Travis Scott voor een speciale maaltijd?",
        answers: [
            { text: "McDonald's", correct: true },
            { text: "Burger King", correct: false },
            { text: "Wendy's", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Travis Scott's dochter?",
        answers: [
            { text: "Stormi", correct: true },
            { text: "North", correct: false },
            { text: "True", correct: false },
        ]
    },
    {
        question: "Welke producer werkt vaak samen met Travis Scott?",
        answers: [
            { text: "Metro Boomin", correct: false },
            { text: "Mike Dean", correct: true },
            { text: "Zaytoven", correct: false },
        ]
    },
    {
        question: "Welke festival organiseert Travis Scott jaarlijks in Houston?",
        answers: [
            
            { text: "Rolling Loud", correct: false },
            { text: "Astroworld Festival", correct: true },
            { text: "Coachella", correct: false },
        ]
    },
    {
        question: "Wat is de naam van Travis Scott's tweede studioalbum?",
        answers: [
            { text: "Birds in the Trap Sing McKnight", correct: true },
            { text: "Rodeo", correct: false },
            { text: "Astroworld", correct: false },
        ]
    },
    {
        question: "Welke artiest is te horen op Travis Scott's nummer 'Goosebumps'?",
        answers: [
            { text: "Drake", correct: false },
            { text: "Kendrick Lamar", correct: true },
            { text: "The Weeknd", correct: false },
        ]
    },
    {
        question: "Welke modeontwerper heeft Travis Scott vaak samen meegewerkt?",
        answers: [
            { text: "Virgil Abloh", correct: true },
            { text: "Kanye West", correct: false },
            { text: "Jerry Lorenzo", correct: false },
        ]
    },
    {
        question: "Welke nummer van Travis Scott bevat een sample van 'The Backyardigans'?",
        answers: [
            { text: "5% Tint", correct: true },
            { text: "Stargazing", correct: false },
            { text: "Yosemite", correct: false },
        ]
    },
    {
        question: "Welke NBA-speler is een goede vriend van Travis Scott?",
        answers: [
        
            { text: "LeBron James", correct: false },
            { text: "Kevin Durant", correct: false },
            { text: "James Harden", correct: true },
        ]
    },
    {
        question: "Welke nummer van Travis Scott bevat een feature van Kid Cudi?",
        answers: [

            { text: "Stop Trying to Be God", correct: false },
            { text: "Skeletons", correct: false },
            { text: "Through the Late Night", correct: true },
        ]
    },
    {
        question: "Welke nummer van Travis Scott bevat een feature van Drake?",
        answers: [
            { text: "Sicko Mode", correct: true },
            { text: "No Bystanders", correct: false },
            { text: "Can't Say", correct: false },
        ]
    },
    {
        question: "Welke nummer van Travis Scott bevat een feature van The Weeknd?",
        answers: [
            { text: "Skeletons", correct: false },
            { text: "Wake Up", correct: true },
            { text: "Yosemite", correct: false },
        ]
    },
    {
        question: "Welke nummer van Travis Scott bevat een feature van Quavo?",
        answers: [
            { text: "Pick Up the Phone", correct: true },
            { text: "Butterfly Effect", correct: false },
            { text: "Goosebumps", correct: false },
        ]
    },
    {
        question: "Welke nummer van Travis Scott bevat een feature van Young Thug?",
        answers: [
            { text: "Franchise", correct: false },
            { text: "Mamacita", correct: false },
            { text: "Hot", correct: true },
        ]
    }
];


    

// Elementen voor het weergeven van de vraag en antwoorden
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");
const muziek = new Audio('sounds/travis.mp3'); // Dit is het geluid dat je hoort wanneer je een 10 scoort bij Travis Scott quiz

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
        questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> ITS LIT`;  // Toon de score
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