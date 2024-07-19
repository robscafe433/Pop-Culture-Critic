const loginPopUp = document.querySelector('.pop-up-login')
const createAccountLink = document.querySelector('.create-account-link')
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', function(){
    console.log("Login btn clicked");
    loginPopUp.style.display = "block";
})

closeBtn.addEventListener('click', function(){
    loginPopUp.style.display = "none";
})


createAccountLink.addEventListener('click', () => {
    loginPopUp.classList.add('active')
})