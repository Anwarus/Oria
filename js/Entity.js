export class Entity {
    constructor(name = 'default', parent = {}) {
        this.name = name;
        
        this.parent = parent;
        this.childs = [];

        this.components = [];
    }

    addComponent = (component) => {
        component.entity = this;
        this.components.push(component);
    }

    input = (key) => {
        this.components.forEach((component) => {
            if(component.input)
                component.input(key);
        });
    }

    update = (delta) => {
        this.components.forEach((component) => {
            if(component.update)
                component.update(delta);
        });
    }

    draw = (context) => {
        this.components.forEach((component) => {
            if(component.draw)
                component.draw(context);
        });
    }
}