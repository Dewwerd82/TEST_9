let consolelog = document.querySelector("#consoleLog");
let cod = document.querySelector("#cod");
let aler = document.querySelector("#alert");
let promp = document.querySelector("#prompt");

consolelog.addEventListener("click", () => {
    alert("Метод для вывода сообщений в консоль");
})

cod.addEventListener("click", () => {
    cod.innerHTML = "Пример использования команды console.log";
})

aler.addEventListener("click", () => {
    alert("Метод использавания Alert");
})

promp.addEventListener("click", () => {
    prompt("Метод использавания Prompt");
})