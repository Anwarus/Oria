export class StateManager {
    constructor(initialState) {
        this.states = [];

        if(initialState) {
            this.states.push(initialState);
        }
    }

    addState = (state) => {
        this.states.push(state);
    }

    changeCurrentState = (stateName) => {
        let possibleCurrentState = this.states.find((state) => { state.name === stateName });

        if(possibleCurrentState)
            this.currentState = possibleCurrentState;
    }

    getCurrentState = () => {
        return this.states[this.states.length - 1];
    }
}