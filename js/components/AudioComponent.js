import { Component } from './../Component';

export class AudioComponent extends Component {
    constructor({ audioContext = {}, audioSource = {} }) {
        super();

        this.audioContext = audioContext;
        this.audioSource = audioSource;

        audioSource.connect(audioContext.destination);
        audioSource.start(0);
    }

    play = () => {
        this.audioSource.start(0);
    }
}