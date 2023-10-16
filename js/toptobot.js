let clickBtn = document.querySelector('#toptobotbtn')
let botBox = document.querySelector('.botbox')

clickBtn.addEventListener('click', () => {
	botBox.classList.toggle('active')
	botBox.classList.remove('unactive')
	if (
		clickBtn.children[0].getAttribute('d') === 'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
	) {
		clickBtn.children[0].setAttribute('d', 'M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5')
	} else {
		botBox.classList.add('unactive')
		clickBtn.children[0].setAttribute('d', 'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5')
	}
})
