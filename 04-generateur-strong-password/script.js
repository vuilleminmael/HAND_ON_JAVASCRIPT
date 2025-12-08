const charNumber = document.getElementById('charNumber')
const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener('click', function(){

    let lenght = parseInt(charNumber.value)
    let charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!+@-';
    let strongPassword = '';

    for (let i = 0; i < lenght; i++){
        strongPassword += charList.charAt(Math.floor(Math.random() * charList.length ))
    }

    result.textContent = `Votre mot de passe est: ${strongPassword}`

    

})

