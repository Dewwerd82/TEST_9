const Con2 = document.querySelector('.Con1');
const Con3 = document.querySelector('.Con2');
const Con1 = document.querySelector('.Con3');
var g, r, e = 0;

function makeRed() {
    Con2.style.background = ('red');
    Con1.style.background = ('black');
    Con3.style.background = ('black');
    Con2.removeEventListener('click', makeRed);
    Con2.addEventListener('click', makeBlackRed);
}

function makeBlackRed() {
    Con2.style.background = ('black');
    Con2.removeEventListener('click', makeBlackRed);
    Con2.addEventListener('click', makeRed);
}

function makeYellow() {
    Con3.style.background = ('yellow');
    Con2.style.background = ('black');
    Con1.style.background = ('black');
    Con3.removeEventListener('click', makeYellow);
    Con3.addEventListener('click', makeBlackYellow);
}

function makeBlackYellow() {
    Con3.style.background = ('black');
    Con3.removeEventListener('click', makeBlackYellow);
    Con3.addEventListener('click', makeYellow);
}

function makeGreen() {
    Con1.style.background = ('green');
    Con2.style.background = ('black');
    Con3.style.background = ('black');
    Con1.removeEventListener('click', makeGreen);
    Con1.addEventListener('click', makeBlackGreen);
}

function makeBlackGreen() {
    Con1.style.background = ('black');
    Con1.removeEventListener('click', makeBlackGreen);
    Con1.addEventListener('click', makeGreen);
}


Con1.addEventListener('click', makeGreen);
Con2.addEventListener('click', makeRed);
Con3.addEventListener('click', makeYellow);