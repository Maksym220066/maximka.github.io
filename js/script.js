const btnBurger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.header__nav-menu');
console.log(btnBurger);
function toggleMenu() {
   console.log('hello');
   burgerMenu.classList.toggle('active');
}
btnBurger.addEventListener('click', toggleMenu);


