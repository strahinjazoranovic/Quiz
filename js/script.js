document.body.addEventListener("click", (event) => {
  const buttonId = event.target.id;

  if (["kanye", "travisscott", "secret", "kendricklamar", "future", "playboicarti"].includes(buttonId)) {
  
    if (buttonId === "kanye") kanyeQuiz();
    if (buttonId === "travisscott") travisQuiz();
    if (buttonId === "secret") secretQuiz();
    if (buttonId === "kendricklamar") kendrickQuiz();
    if (buttonId === "future") futureQuiz();
    if (buttonId === "playboicarti") playboiQuiz();

    event.target.style.display = "none";
  }
});

function kendrickQuiz(){
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
    const muziek = new Audio('sounds/mustard.mp3'); // Dit is het geluid dat je hoort wanneer je een 10 scoort bij Travis Scott quiz
    
    // Variabelen om de voortgang en score bij te houden
    let currentQuestionindex = 0;
    let score = 0;
    
    // Start de quiz
    function startQuiz() {
        muziek.pause()
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
            questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> MUSTAAAAAAAAAAAAAAAAAAAAAAAAAAAARD`;  // Toon de score
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
}

function futureQuiz(){ 
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
}
function travisQuiz(){
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
}
function secretQuiz(){
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
            question: "Wat zij yuno's oma tegen hem?",
            answers: [
                { text: "******", correct: true }, // Juist antwoord
                { text: "Nice person", correct: false },
                { text: "Bad person", correct: false },
            ]
        },
        {
            question: "wat deed yuno nadat zijn oma dat tegen hem zei",
            answers: [
                { text: "Kusje geven", correct: false },
                { text: "Knuffel geven", correct: false },
                { text: "Hit her", correct: true }, // Juist antwoord
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
    const muziek = new Audio('sounds/secret.mp3'); // Dit is het geluid dat je hoort wanneer je een 10 scoort bij Yuno Miles quiz
    
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
        questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> CAME FROM THE BOTTOM NOW IM AT THE TOP <br> 
        THIS IS THE SOUND OF A ROBOT <br>
        ELELELELELE BING ELELELELAELALELELE`;  // Dit krijg je als je alles goed hebt
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
    
}

function playboiQuiz(){
    const questions = [
        {
          question: "Hoe heet Playboi Carti in het echt?", // Vraag 1
          answers: [
            { test: "Jordan Terrell Carter", correct: true },   // Juist antwoord
            { test: "Carter Pierre Williams", correct: false },  // Onjuist antwoord
            { test: "Jonathan Taylor Carter", correct: false },  // Onjuist antwoord
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's debuutmixtape?", // Vraag 2
          answers: [
            { test: "Die Lit", correct: false },
            { test: "Playboi Carti", correct: true }, // Juist antwoord
            { test: "Whole Lotta Red", correct: false },
          ]
        },
        {
          question: "Met welk nummer brak Playboi Carti door?", // Vraag 3
          answers: [
            { test: "Magnolia", correct: true },  // Juist antwoord
            { test: "Shoota", correct: false },
            { test: "Location", correct: false },
          ]
        },
        {
          question: "Welke producer werkte veel samen met Playboi Carti?", // Vraag 4
          answers: [
            { test: "Metro Boomin", correct: false },
            { test: "Pierre Bourne", correct: true },  // Juist antwoord
            { test: "Zaytoven", correct: false },
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's tweede studioalbum?", // Vraag 5
          answers: [
            { test: "Die Lit", correct: false },
            { test: "Whole Lotta Red", correct: true },  // Juist antwoord
            { test: "Vamp Life", correct: false },
          ]
        },
        {
          question: "Welke unieke stemstijl gebruikt Playboi Carti vaak?", // Vraag 6
          answers: [
            { test: "Mumble Flow", correct: false },
            { test: "Whisper Flow", correct: false },
            { test: "Baby Voice", correct: true },  // Juist antwoord
          ]
        },
        {
          question: "Welke rapper is een frequente samenwerkingspartner van Playboi Carti?", // Vraag 7
          answers: [
            { test: "Travis Scott", correct: false },
            { test: "Lil Uzi Vert", correct: true },  // Juist antwoord
            { test: "Future", correct: false },
          ]
        },
        {
          question: "Hoe noemen fans de dans bij het nummer 'Magnolia'?", // Vraag 8
          answers: [
            { test: "The Milly Rock", correct: true },  // Juist antwoord
            { test: "The Dab", correct: false },
            { test: "The Woah", correct: false },
          ]
        },
        {
          question: "In welk jaar werd Playboi Carti geboren?", // Vraag 9
          answers: [
            { test: "1996", correct: false },
            { test: "1997", correct: false },
            { test: "1995", correct: true },  // Juist antwoord
          ]
        },
        {
          question: "Wat is de stijl die vaak wordt geassocieerd met Playboi Carti's muziek?", // Vraag 10
          answers: [
            { test: "Lo-fi Hip Hop", correct: false },
            { test: "Trap", correct: true },  // Juist antwoord
            { test: "Drill", correct: false },
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's alter ego?", // Vraag 11
          answers: [
            { test: "King Vamp", correct: true },  // Juist antwoord
            { test: "Lil Vamp", correct: false },
            { test: "Vamp Lord", correct: false },
          ]
        },
        {
          question: "Welke modeontwerper heeft Playboi Carti beïnvloed?", // Vraag 12
          answers: [
            { test: "Virgil Abloh", correct: false },
            { test: "Raf Simons", correct: true },  // Juist antwoord
            { test: "Alexander Wang", correct: false },
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's zoon?", // Vraag 13
          answers: [
            { test: "Onyx", correct: true },  // Juist antwoord
            { test: "Diamond", correct: false },
            { test: "Jasper", correct: false },
          ]
        },
        {
          question: "Welke stad komt Playboi Carti oorspronkelijk vandaan?", // Vraag 14
          answers: [
            { test: "Chicago", correct: false },
            { test: "Atlanta", correct: true },  // Juist antwoord
            { test: "New York", correct: false },
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's eerste tour?", // Vraag 15
          answers: [
            { test: "Neon Tour", correct: false },
            { test: "Die Lit Tour", correct: true },  // Juist antwoord
            { test: "Whole Lotta Red Tour", correct: false },
          ]
        },
        {
          question: "Welke artiest heeft Playboi Carti beïnvloed?", // Vraag 16
          answers: [
            { test: "Drake", correct: false },
            { test: "Jay-Z", correct: false },
            { test: "Kanye West", correct: true },  // Juist antwoord
          ]
        },
        {
          question: "Wat is Playboi Carti's favoriete kleur?", // Vraag 17
          answers: [
            { test: "Rood", correct: true },  // Juist antwoord
            { test: "Blauw", correct: false },
            { test: "Groen", correct: false },
          ]
        },
        {
          question: "Welke modecollectie heeft Playboi Carti gemodelleerd?", // Vraag 18
          answers: [
            { test: "Yeezy", correct: false },
            { test: "VFiles", correct: true },  // Juist antwoord
            { test: "Off-White", correct: false },
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's label?", // Vraag 19
          answers: [
            { test: "Opium", correct: true },  // Juist antwoord
            { test: "XO", correct: false },
            { test: "Dreamville", correct: false },
          ]
        },
        {
          question: "Welke artiest heeft Playboi Carti ontdekt?", // Vraag 20
          answers: [
            { test: "ASAP Rocky", correct: true },  // Juist antwoord
            { test: "Kanye West", correct: false },
            { test: "Travis Scott", correct: false },
          ]
        }
      ];
      
      // Elementen voor het weergeven van de vraag en antwoorden
      const questionElement = document.getElementById("questions");
      const answerButtons = document.getElementById("answers-buttons");
      const nextButton = document.getElementById("next-btn");
      const muziek = new Audio('sounds/seeyuh.mp3') //Dit is het geluid dat je hoort wanneer je een 10 scoort bij Playboi Carti quiz
      
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
          questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> FWEEHHHHHHH HOMICIDE`;  // Toon de score
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
}

function kanyeQuiz(){
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
          { test: "Runaway", correct: false },
          ]
        },
        {
          question: "Wat is de geboortedatum van Kanye West?", // Vraag 11
          answers: [
          { test: "8 juni 1977", correct: true },  // Juist antwoord
          { test: "8 juli 1977", correct: false },
          { test: "8 augustus 1977", correct: false },
          ]
        },
        {
          question: "Welke universiteit verliet Kanye West om zijn muziekcarrière na te streven?", // Vraag 12
          answers: [
          { test: "Harvard University", correct: false },
          { test: "Chicago State University", correct: true },  // Juist antwoord
          { test: "Yale University", correct: false },
          ]
        },
        {
          question: "Welke religieuze titel heeft Kanye West aangenomen?", // Vraag 13
          answers: [
          { test: "Priester", correct: false },
          { test: "Pastor", correct: false },
          { test: "Yeezus", correct: true },  // Juist antwoord
          ]
        },
        {
          question: "Welke filmregisseur heeft Kanye West beïnvloed voor zijn album 'Graduation'?", // Vraag 14
          answers: [
          { test: "Stanley Kubrick", correct: true },  // Juist antwoord
          { test: "Steven Spielberg", correct: false },
          { test: "Quentin Tarantino", correct: false },
          ]
        },
        {
          question: "Hoeveel kinderen heeft Kanye West?", // Vraag 15
          answers: [
          { test: "2", correct: false },
          { test: "3", correct: false },
          { test: "4", correct: true },  // Juist antwoord
          ]
        },
        {
          question: "Welke naam gaf Kanye West aan zijn eerste dochter?", // Vraag 16
          answers: [
          { test: "North", correct: true },  // Juist antwoord
          { test: "South", correct: false },
          { test: "East", correct: false },
          ]
        },
        {
          question: "Welke samenwerking met een andere artiest bracht Kanye West in 2011 uit?", // Vraag 17
          answers: [
          { test: "Watch the Throne", correct: true },  // Juist antwoord
          { test: "Cruel Summer", correct: false },
          { test: "Kids See Ghosts", correct: false },
          ]
        },
        {
          question: "Welke modeontwerper heeft Kanye West beïnvloed?", // Vraag 18
          answers: [
          { test: "Ralph Lauren", correct: false },
          { test: "Virgil Abloh", correct: true },  // Juist antwoord
          { test: "Tom Ford", correct: false },
          ]
        },
        {
          question: "Welke stad is Kanye West geboren?", // Vraag 19
          answers: [
          { test: "New York", correct: false },
          { test: "Chicago", correct: true },  // Juist antwoord
          { test: "Los Angeles", correct: false },
          ]
        },
        {
          question: "Welke naam gaf Kanye West aan zijn gospelalbum uit 2019?", // Vraag 20
          answers: [
          { test: "Jesus Is King", correct: true },  // Juist antwoord
          { test: "Ye", correct: false },
          { test: "The Life of Pablo", correct: false },
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
        questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> Look at Gaga she is the creative director at Polaroid. I like some of the gaga songs, wtf does she know aobut cameras?`;  // Toon de score
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
}
