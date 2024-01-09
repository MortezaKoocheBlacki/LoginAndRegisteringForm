let wrapper = document.querySelector(".wrapper"),
loginLink = document.querySelector(".login-link"),
registerLink = document.querySelector(".register-link"),
btnPopUp = document.querySelector(".btnLogin-popup"),
iconClose = document.querySelector(".close-icon");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click', () => {
    wrapper.classList.toggle("active-popup");
});

iconClose.addEventListener('click', () =>{
    wrapper.classList.remove("active-popup");
});