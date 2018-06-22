const Type = {
    EMPTY: 0,
    FLOOR: 1,
    WALL: 2
}

export class MapCreator {
    constructor({} = {}) {

    }

    static generate(width, height, length) {
        let map = new Array(width)
            .fill(new Array(height)
                .fill(Type.EMPTY));

        let startPoint = this.getRandomPoint(width, height);

        for(let i=0; i<length; i++) {
            let possibleDirections = this.getPossibleDirections(map, startPoint);
        }
    }

    static getRandomPoint(xRange, yRange) {
        return {
            x: Math.random() % width,
            y: Math.random() % height
        };
    }

    static getPossibleDirections(map, point) {
        let possibleDirections = [];

        let direction = point.x - 1;
        if(direction >= 0) {
            if(map[direction, point.y] === 0)
                possibleDirections.push({
                    x: direction,
                    y: point.y
                });
        }

        direction = point.x + 1;
        if(direction < map.length) {
            if(map[direction, point.y] === 0)
                possibleDirections.push({
                    x: direction,
                    y: point.y
                });
        }

        direction = point.y - 1;
        if(direction >= 0) {
            if(map[point.x, direction] === 0)
                possibleDirections.push({
                    x: point.x,
                    y: direction
                });
        }

        direction = point.y + 1;
        if(direction < map[0].length) {
            if(map[point.x, direction] === 0)
                possibleDirections.push({
                    x: point,y,
                    y: direction
                });
        }

        return possibleDirections;
    }
}