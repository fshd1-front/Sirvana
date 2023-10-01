let loginAcc = document.querySelector('#login-acc');
let openBar = document.querySelector('.open__bar');

loginAcc.addEventListener('click', () => {
    openBar.classList.toggle('active');
})
