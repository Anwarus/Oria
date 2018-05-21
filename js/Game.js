import { ResourceManager } from './ResourceManager';
import { RESOURCES } from './resources';
import { StateManager } from './StateManager';
import { LogoState } from './states/LogoState';

export class Game {
    constructor(canvas, settings) {
        this.canvas = canvas;
        this.settings = settings;

        this.graphicContext = {};
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        this.resourceManager = new ResourceManager(this.audioContext);
        this.stateManager = new StateManager(new LogoState(this));

        this.init();
    }

    init = () => {
        this.canvas.width = this.settings.width || 800;
        this.canvas.height = this.settings.height || 600;

        if(this.canvas.getContext)
            this.graphicContext = this.canvas.getContext('2d');
        else
            throw 'Error: Context unsupported!';

        //Load required data to be able to start game loading screen
        this.resourceManager.load({
            graphics: [
                RESOURCES.GRAPHICS.LOGO
            ],
            audios: [
                RESOURCES.AUDIOS.THEME
            ]
        }, this.loop);
    }

    loop = () => {
        let currentState = this.stateManager.getCurrentState();

        if(currentState) {
            if(!currentState.inited)
                currentState.init();
                
            currentState.input();
            //Assuming that requestAnimationFrame will call every 1/60 of second
            currentState.update(1./60.);
            currentState.draw(this.graphicContext);
        } else {
            throw 'Error: Current state not provided';
        }
        
        window.requestAnimationFrame(this.loop);
    }
}