const buttonStart = document.getElementById('button_start')
const buttonStop = document.getElementById('button_stop')
const result = document.getElementById('result')

let state = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

buttonStart.addEventListener('click', async function(){
    if(state === 1) return;
    state = 1;
    let seconds = 0
    while(state === 1){
        result.textContent = seconds
        await sleep(1000)
        seconds ++ 

    }
})


buttonStop.addEventListener('click', function(){
    state = 0;
    result.textContent = 'Stopped !'

})