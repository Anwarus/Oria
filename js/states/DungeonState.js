import { RESOURCES } from './../resources';
import { State } from './../State';
import { Entity } from './../Entity';
import { SpriteComponent } from './../components/SpriteComponent';
import { TransformComponent } from './../components/TransformComponent';
import { ViewMovementComponent } from './../components/ViewMovementComponent';
import { KEYS } from './../keys';

export class DungeonState extends State {
    constructor({ game = {}, floorLayerEntities = [] } = {}) {
        super(game);

        this.worldEntity = new Entity({ name: 'world' });
        this.floorLayerEntities = floorLayerEntities;
        this.viewControllerEntity = new Entity({ game: game, name: 'viewController' });
    }

    init = () => {
        console.log('DungeonState');

        let worldLayersEntity = new Entity({ name: 'layers' });

        //worldLayersEntity.addComponent(new TransformComponent());

        this.worldEntity.addChild(worldLayersEntity);

        let floorLayerEntity = new Entity({ name: 'floor' });
        let objectLayerEntity = new Entity({ name: 'object' });
        let ceilingLayerEntity = new Entity({ name: 'ceiling' });

        worldLayersEntity.addChild(floorLayerEntity);
        worldLayersEntity.addChild(objectLayerEntity);
        worldLayersEntity.addChild(ceilingLayerEntity);

        // let floorChunkEntity = new Entity();

        // floorChunkEntity.addComponent(new TransformComponent());
        // floorChunkEntity.addComponent(new SpriteComponent({
        //     transformComponentRef: floorChunkEntity.getComponent('TransformComponent'),
        //     image: this.game.resourceManager.getGraphic('tile'),
        //     cellWidth: 64,
        //     cellHeight: 64
        // }));

        // floorLayerEntity.addChild(floorChunkEntity);

        floorLayerEntity.addChilds(this.floorLayerEntities);

        this.viewControllerEntity.addComponent(new ViewMovementComponent({ game: this.game }));

        this.scene.push(this.worldEntity);
        this.scene.push(this.viewControllerEntity);

        this.inited = true;
    }
}