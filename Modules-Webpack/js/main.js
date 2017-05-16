import {getRandomIntInclusive} from './random';

setInterval(() => {
    const n = getRandomIntInclusive(0, 255);

    document.body.style.backgroundColor = `rgb(${n}, ${n}, ${n})`;
}, 1000);