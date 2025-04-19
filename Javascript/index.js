function imgSlider(anything){
    document.querySelector('.starbucks').src = anything
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menuElemen');
menuToggle.classList.toggle('active');
menu.classList.toggle('active');
}