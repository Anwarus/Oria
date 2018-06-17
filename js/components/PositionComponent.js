import { Component } from './../Component';

export class PositionComponent extends Component {
    constructor(x = 0, y = 0) {
        super('PositionComponent');

        this.x = x;
        this.y = y;
    }
}