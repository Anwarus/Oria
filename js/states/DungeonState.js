import { RESOURCES } from './../resources';
import { State } from './../State';
import { Entity } from './../Entity';
import { SpriteComponent } from './../components/SpriteComponent';
import { TransformComponent } from './../components/TransformComponent';
import { KEYS } from './../keys';

export class DungeonState extends State {
    constructor({ game = {} } = {}) {
        super(game);

        this.worldEntity = new Entity({ name: 'world' });
    }

    init = () => {
        let worldLayersEntity = new Entity({ name: 'layers' });

        //worldLayersEntity.addComponent(new TransformComponent());

        this.worldEntity.addChild(worldLayersEntity);

        let floorLayerEntity = new Entity({ name: 'floor' });
        let objectLayerEntity = new Entity({ name: 'object' });
        let ceilingLayerEntity = new Entity({ name: 'ceiling' });

        worldLayersEntity.addChild(floorLayerEntity);
        worldLayersEntity.addChild(objectLayerEntity);
        worldLayersEntity.addChild(ceilingLayerEntity);

        let floorChunkEntity = new Entity();

        floorChunkEntity.addComponent(new TransformComponent());
        floorChunkEntity.addComponent(new SpriteComponent({
            transformComponent: floorChunkEntity.getComponent('TransformComponent'),
            image: this.game.resourceManager.getGraphic('tile'),
            cellWidth: 64,
            cellHeight: 64
        }));

        floorLayerEntity.addChild(floorChunkEntity);

        this.scene.push(this.worldEntity);

        this.inited = true;
    }
}