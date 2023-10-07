let likes = document.getElementsByClassName('bx-like')
// let rightBox = document.querySelectorAll('.rightbox__bot--comments');

for (let i = 0; i < likes.length; i++) {
	console.log(likes[i])

	likes[i].parentNode.addEventListener('click', function () {
		console.log(likes[i])
		likes[i].classList.toggle('bxs-like')
	})
}