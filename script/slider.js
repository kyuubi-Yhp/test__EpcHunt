const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active'

const slidesNodes = Array.from(document.querySelectorAll('.slide'))
console.log(slidesNodes)
const prevButtonNode = document.querySelector('.btn__right')
const nextButtonNode = document.querySelector('.btn__left')
let activeId

init()

function init() {
    activeId = 0;
    
    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId())
    })
    
    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId())
    })
}

function setActiveSlideById(id) {
    const currentId = activeId
    activeId = id

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0: activeId + 1
}

let startX = 0
let endX = 0

const slider = document.querySelector('.list__slider')

slider.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX
})

slider.addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX

  handleSwipe()
})

function handleSwipe() {
  const diffX = endX - startX

  if (Math.abs(diffX) > 50) { 
    if (diffX > 0) {
      setActiveSlideById(getPrevId())
    } else {
      setActiveSlideById(getNextId())
    }
  }
}