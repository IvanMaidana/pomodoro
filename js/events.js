import {
    buttonPlay,
    buttonPause,
    buttonSoundOFF,
    buttonSoundON,
    buttonStop,
    buttonSet
} from "./elements.js"

export default function({Sound, Timer, Controls}) {

    buttonPlay.addEventListener('click', () => {
        Controls.play();
        Timer.countDown();
        Sound.buttonPressPlay();
    })

    buttonPause.addEventListener('click', () => {
        Controls.pause();
        Timer.hold();
        Sound.buttonPressPlay();
    })

    buttonStop.addEventListener('click', () => {
        Controls.reset();
        Timer.reset();
        Sound.buttonPressPlay();
    })

    buttonSoundON.addEventListener('click', SoundON);
    buttonSoundOFF.addEventListener('click', SoundOFF);

    function SoundON() {
        Sound.bgAudioPlay();
        buttonSoundOFF.classList.toggle('hide');
        buttonSoundON.classList.toggle('hide');
    }

    function SoundOFF() {
        Sound.bgAudioPause();
        buttonSoundOFF.classList.toggle('hide');
        buttonSoundON.classList.toggle('hide');
    }

    buttonSet.addEventListener('click', () => {
        let newMinutes = Controls.getMinutes();
        if (!newMinutes) {/*para nao pegar um valor null */
            Timer.reset();
            return;
        }
        Timer.updateDisplay(newMinutes, 0);
        Timer.updateMinutes(newMinutes);
    })
}