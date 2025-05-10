// const btnBurger = document.querySelector('.berger__btn')
// const burgerActive = document.querySelector('.burger__position')


// btnBurger.addEventListener('click', () => {
//   burgerActive.classList.add('burger__position-active')
//   burgerBtn.classList.toggle('active');
// });

const burgerBtn = document.querySelector('.berger__btn');
const burgerMenu = document.querySelector('.burger__position');
const linkArrow = document.querySelector('.link__in-header')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('burger__position-active');
  linkArrow.classList.toggle('link__in-header-burger')
});

