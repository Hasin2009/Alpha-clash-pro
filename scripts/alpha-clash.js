// function play (){
    
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function continueGame(){
// generate a random alphabet
const alphabet = getARandomAlphabet();
console.log('your random alphabet', alphabet);

const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

setBackgroundColorById(alphabet);
}


function play (){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}