const texta = document.querySelector('#text');

function Change() {
    let n = prompt("Введите текст");

    this.textContent = `${n}`;
    this.preventDefault();
}

texta.addEventListener('click', Change);