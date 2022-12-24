let nav = document.getElementById('navigations');
let burgerBar = document.getElementById('burger');
let header = document.getElementById('header');

burgerBar.addEventListener('click', function() {
    nav.classList.toggle('activeNav')
    header.classList.toggle('burgerHeader')
});