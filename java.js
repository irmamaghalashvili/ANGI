let nav = document.getElementById('navigations');
let burgerBar = document.getElementById('burger');

burgerBar.addEventListener('click', function() {
    nav.classList.toggle('activeNav')
});