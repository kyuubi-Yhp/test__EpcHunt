const btnAdd = document.querySelector('.btn__popit-info')
const block = document.querySelector('.contant__box-info')
const cross = document.querySelector('.cross__js')
console.log(cross)

btnAdd.addEventListener('click', () => {
block.classList.add('contant__box-info-active')
})

cross.addEventListener('click', () => {
  block.classList.remove('contant__box-info-active')
})