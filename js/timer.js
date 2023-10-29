import Sounds from "./sounds.js"  

export function timer({
    displayMinutes,
    displaySecond,
    resetControls,
}){

    let timerTimeout;
    let minutes = Number(displayMinutes.textContent);

    function updateDisplay(minutes, seconds){
        displayMinutes.innerText = String(minutes).padStart(2, "0");
        displaySecond.innerText = String(seconds).padStart(2, "0");
    }
    
    function reset(){
        updateDisplay(minutes, 0);
        clearTimeout(timerTimeout);
    }
    
    function countDown() {
        timerTimeout = setTimeout(function () {
            let seconds = Number(displaySecond.textContent);
            let minutes = Number(displayMinutes.textContent)
    
            if (minutes > 0 && seconds <= 0) {
                seconds = 60;
                minutes-=1;
            } else if (minutes == 0 && seconds == 0) {
                resetControls();
                reset();
                Sounds().kitchenTimerPlay();  /*outra forma de chamar uma função sem precisar recebela como um objeto*/ 
                return;
            }
            updateDisplay(minutes, seconds-1);
            countDown();
        }, 1000) /*1000 milisegundos = 1 segundo*/
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeout);
    }

    return{
        updateDisplay,
        reset,
        countDown,
        updateMinutes,
        hold
    }
}