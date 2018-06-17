export class State {
    constructor(game) {
        this.game = game;

        //Flag to call init function in deriving classes once
        this.inited = false;

        //All scene entities will be stored here
        this.scene = [];
    }

    input = (key) => {
        this.scene.map((entity) => {
            this.reccurentInput(entity, key);
        });
    }

    reccurentInput = (entity, key) => {
        entity.input(key);
        entity.childs.map((childEntity) => {
            this.reccurentInput(childEntity, key);
        })
    }

    update = (delta) => {
        this.scene.map((entity) => {
            this.reccurentUpdate(entity, delta);
        });
    }

    reccurentUpdate = (entity, delta) => {
        entity.update(delta);
        entity.childs.map((childEntity) => {
            this.reccurentUpdate(childEntity, delta);
        })
    }

    draw = (context) => {
        this.scene.map((entity) => {
            this.reccurentDraw(entity, context);
        });
    }

    reccurentDraw = (entity, context) => {
        entity.draw(context);
        entity.childs.map((childEntity) => {
            this.reccurentDraw(childEntity, context);
        })
    }
}