import { RESOURCES } from './../resources';
import { State } from './../State';
import { Entity } from './../Entity';
import { SpriteComponent } from './../components/SpriteComponent';
import { TransformComponent } from './../components/TransformComponent';
import { AudioComponent } from './../components/AudioComponent';
import { DungeonState } from './DungeonState';

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

        this.logoEntity.addComponent(new SpriteComponent({
            transformComponent: new TransformComponent({
                posX: 0,
                posY: 0
            }),
            image: this.game.resourceManager.getGraphic('logo')
        }));

        //Load required data to be able to start game loading screen
        this.game.resourceManager.load({
            graphics: [
                RESOURCES.GRAPHICS.TILE
            ]
        }, this.finishLoading);

        this.scene.push(this.sceneEntity);
        this.scene.push(this.logoEntity);

        this.inited = true;
    }

    finishLoading = () => {
        this.game.stateManager.addState(new DungeonState(this.game));
    }
}