export class MapCreator {
    constructor() {

    }

    static generate(width, height, floors, walls, length) {
        let startPoint = this.getRandomPoint(width, height);

        for(let i=0; i<length; i++) {
            
        }
    }

    static getRandomPoint(xRange, yRange) {
        return {
            x: Math.random() % width,
            y: Math.random() % height
        };
    }
}