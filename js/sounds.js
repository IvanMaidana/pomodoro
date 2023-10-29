export default function(){
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const bgAudio = new Audio('./sounds/audios_bg-audio.mp3');
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

    bgAudio.loop = true;/*para deixar o audio rodando infinito*/ 

    function buttonPressPlay(){
        buttonPress.play();
    }

    function bgAudioPlay(){
        bgAudio.play();
    }

    function bgAudioPause(){
        bgAudio.pause();
    }

    function kitchenTimerPlay(){
        kitchenTimer.play();
    }

    return{
        buttonPressPlay,
        bgAudioPlay,
        kitchenTimerPlay,
        bgAudioPause
    }
}