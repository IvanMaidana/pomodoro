import {timer} from "./timer.js"
import {controls} from "./controls.js";
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop, 
    displayMinutes,
    displaySecond
} from "./elements.js"

const Controls = controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const Timer = timer({  /*factori com injeção de dependencia*/
    displayMinutes,
    displaySecond,
    resetControls: Controls.reset,
})

const Sound = Sounds() /*factori sem dependencia*/ 

Events({Sound, Timer, Controls});

