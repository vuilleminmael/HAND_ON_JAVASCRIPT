const number = document.getElementById('number')
const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener('click', function(){
    let numberValue = parseInt(number.value)
    let tableValues = [];


   for (let i = 0; i < 11; i++){
    tableValues.push(`${numberValue} x ${i} = ${numberValue * i}`)

    
    }

    result.textContent = tableValues

    

})

