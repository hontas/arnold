const isSupported = ['speechSynthesis', 'SpeechSynthesisUtterance'].every((key) => key in window);
const synth = isSupported ? speechSynthesis : {};
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
            const utterance = new SpeechSynthesisUtterance(text);
            const Anna = voices.find(findAnna);
            if (!Anna) reject(Error('Could not find Annas voice'));

            utterance.voice = Anna;
            utterance.pitch = 0;
            utterance.rate = 0.6;

            utterance.addEventListener('end', (event) => resolve(event));
            utterance.addEventListener('error', (event) => {
              if (event.error) {
                reject(event.error);
              }
            });

            synth.speak(utterance);
        });
    });
}

function findAnna(voice) {
    return voice.name === "Anna";
}

export default {
    says
};
