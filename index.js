const header__burguer_menu = document.querySelector('.header__burguer_menu');

header__burguer_menu.addEventListener('click', function(){
   document.getElementById('header__nav-menu').classList.toggle('active');
})