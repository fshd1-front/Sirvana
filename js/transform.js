const cardBox1 = document.querySelector('.card-box1');
window.addEventListener('scroll', () => {
    const target = cardBox1.getBoundingClientRect()
    if (target.top - target.height <= 0) {
        cardBox1.style.transform = 'translateY(-10%)';
        cardBox1.style.transition = 'all 1s ease-out';
        cardBox1.style.opacity = '1';
    }
})

const cardBox2 = document.querySelector('.card-box2');
window.addEventListener('scroll', () => {
    const target = cardBox2.getBoundingClientRect()
    if (target.top - target.height <= 0) {
        cardBox2.style.transform = 'translateY(-10%)';
        cardBox2.style.transition = 'all 1s ease-out';
        cardBox2.style.opacity = '1';
    }
})

const cardBox3 = document.querySelector('.card-box3');
window.addEventListener('scroll', () => {
    const target = cardBox3.getBoundingClientRect()
    if (target.top - target.height <= 0) {
        cardBox3.style.transform = 'translateY(-10%)';
        cardBox3.style.transition = 'all 1s ease-out';
        cardBox3.style.opacity = '1';
    }
})