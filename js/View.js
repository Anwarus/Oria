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
        
    }
}