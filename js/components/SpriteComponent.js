import { Component } from './../Component';

export class SpriteComponent extends Component {
    constructor(positionComponent, imageComponent) {
        super();

        this.positionComponent = positionComponent;
        this.imageComponent = imageComponent;
    }

    draw = (context) => {
        context.drawImage(this.imageComponent.image, this.positionComponent.x, this.positionComponent.y);
    }
}