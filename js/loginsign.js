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
