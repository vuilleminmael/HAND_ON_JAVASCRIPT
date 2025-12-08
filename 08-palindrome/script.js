const inputText = document.getElementById('inputText')
const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener('click', function(){
    result.textContent = ''
    charList = inputText.value.split("");
    reverseCharList = [...charList].reverse();
    if(charList.join('') === reverseCharList.join('')){
        result.textContent = "c'est un palindrome !"
    } else {
        result.textContent = "Ce n'est pas un palindrome"
    }
})



// La complexité ici etait d'inversé les lettre et de faire attention a crée deux variable differentes 
// car sinon c'est la meme variable qui est traité 2 fois et sa be marche pas