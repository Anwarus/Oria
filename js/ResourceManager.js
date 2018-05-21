import { CounterReleaser } from './CounterReleaser';

export class ResourceManager {
    constructor(audioContext) {
        this.audioContext = audioContext;

        this.graphics = [];
        this.audios = [];
    }

    load = (bundle = {}, callback) => {
        let count = (bundle.graphics ? bundle.graphics.length : 0) +
                    (bundle.audios ? bundle.audios.length: 0);

        if(count > 0) {
            let counterReleaser = new CounterReleaser(count, callback);

            if(bundle.graphics) {
                for(let graphic of bundle.graphics) {
                    let image = new Image();
                    image.onload = () => {
                        this.graphics.push({
                            name: graphic.name,
                            resource: image
                        });
                        counterReleaser.increase();
                    }
                    image.onerror = (err) => {
                        console.error(err);
                    }
                    image.src = graphic.path;
                }
            }

            if(bundle.audios) {
                for(let audio of bundle.audios) {
                    let source = this.audioContext.createBufferSource();
                    let request = new XMLHttpRequest();
                    
                    request.open('GET', audio.path, true);
                    request.responseType = 'arraybuffer';

                    request.onload = () => {
                        let audioData = request.response;
                        let tmp = this;
                        this.audioContext.decodeAudioData(audioData, function(buffer) {
                            source.buffer = buffer;
                            source.loop = true;

                            tmp.audios.push({
                                name: audio.name,
                                resource: source
                            });

                            counterReleaser.increase();
                        },
                        function(err) { 
                            console.log("Error with decoding audio data" + err.err); 
                        });
                    }

                    request.send();
                }
            }

            return counterReleaser;
        } 
    }

    getGraphic = (name) => {
        return this.graphics.find((graphic) => {
            return graphic.name === name;
        });
    }

    getAudio = (name) => {
        let audio = this.audios.find((audio) => {
            return audio.name === name;
        })
        console.log(audio);
        return audio;
    }
}