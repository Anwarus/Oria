import { State } from './../State';
import { Entity } from './../Entity';
import { SpriteComponent } from './../components/SpriteComponent';
import { PositionComponent } from './../components/PositionComponent';
import { AudioComponent } from './../components/AudioComponent';

export class LogoState extends State {
    constructor(game) {
        super(game);

        this.sceneEntity = new Entity({ name: 'scene' });
        this.logoEntity = new Entity({ name: 'logo' });  
        // this.slider = new Component();
    }

    init = () => {
        this.sceneEntity.addComponent(new AudioComponent({
            audioContext: this.game.audioContext,
            audioSource: this.game.resourceManager.getAudio('theme')
        }));

        // this.logoEntity.addComponent(new SpriteComponent(
        //     new PositionComponent(0, 0),
        //     new ImageComponent( this.game.resourceManager.getGraphic('logo'))
        // ));

        //Load required data to be able to start game loading screen
        this.game.resourceManager.load({
            graphics: [
                RESOURCES.GRAPHICS.TILE
            ]
        }, this.finishLoading);

        this.inited = true;
    }

    input = (key) => {
        console.log(key);
    }

    update = (delta) => {

    }

    draw = (context) => {
        //this.logoEntity.draw(context);
    }

    finishLoading = () => {

    }
}