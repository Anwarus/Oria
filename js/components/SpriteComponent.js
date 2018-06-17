import { Component } from './../Component';

export class SpriteComponent extends Component {
    constructor({ transformComponent = {}, image = {} }) {
        super();

        this.transformComponent = transformComponent;

        this.image = image;
    }

    draw = (context) => {
        context.drawImage(this.image, this.transformComponent.posX, this.transformComponent.posY);
    }
}