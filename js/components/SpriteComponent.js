import { Component } from './../Component';

export class SpriteComponent extends Component {
    constructor({ transformComponentRef = {}, image = {},
                  cellX = 0, cellY = 0, cellWidth = 0, cellHeight = 0 } = {}) {
        super('SpriteComponent');

        this.transformComponent = transformComponentRef;

        this.image = image;

        this.cellX = cellX;
        this.cellY = cellY;
        this.cellWidth = image.naturalWidth || 0;
        this.cellHeight = image.naturalHeight || 0;

        console.log('cellX: ' + this.cellX);
        console.log('cellY: ' + this.cellY);
        console.log('cellWidth: ' + this.cellWidth);
        console.log('cellHeight: ' + this.cellHeight);
        console.log('transformComponent.posX: ' + this.transformComponent.posX);
        console.log('transformComponent.posY: ' + this.transformComponent.posY);
        console.log('scaleX: ' + this.cellWidth * this.transformComponent.scaleX);
        console.log('scaleY: ' + this.cellHeight * this.transformComponent.scaleY);
    }

    draw = (context) => {
        context.drawImage(this.image, this.cellX, this.cellY, this.cellWidth, this.cellHeight, 
                          this.transformComponent.posX, this.transformComponent.posY, 
                          this.cellWidth * this.transformComponent.scaleX,
                          this.cellHeight * this.transformComponent.scaleY);
    }
}