(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['arnold-says'] = factory());
}(this, (function () { 'use strict';

const isSupported = ['speechSynthesis', 'SpeechSynthesisUtterance'].every((key) => key in window);
const synth = isSupported ? window.speechSynthesis : {};
const notSupportedMsg = 'speechSynthesis not supported';

const voicePromise = new Promise((resolve, reject) => {
    if (isSupported) {
        synth.addEventListener('voiceschanged', () => {
            resolve(synth.getVoices());
        });
    }
});

function says(text) {
    return new Promise((resolve, reject) => {
        if (!isSupported) {
            return reject(Error(notSupportedMsg));
        }

        voicePromise.then((voices) => {
            const utterance = new window.SpeechSynthesisUtterance(text);
            const Anna = voices.find(findAnna);
            if (!Anna) reject(Error('Could not find Annas voice'));

            utterance.voice = Anna;
            utterance.pitch = 0;
            utterance.rate = 0.6;

            synth.speak(utterance);
            const intervalId = setInterval(() => {
                if (!synth.speaking) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 50);
        });
    });
}

function findAnna(voice) {
    return voice.name === "Anna";
}

var index = {
    says
};

return index;

})));
