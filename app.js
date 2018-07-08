import { SETTINGS } from './js/settings';
import { Game } from './js/Game';

const CANVAS = document.getElementById('screen');

let game = new Game({ canvas: CANVAS, settings: SETTINGS });