let path = require('path');
let chai = require('chai');

chai.expect();

let MapCreator = require(path.join(__dirname, '..', 'js', 'MapCreator'));

describe('MapCreator', () => {
    describe('getRandomPoint', () => {
        it('should always return number in given range', () => {
            let xRange = 10;
            let yRange = 10;

            MapCreator.getRandomPoint(xRange, yRange).x.expect.to.be.at.most(xRange - 1);
            MapCreator.getRandomPoint(xRange, yRange).y.expect.to.be.at.most(yRange - 1);
        })
    });
});