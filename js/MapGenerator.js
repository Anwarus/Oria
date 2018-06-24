const TYPE = {
    EMPTY: 0,
    FLOOR: 1,
    WALL: 2
}

export class MapGenerator {
    constructor({} = {}) {

    }

    static generate(width, height, length) {
        let map = this.generatePaths(width - 2, height - 2, length);

        map.map((column) => {
            column.unshift(TYPE.EMPTY);
            column.push(TYPE.EMPTY);
        });

        return map;
    }

    static generatePaths(width, height, length) {
        let map = new Array(width)
            .fill(new Array(height)
                .fill(TYPE.EMPTY));

        let startPoint = this.getRandomPoint(width, height);

        map[startPoint.x][startPoint.y] = TYPE.FLOOR;

        let currentPoint = startPoint;
        for(let i=0; i<length; i++) {
            

            let possibleDirections = this.getPossibleDirections(map, currentPoint);

            if(possibleDirections.length === 0) {
                while(map[currentPoint.x][currentPoint.y] !== 1 
                    && (possibleDirections = this.getPossibleDirections(map, currentPoint)).length === 0)
                    currentPoint = this.getRandomPoint(width, height);
            }

            let chosenDirection = Math.floor(Math.random() * possibleDirections.length);

            currentPoint = possibleDirections[chosenDirection];
            
            map[currentPoint.x][currentPoint.y] = TYPE.FLOOR;
        }

        return map;
    }

    static getRandomPoint(xRange, yRange) {
        return {
            x: Math.floor(Math.random() * xRange),
            y: Math.floor(Math.random() * yRange)
        };
    }

    static getPossibleDirections(map, point) {
        let possibleDirections = [];

        let direction = point.x - 1;
        if(direction >= 0) {
            if(map[direction, point.y] === TYPE.EMPTY)
                possibleDirections.push({
                    x: direction,
                    y: point.y
                });
        }

        direction = point.x + 1;
        if(direction < map.length) {
            if(map[direction, point.y] === TYPE.EMPTY)
                possibleDirections.push({
                    x: direction,
                    y: point.y
                });
        }

        direction = point.y - 1;
        if(direction >= 0) {
            if(map[point.x, direction] === TYPE.EMPTY)
                possibleDirections.push({
                    x: point.x,
                    y: direction
                });
        }

        direction = point.y + 1;
        if(direction < map[0].length) {
            if(map[point.x, direction] === TYPE.EMPTY)
                possibleDirections.push({
                    x: point,y,
                    y: direction
                });
        }
        
        return possibleDirections;
    }
}