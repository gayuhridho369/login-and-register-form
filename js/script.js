const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const card = document.getElementById('card');

registerButton.addEventListener('click', () => {
    card.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
    card.classList.remove('right-panel-active');
});