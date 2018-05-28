import { State } from './../State';

export class DungeonState extends State {
    constructor(game) {
        super(game);

        this.playerObject = {};
        this.mapObject = {};
    }

    init = () => {
        

        this.inited = true;
    }

    input = (key) => {
        
    }

    update = (delta) => {

    }

    draw = (context) => {
        this.mapObject.draw(context);
        this.playerObject.draw(context);
    }
}