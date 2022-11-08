const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Метод для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    prompt('Метод для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
})