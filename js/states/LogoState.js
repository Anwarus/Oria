import { State } from './../State';
import { SpriteComponent } from './../components/SpriteComponent';
import { PositionComponent } from './../components/PositionComponent';
import { ImageComponent } from './../components/ImageComponent';
import { AudioComponent } from './../components/AudioComponent';

export class LogoState extends State {
    constructor(game) {
        super(game);

        this.sceneObject = {};
        this.logoObject = {}  
        // this.slider = new Component();
    }

    init = () => {
        this.sceneObject = new AudioComponent(
            this.game.audioContext,
            this.game.resourceManager.getAudio('theme')
        );

        this.logoObject = new SpriteComponent(
            new PositionComponent(0, 0),
            new ImageComponent( this.game.resourceManager.getGraphic('logo'))
        );

        this.sceneObject.play();

        this.inited = true;
    }

    input = (key) => {
        console.log(key);
    }

    update = (delta) => {

    }

    draw = (context) => {
        this.logoObject.draw(context);
    }
}