const input = document.querySelector('#input');
const dF = document.querySelector('#duplicateField');
const but = document.querySelector('#but');
var n = '';

function Change() {
    n = document.all.input.value; //document.getElementById("input").value;

    dF.textContent = `${n}`;

}

function AddCon() {
    document.all.input.value = "";
    dF.textContent = "";
    console.log(`${n}`);

}

input.addEventListener('keyup', Change);
but.addEventListener('click', AddCon);