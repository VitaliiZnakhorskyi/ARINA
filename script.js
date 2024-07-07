const nameMyDoughter = document.querySelector('.name');
const leterA = document.querySelector('.name__a');
const leterR = document.querySelector('.name__r');
const leterI = document.querySelector('.name__i');
const leterN = document.querySelector('.name__n');
const leterATwo = document.querySelector('.name__a-two');
const heard = document.querySelector('.heard');
const button = document.querySelector('.button');
const slide = document.querySelector('.button__slide');
const text = document.querySelector('.text');
const body = document.querySelector('body');
const container = document.querySelector('.container');

button.addEventListener('click', function() {
    button.classList.toggle('active');
    leterA.classList.toggle('active');
    leterR.classList.toggle('active');
    leterI.classList.toggle('active');
    leterN.classList.toggle('active');
    leterATwo.classList.toggle('active');
    heard.classList.toggle('active');
    text.classList.toggle('active');
    body.classList.toggle('active');
    container.classList.toggle('active');
    slide.classList.toggle('active');
});