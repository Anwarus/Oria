export class Entity {
    constructor({name = 'Entity', tag = '', parent = {}}) {
        this.name = name;
        this.tag = tag;
        
        this.parent = parent;
        this.childs = [];

        this.components = [];
    }

    addComponent = (component) => {
        component.entity = this;
        this.components.push(component);
    }

    getComponent = (name) => {
        return this.components.find((component) => {
            return (component.name === name);
        });
    }

    addChild = (child) => {
        child.parent = this;
        this.childs.push(child);
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