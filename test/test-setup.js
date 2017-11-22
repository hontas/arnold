/**
 * Polyfill
 */

export const speechSynthesisUtteranceApi = {
  addEventListener(event, fn) {
    setTimeout(() => fn({}), 1);
  }
};

const SpeechSynthesisUtterance = (text) => speechSynthesisUtteranceApi;

const speechSynthesis = {
  addEventListener(evt, fn) {
    setTimeout(fn, 1);
  },
  getVoices() { return [{ name: 'Anna' }]; },
  speak() {
    speechSynthesis.speaking = true;
    setTimeout(() => {
      speechSynthesis.speaking = false;
    }, 0);
  }
};

const window = {
  speechSynthesis,
  SpeechSynthesisUtterance
};

/**
 * Mutate node global
 */

Object.assign(global, window, { window });
