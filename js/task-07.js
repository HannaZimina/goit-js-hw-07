
const textAction = document.querySelector('#text');
const fontAction = document.querySelector('#font-size-control');

fontAction.addEventListener('input', event => {
    textAction.style.fontSize = `${event.target.value}px`;
});