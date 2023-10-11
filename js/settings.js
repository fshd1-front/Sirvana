let emailEditt = document.querySelector("#email-editt");
let emailEdit = document.querySelector(".email-edit");
let emailEditcontent = document.querySelector(".email-edit__content");
let title = document.querySelector(".title");
let passwordEditt = document.querySelector("#password-editt");
let passwordEdit = document.querySelector(".password-edit");
let passwordEditcontent = document.querySelector(".password-edit__content");
let passtitle = document.querySelector(".pass-title");

emailEditt.addEventListener("click", () => {
    emailEdit.classList.toggle("active");
    emailEditcontent.classList.toggle("active");
    title.classList.toggle("active");
});

passwordEditt.addEventListener("click", () => {
    passwordEdit.classList.toggle("active");
    passwordEditcontent.classList.toggle("active");
    passtitle.classList.toggle("active");
});



let bgc = document.querySelector("#bgc");
let editBtn = document.querySelector(".edit-btn");

bgc.addEventListener("keyup", () => {
    editBtn.style.backgroundColor = "aqua";
    editBtn.style.color = "#000";
    editBtn.style.cursor = "pointer";
})