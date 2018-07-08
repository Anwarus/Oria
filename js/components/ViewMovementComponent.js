import { Component } from './../Component';

export class ViewMovementComponent extends Component {
    constructor({game = {}} = {}) {
        super('ViewMovementComponent');

        this.game = game;

        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;
    }

    input = (event) => {
        if(event.type === 'keydown') {
            if(event.keyCode == 38) 
                this.movingUp = true;
            else if(event.keyCode == 40)
                this.movingDown = true;
            else if(event.keyCode == 37)
                this.movingLeft = true;
            else if(event.keyCode == 39)
                this.movingRight = true;
        }
        else if(event.type == 'keyup') {
            if(event.keyCode == 38) 
                this.movingUp = false;
            else if(event.keyCode == 40)
                this.movingDown = false;
            else if(event.keyCode == 37)
                this.movingLeft = false;
            else if(event.keyCode == 39)
                this.movingRight = false;
        }
    }

    update = (delta) => {
        if(this.movingUp)
            this.game.view.move(0, -5);
        if(this.movingDown)
            this.game.view.move(0, 5);
        if(this.movingLeft)
            this.game.view.move(-5, 0);
        if(this.movingRight)
            this.game.view.move(5, 0);
    }
}