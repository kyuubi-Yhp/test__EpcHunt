const btnAdd = document.querySelector('.btn__popit-info')
const block = document.querySelector('.contant__box-info')
const cross = document.querySelector('.cross__js')
const overlay = document.querySelector('.overlay')


btnAdd.addEventListener('click', () => {
block.classList.add('contant__box-info-active')
overlay.classList.add('overlay-active')
})

cross.addEventListener('click', () => {
  block.classList.remove('contant__box-info-active')
  overlay.classList.remove('overlay-active')
})

overlay.addEventListener('click', () => {
  block.classList.remove('contant__box-info-active')
  overlay.classList.remove('overlay-active')
})