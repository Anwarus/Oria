import { Component } from './../Component';

export class WorldComponent extends Component {
    constructor(world) {
        super();

        this.player = {};
        this.objects = [];
        this.monsters = [];
        this.dungeon = [];

        this.cellObjects = world;
    }

    draw = (context) => {
        this.cellObjects.forEach((cellObject) => {
            cellObject.draw(context);
        });
    } 
}