# Arnold

Minimalist wrapper around the [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) interface of the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to make your browser talk like Arnold. Or at least a lady like version of him. It's really not so similar. But it's fun. Enjoy!

![arnold](https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAxJAAAAJDhiZTMzYWM4LTU0MTEtNDYyZS1hNmZjLTI2MDJiYzc0ZmEyNQ.jpg)

## install
```bash
npm i arnold-says
```

## use
```
import Arnold from 'arnold-says';

Arnold.says('Hasta la vista baby')
  .then(() => console.log('done talking'))
  .catch((err) => console.err(err));

Arnold.saySomething(); // Speaks random Arnold quote
```

*Requires Promise implementation
