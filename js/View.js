export class View {
    constructor({ context = {},
                  posX = 0, posY = 0,
                  width = 1280, height = 720 } = {}) {
        this.context = context;
        
        this.posX = posX;
        this.posY = posY;

        this.width = width;
        this.height = height;
    }

    drawImage = (image = {}, 
                 sourceX = 0, sourceY = 0, sourceWidth = image.naturalWidth, sourceHeight = image.naturalHeight,
                 destX = 0, destY = 0, destWidth = image.naturalWidth, destHeight = image.naturalHeight) => {
        if((this.betweenWidth(destX) || this.betweenWidth(destX + destWidth)) &&
            this.betweenHeigth(destY) || this.betweenHeigth(destY + destHeight)) {
            this.context.drawImage(image,
                 sourceX, sourceY, sourceWidth, sourceHeight, 
                 destX, destY, destWidth, destHeight);
        }
    }

    betweenWidth = (point) => {
        return (point >= this.posX && point <= (this.posX + this.width));
    }

    betweenHeigth = (point) => {
        return (point >= this.posY && point <= (this.posY + this.height));
    }
}