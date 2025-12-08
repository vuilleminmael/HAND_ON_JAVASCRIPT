const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operator = document.getElementById('operator');
const button = document.getElementById('button');
const resultElement = document.getElementById('result');

button.addEventListener('click', function(){

    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const op = operator.value;

    let result;

    if (op === '+') {
        result = num1 + num2
    }
    if (op === '-') {
        result = num1 - num2
    }

    if (op === '*') {
        result = num1 * num2
    }

    if (op === '/') {
        result = num1 / num2
    }

    resultElement.textContent = `Resultat: ${result}`

})
