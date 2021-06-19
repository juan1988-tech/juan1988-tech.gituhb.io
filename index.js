const header__burguer_menu = document.querySelector('.header__burguer_menu');
const header__logo = document.querySelector('.header__logo');

header__logo.addEventListener('click', function(){
   document.getElementById('header__nav-menu').classList.toggle('active');
});
header__burguer_menu.addEventListener('click', function(){
   document.getElementById('header__nav-menu').classList.toggle('active');
});