let count = document.querySelector('.count')
let zarbdar = document.querySelectorAll('.dh')
let closeButton = document.querySelector('.close-button')

function toggleModal() {
	count.classList.toggle('show-modal')
}

for (i = 0; i < zarbdar.length; i++) {
	zarbdar[i].addEventListener('click', toggleModal)
}

function windowOnClick(event) {
	if (event.target === count) {
		toggleModal()
	}
}

closeButton.addEventListener('click', toggleModal)
window.addEventListener('click', windowOnClick)
