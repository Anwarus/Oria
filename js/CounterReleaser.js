export class CounterReleaser {
    constructor(counterEnd, callback) {
        this.counterEnd = counterEnd;
        this.callback = callback;

        this.counterStart = 0;
    }

    increase = () => {
        this.counterStart++;

        if(this.counterStart === this.counterEnd)
            if(this.callback)
                setTimeout(this.callback(), 3000);
    }
}