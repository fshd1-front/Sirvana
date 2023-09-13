let createTour = document.querySelector(".create-tour");
let createButton = document.querySelector("#create-button");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  createTour.classList.toggle("show-modal");
}

createButton.addEventListener("click", toggleModal);

function windowOnClick(event) {
  if (event.target === createTour) {
    toggleModal();
  }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// rank clear ----------------------------------
var checkbox = document.querySelector("#discheck");
var input = document.querySelector("#mmrfirst");
var inputBas = document.querySelector("#mmrlast");

var toogleInput = function(e){
  input.disabled = e.target.checked;
  inputBas.disabled = e.target.checked;

  if (e.target.checked) {
    input.value = "";
    inputBas.value = "";
  }
};

toogleInput({target: checkbox});
checkbox.addEventListener("change", toogleInput);
// ------------------------------------------------------

