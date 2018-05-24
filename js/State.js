export class State {
    constructor(game) {
        this.game = game;

        //Flag to call init function in deriving classes once
        this.inited = false;
    }
}