let createTeam = document.querySelector(".create-team");
let createButton = document.querySelector("#create-button");
let triggers = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  createTeam.classList.toggle("show-modal");
}

createButton.addEventListener("click", toggleModal);

function windowOnClick(event) {
  if (event.target === createTeam) {
    toggleModal();
  }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
