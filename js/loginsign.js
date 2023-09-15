let loginBtn = document.getElementById("loginbtn");
let registerBtn = document.getElementById("registerbtn");
let loginBox = document.getElementById("login-box");
let registerBox = document.getElementById("register-box");
let forgotBox = document.getElementById("forgot-box");
let forgotBtn = document.getElementById("forgotbtn");
let logingBtn = document.getElementById("logingbtn");

registerBtn.addEventListener("click", () => {
  loginBox.style.visibility = "hidden";
  registerBox.style.visibility = "visible";
});

loginBtn.addEventListener("click", () => {
  registerBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
});

forgotBtn.addEventListener("click", () => {
  loginBox.style.visibility = "hidden";
  forgotBox.style.visibility = "visible";
});

logingBtn.addEventListener("click", () => {
  forgotBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
});

const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const needPassword = document.getElementById("need-password");
const needPassword2 = document.getElementById("need-password2");
const password = document.getElementById("password");

icon.addEventListener("click", () => {
  if (needPassword.type === "password") {
    needPassword.type = "text";
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show-alt");
  } else {
    needPassword.type = "password";
    icon.classList.remove("bx-show-alt");
    icon.classList.add("bx-hide");
  }
});
icon2.addEventListener("click", () => {
  if (needPassword2.type === "password") {
    needPassword2.type = "text";
    icon2.classList.remove("bx-hide");
    icon2.classList.add("bx-show-alt");
  } else {
    needPassword2.type = "password";
    icon2.classList.remove("bx-show-alt");
    icon2.classList.add("bx-hide");
  }
});
icon3.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    icon3.classList.remove("bx-hide");
    icon3.classList.add("bx-show-alt");
  } else {
    password.type = "password";
    icon3.classList.remove("bx-show-alt");
    icon3.classList.add("bx-hide");
  }
});
