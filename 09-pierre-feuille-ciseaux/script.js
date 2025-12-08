const operator = document.getElementById('operator');
const button = document.getElementById('play');
const awnser = document.getElementById('awnser')
const Finalresult = document.getElementById('result')

button.addEventListener('click', function(){
    let randomChoice = Math.floor(Math.random() * 3)
    let op = parseInt(operator.value)
    let result = (op - randomChoice) % 3

    awnser.textContent = randomChoice

    if (result === -1){
        Finalresult.textContent = 'You loose !'
    }else if (result === 0){
        Finalresult.textContent = 'Its a draw !'
    }else if (result === 1){
        Finalresult.textContent = 'You won !'
    } else {
        Finalresult.textContent = 'ERROR '
    }

})
