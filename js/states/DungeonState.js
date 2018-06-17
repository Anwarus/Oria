import { State } from './../State';
import { Entity } from './../Entity';
import { WorldComponent } from '../components/WorldComponent';
import { TransformComponent } from '../components/TransformComponent';
import { SpriteComponent } from '../components/SpriteComponent';
import { KEYS } from './../keys';

export class DungeonState extends State {
    constructor(game, world) {
        super(game);

        this.worldEntity = new Entity();

        let worldLayersEntity = new Entity();

        worldLayersEntity.addComponent(new TransformComponent());

        let floorLayerEntity = new Entity({ name: 'floor' });
        let objectLayerEntity = new Entity({ name: 'object' });
        let ceilingLayerEntity = new Entity({ name: 'ceiling' });

        let floorChunkEntity = new Entity();
        
        floorChunkEntity.addComponent(new TransformComponent());
        floorChunkEntity.addComponent(new SpriteComponent()); 
    }

    init = () => {
        

        this.inited = true;
    }

    input = (key) => {
        
    }

    update = (delta) => {

    }

    draw = (context) => {
        this.worldObject.draw(context);
    }
}