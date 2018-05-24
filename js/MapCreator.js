export class MapCreator {
    constructor() {

    }

    static generate = (width, height, floors, walls) => {
        let startPoint = this.getRandomPoint(width, height);
    }

    static getRandomPoint = (xRange, yRange) => {
        return {
            x: Math.random() % width,
            y: Math.random() % height
        };
    }
}