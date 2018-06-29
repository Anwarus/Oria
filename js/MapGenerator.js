import { Entity } from './Entity';
import { SpriteComponent } from './components/SpriteComponent';
import { TransformComponent } from './components/TransformComponent';

export const TYPE = {
    EMPTY: 0,
    FLOOR: 1,
    WALL: 2
}

export class MapGenerator {
    constructor({} = {}) {

    }

    static generate(width, height, length, resourceManager) {
        let map = this.generatePaths(width - 2, height - 2, length);
        map = this.createBorders(map);
        
        // map.map((col) => {
        //     console.log(col);
        // });

        return this.spawnEntities(map, resourceManager);
    }

    static generatePaths(width, height, length) {
        let map = Array.from(Array(width), () => new Array(height).fill(TYPE.EMPTY));
            
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

    static createBorders(map) {
        let height = map[0].length + 2;

        map.map((column) => {
            column.unshift(TYPE.EMPTY);
            column.push(TYPE.EMPTY);
        });
        map.unshift(new Array(height).fill(TYPE.EMPTY));
        map.push(new Array(height).fill(TYPE.EMPTY));

        return map;
    }

    static spawnEntities(map, resourceManager) {
        let entities = [];

        for(let x=0; x<map.length; x++) {
            for(let y=0; y<map[x].length; y++) {
                if(map[x][y] === TYPE.FLOOR) {
                    let floorEntity = new Entity();
                    console.log('adadasddsd');
                    floorEntity.addComponent(new TransformComponent({
                        posX: x * 64,
                        posY: y * 64
                    }));
                    floorEntity.addComponent(new SpriteComponent({
                        transformComponentRef: floorEntity.getComponent('TransformComponent'),
                        image: resourceManager.getGraphic('tile'),
                        cellWidth: 64,
                        cellHeight: 64
                    }));

                    entities.push(floorEntity);
                }
            }
        }

        return entities;
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
            if(map[direction][point.y] == TYPE.EMPTY) {
                possibleDirections.push({
                    x: direction,
                    y: point.y
                });
            }        
        }

        direction = point.x + 1;
        if(direction < map.length) {
            if(map[direction][point.y] == TYPE.EMPTY)
                possibleDirections.push({
                    x: direction,
                    y: point.y
                });
        }

        direction = point.y - 1;
        if(direction >= 0) {
            if(map[point.x][direction] == TYPE.EMPTY)
                possibleDirections.push({
                    x: point.x,
                    y: direction
                });
        }

        direction = point.y + 1;
        if(direction < map[0].length) {
            if(map[point.x][direction] == TYPE.EMPTY)
                possibleDirections.push({
                    x: point.y,
                    y: direction
                });
        }
        
        return possibleDirections;
    }
}