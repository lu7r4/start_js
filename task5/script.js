input.oninput = addEventListener('keyup', () => {
    duplicateField.textContent = input.value;
});

const chek = document.querySelector('#submit');

document.querySelector('#submit').addEventListener('click', 
    (event) => {
    event.preventDefault();
    alert('Вывести текст в консоль и удалить из формы?')}) 

chek.addEventListener('click', () => {
console.log(input.value),
input.value = '',
duplicateField.textContent = ''; })



