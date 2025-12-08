const temperatureValue = document.getElementById('temperature')
const temperatureType = document.getElementById('operator')
const buttonSubmit = document.getElementById('button')
const displayResult = document.getElementById('result')

buttonSubmit.addEventListener('click', function(){
    let temperature = parseInt(temperatureValue.value);
    if(temperatureType.value === '°F'){ 
        let temperatureConversion = (temperature - 32) / 1.8
        displayResult.textContent = `The temperature is ${temperatureConversion} °C`

    }
    else if(temperatureType.value === '°C'){
        let temperatureConversion = (temperature * 1.8) + 32
        displayResult.textContent = `The temperature is ${temperatureConversion} °C`

    }

})