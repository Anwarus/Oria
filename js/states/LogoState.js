import { SpriteComponent } from './components/SpriteComponent';
import { PositionComponent } from './components/PositionComponent';
import { ImageComponent } from './components/ImageComponent';
import { AudioComponent } from './components/AudioComponent';

export class LogoState {
    constructor(game) {
        this.game = game;
        
        this.inited = false;

        this.sceneObject = {};
        this.logoObject = {}  
        // this.slider = new Component();
    }

    init = () => {
        console.log('init');

        this.sceneObject = new AudioComponent(
            this.game.audioContext,
            this.game.resourceManager.getAudio('theme').resource
        );

        this.logoObject = new SpriteComponent(
            new PositionComponent(0, 0),
            new ImageComponent( this.game.resourceManager.getGraphic('logo').resource)
        );

        this.sceneObject.play();

        this.inited = true;
    }

    input = () => {
        //console.log('input');
    }

    update = (delta) => {
        //console.log('update');
    }

    draw = (context) => {
        this.logoObject.draw(context);
    }
}