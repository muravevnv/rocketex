
let menu = document.querySelector('.header-nav');
let menuBtn = document.querySelector('.header__burger');
let body = document.querySelector('body')

const toggleMenu = function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('scroll')
}

menuBtn.addEventListener('click', toggleMenu);


