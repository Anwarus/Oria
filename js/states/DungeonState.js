import { State } from './../State';

export class DungeonState extends State {
    constructor(game) {
        super(game);
    }

    init = () => {
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
        
    }

    update = (delta) => {

    }

    draw = (context) => {
        this.logoObject.draw(context);
    }
}