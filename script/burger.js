
const burgerBtn = document.querySelector('.berger__btn');
const burgerMenu = document.querySelector('.burger__position')
const linkArrow = document.querySelector('.link__in-header')
const burgerOverlay = document.querySelector('.burger__overlay')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('burger__position-active')
  burgerOverlay.classList.toggle('burger__overlay-active')
  linkArrow.classList.toggle('link__in-header-burger')
});



// const burgerBtn = document.querySelector('.berger__btn');
// const burgerMenu = document.querySelector('.burger__position');
// const burgerOverlay = document.querySelector('.burger__overlay');

// burgerBtn.addEventListener('click', () => {
//   burgerBtn.classList.toggle('active');
//   burgerMenu.classList.toggle('burger__position-active');

//   burgerOverlay.classList.toggle('burger__overlay-active');
// });


burgerOverlay.addEventListener('click', () => {
  burgerBtn.classList.remove('active');
  burgerMenu.classList.remove('burger__position-active');
  burgerOverlay.classList.remove('burger__overlay-active');
  linkArrow.classList.toggle('link__in-header-burger')
});

