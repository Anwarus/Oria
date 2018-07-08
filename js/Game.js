import { SETTINGS } from './settings';
import { RESOURCES } from './resources';
import { ResourceManager } from './ResourceManager';
import { StateManager } from './StateManager';
import { LogoState } from './states/LogoState';
import { View } from './View';

export class Game {
    constructor({canvas = {}, settings = {}} = {}) {
        this.canvas = canvas;
        this.settings = settings;

        this.view = {};
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        this.resourceManager = new ResourceManager({ audioContext: this.audioContext });
        this.stateManager = new StateManager({ initialState: new LogoState({ game: this })});

        this.init();
    }

    init = () => {
        this.canvas.width = this.settings.width || 800;
        this.canvas.height = this.settings.height || 600;

        var graphicContext = {};

        if(this.canvas.getContext)
            graphicContext = this.canvas.getContext('2d');
        else
            throw 'Error: Context unsupported!';

        this.view = new View({ context: graphicContext });

        //Bind input function to be called on every key down for current state
        document.addEventListener('keydown', (event) => {
            this.input(event);
        });

        //Bind input function to be called on every key up for current state
        document.addEventListener('keyup', (event) => {
            this.input(event);
        });

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
            
            //Assuming that requestAnimationFrame will call every 1/60 of second
            currentState.update(1./60.);
            this.view.clearRect(0, 0, this.canvas.width, this.canvas.height);
            currentState.draw(this.view);
        } else
            throw 'Error: Current state not provided';
        
        window.requestAnimationFrame(this.loop);
    }

    input = (event) => {
        let currentState = this.stateManager.getCurrentState();

        if(currentState) {
            if(currentState.inited)
                currentState.input(event);
        }
    }
}