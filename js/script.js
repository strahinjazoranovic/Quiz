// Dit zijn de 2 knoppen die gebruikt worden om de quiz te starten en hier wordt het id informatie gepakt
const engelsButton = document.getElementById('engelsbutton');
const nederlandsButton = document.getElementById('nederlandsbutton');

// Als de id(engelsebutton) is ingedrukt dan function startgame
if (engelsButton) {
    engelsButton.addEventListener('click', startGameEngels);
}
// Als de id(nederlandsebutton) is ingedrukt dan function startgame
if (nederlandsButton) {
    nederlandsButton.addEventListener('click', startGameNederlands);
}

// Dit is de functie die de game/quiz start
function startGameEngels(event) {
    const buttonId = event.target.id;
    engelsButton.style.display = 'none';
    if (buttonId === 'engelsbutton') {
      console.log('engels werkt')
    } 
}

function startGameNederlands(event){
    const buttonId = event.target.id;
    nederlandsButton.style.display = 'none';
    if (buttonId === 'nederlandsbutton') {
      console.log('nederlands werkt')
    } 
}

function setNextQuestion() {
    
}

// https://www.youtube.com/watch?v=riDzcEQbX6k voor tutorial hoe de quiz zal moeten werken