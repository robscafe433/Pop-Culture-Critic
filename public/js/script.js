const loginPopUp = document.querySelector(".pop-up-login");
const createAccountLink = document.querySelector(".create-account-link");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close-btn");
const showCreateAccount = document.querySelector('#showCreateAccount');
const createAccount = document.querySelector('.create-account')

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

loginBtn.addEventListener("click", function () {
  console.log("Login btn clicked");
  loginPopUp.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  loginPopUp.style.display = "none";
});

createAccountLink.addEventListener("click", () => {
  loginPopUp.classList.add("active");
});

showCreateAccount.addEventListener('click', function(){
  createAccount.style.display = "block";
})
