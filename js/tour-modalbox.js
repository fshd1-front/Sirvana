let createTour = document.querySelector(".create-tour");
let bodyPlus = document.querySelector(".body-plus");
let triggers = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  createTour.classList.toggle("show-modal");
}

bodyPlus.addEventListener("click", toggleModal);

function windowOnClick(event) {
  if (event.target === createTour) {
    toggleModal();
  }
}


closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
