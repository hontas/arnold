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
function SpeechSynthesisUtterance(text) {
  this.text = text;
}

global.window = {
  speechSynthesis,
  SpeechSynthesisUtterance
};
