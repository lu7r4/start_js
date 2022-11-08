const check = document.querySelector('.btn');

document.querySelector('.btn').addEventListener('click', 
    (event) => {
    event.preventDefault();
    alert('Вы уверены, что хотите изменить текст ссылки?')}) 

check.addEventListener('click', () => {
    const userText = prompt('Измените текст ссылки');

console.log(userText);

console.log(document.querySelector('.btn'));

const userTextField = document.querySelector('.btn');
userTextField.textContent = userText;
console.log('Текст в h2 изменён на', userText);


})


