let path = require('path');
let expect = require('chai').expect;

//let MapGenerator = require(path.join(__dirname, '..', 'js', 'MapGenerator'));
import { MapGenerator } from './../js/MapGenerator';
import { TYPE } from './../js/MapGenerator';

describe('MapGenerator', () => {
    describe('getRandomPoint', () => {
        it('should always return numbers in given range', () => {
            let xRange = 10;
            let yRange = 10;

            let randomPoint = MapGenerator.getRandomPoint(xRange, yRange);

            expect(randomPoint.x).to.be.at.most(xRange - 1);
            expect(randomPoint.y).to.be.at.most(yRange - 1);
        });

        it('should always return integer numbers', () => {
            let randomPoint = MapGenerator.getRandomPoint(10, 10);

            expect(randomPoint.x).to.be.equal(Math.floor(randomPoint.x));
            expect(randomPoint.y).to.be.equal(Math.floor(randomPoint.y));
        });
    });

    describe('getPossibleDirections', () => {
        it('should return 4 points(directions) for empty map', () => {
            let map = Array.from(Array(3), () => Array(3).fill(TYPE.EMPTY));
            let point = {
                x: 1,
                y: 1
            };
    
            let possibleDirections = MapGenerator.getPossibleDirections(map, point);
    
            expect(possibleDirections.length).to.be.equal(4);
        })
    
        it('should return 0 points(directions) due to filled map', () => {
            let map = Array.from(Array(3), () => Array(3).fill(TYPE.FLOOR));
            let point = {
                x: 1,
                y: 1
            };
    
            let possibleDirections = MapGenerator.getPossibleDirections(map, point);
    
            expect(possibleDirections.length).to.be.equal(0);
        })
    
        it('should return 2 points(directions) due to point is placed in corner', () => {
            let map = Array.from(Array(3), () => Array(3).fill(TYPE.EMPTY));
            let point = {
                x: 0,
                y: 0
            };
    
            let possibleDirections = MapGenerator.getPossibleDirections(map, point);
    
            expect(possibleDirections.length).to.be.equal(2);
        })
    
        it('should return 1 point(directions) due to point is placed in corner and right neighbor is filled', () => {
            let map = Array.from(Array(3), () => Array(3).fill(TYPE.EMPTY));
            let point = {
                x: 0,
                y: 0
            };
    
            map[1][0] = TYPE.FLOOR;
    
            let possibleDirections = MapGenerator.getPossibleDirections(map, point);
    
            expect(possibleDirections.length).to.be.equal(1);
        })
    
        it('should return 4 point(directions) with specific attribute values', () => {
            let map = Array.from(Array(3), () => Array(3).fill(TYPE.EMPTY));
            let point = {
                x: 1,
                y: 1
            };
    
            let possibleDirections = MapGenerator.getPossibleDirections(map, point);
            expect(possibleDirections.length).to.be.equal(4);
    
            let isDirectionPossible = possibleDirections.findIndex((pd) => {
                return(pd.x === 1 && pd.y === 0);
            });
            expect(isDirectionPossible).to.be.above(-1);
    
            isDirectionPossible = possibleDirections.findIndex((pd) => {
                return(pd.x === 2 && pd.y === 1);
            });
            expect(isDirectionPossible).to.be.above(-1);
    
            isDirectionPossible = possibleDirections.findIndex((pd) => {
                return(pd.x === 1 && pd.y === 2);
            });
            expect(isDirectionPossible).to.be.above(-1);
    
            isDirectionPossible = possibleDirections.findIndex((pd) => {
                return(pd.x === 0 && pd.y === 1);
            });
            expect(isDirectionPossible).to.be.above(-1);
        })
    })
});