// Definir le nomre aleatoire
let randomNumerToGuess = Math.floor(Math.random() * 100);
// afficher le nombre aleatoire dans la console
console.log(randomNumerToGuess);

// Recuperer les elements du fichier html grace aux ID
const selectedNumber = document.getElementById("selectedNumber");
const sendResponseButton = document.getElementById("sendResponse");
const displayInfo = document.getElementById('info');

// Appliquer une fonction quand on clique sur un bouton
sendResponseButton.addEventListener('click', function(){
    let playerNumber = parseInt(selectedNumber.value);

    if (playerNumber === randomNumerToGuess){
        displayInfo.textContent = `You Right its ${playerNumber} !`;
    }
    else if (playerNumber > randomNumerToGuess){
        displayInfo.textContent = 'No, Its to hight';
    }
    else if (playerNumber < randomNumerToGuess){
        displayInfo.textContent = 'No, Its to low';
    }
})