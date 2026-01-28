let number1Element = document.getElementById("number1");
let number2Element = document.getElementById("number2");
let operatorElement = document.getElementById('operator');
console.log("test", number1Element);

function calculer(number1, number2, operator) {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const op = operator.value;
    
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Erreur : division par zero";
            }
            return num1 / num2;
        default:
            return "operator non reconnu";
    }
}

console.log(calculer(number1Element, number2Element, operatorElement));

document.getElementById("btn").addEventListener("click",function();{
    result = calculer(number1Element, number2Element, operatorElement);
    resultatElement.textContent = "Resultat : " + result;
})
