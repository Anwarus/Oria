import { Component } from './../Component';

export class TransformComponent extends Component {
    constructor({ posX = 0, posY = 0, 
                  scaleX = 1, scaleY = 1,
                  angle = 0 } = {}) {
        super('TransformComponent');

        this.posX = posX;
        this.posY = posY;

        this.scaleX = scaleX;
        this.scaleY = scaleY;

        this.angle = angle;
    }
}