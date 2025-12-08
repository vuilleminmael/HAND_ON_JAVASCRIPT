const word = document.getElementById('word')
const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener('click', function(){
    let wordValue = word.value
    let Counter = 0;

    const voyelles = 'aeiouyAEIOUY'

   for (let i = 0; i < wordValue.length; i++){
        // console.log(wordValue.charAt(i))
        if (voyelles.includes(wordValue[i])){
            Counter += 1
        }
    
    }

    result.textContent = `Il y a ${Counter} voyelle(s)`

    

})

