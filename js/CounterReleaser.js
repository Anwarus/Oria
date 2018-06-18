export class CounterReleaser {
    constructor({ counterEnd = 1, callback = {} } = {}) {
        this.counterEnd = counterEnd;
        this.callback = callback;

        this.counterStart = 0;
    }

    increase = () => {
        this.counterStart++;

        if(this.counterStart === this.counterEnd)
            if(this.callback)
                this.callback();
    }
}