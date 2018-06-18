import { Game } from './js/Game';

const CANVAS = document.getElementById('screen');

const SETTINGS = {
    WIDTH: 800,
    HEIGHT: 600
};

let game = new Game({ canvas: CANVAS, settings: SETTINGS });