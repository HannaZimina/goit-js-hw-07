let counterValue = document.querySelector('#value');
let value = Number(document.querySelector('#value').textContent);

const incrementBtn = document.querySelector('#counter').lastElementChild;
const decrementBtn = document.querySelector('#counter').firstElementChild;

incrementBtn.addEventListener('click', event => { value += 1; counterValue.innerText = value})

decrementBtn.addEventListener('click', event => { value -= 1; counterValue.innerText = value })