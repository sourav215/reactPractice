function showModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".login-form").classList.add("showlogin-form");
}

function hideModal() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".login-form").classList.remove("showlogin-form");
}

document.querySelector(".btn-login").addEventListener("click", showModal);

document.querySelector(".hideform").addEventListener("click", hideModal);
document.querySelector(".overlay").addEventListener("click", hideModal);
