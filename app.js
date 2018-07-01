import { Game } from './js/Game';

const CANVAS = document.getElementById('screen');

const SETTINGS = {
    WIDTH: 1280,
    HEIGHT: 720
};

let game = new Game({ canvas: CANVAS, settings: SETTINGS });