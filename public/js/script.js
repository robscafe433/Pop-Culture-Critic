const loginPopUp = document.querySelector(".pop-up-login");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close-btn");
const showCreateAccountFormLink = document.getElementById(
  "showCreateAccountForm"
);
const showLoginFormLink = document.getElementById("showLoginForm");
const loginFormContainer = document.getElementById("loginFormContainer");
const createAccountFormContainer = document.getElementById(
  "createAccountFormContainer"
);

loginBtn.addEventListener("click", function () {
  loginPopUp.style.display = "flex";
  loginFormContainer.classList.add("active");
  createAccountFormContainer.classList.remove("active");
});

closeBtn.addEventListener("click", function () {
  loginPopUp.style.display = "none";
  createAccountFormContainer.style.display = "none";
});

<<<<<<< Updated upstream
window.addEventListener("click", function (event) {
  if (event.target == loginPopUp) {
    loginPopUp.style.display = "none";
  }
});
=======

>>>>>>> Stashed changes

showCreateAccountFormLink.addEventListener("click", function (event) {
  event.preventDefault();
  loginFormContainer.classList.remove("active");
  createAccountFormContainer.classList.add("active");
  createAccountFormContainer.style.display = "block";
});

showLoginFormLink.addEventListener("click", function (event) {
  event.preventDefault();
  createAccountFormContainer.classList.remove("active");
  loginFormContainer.classList.add("active");
<<<<<<< Updated upstream
=======
  createAccountFormContainer.style.display = "none";
>>>>>>> Stashed changes
});
