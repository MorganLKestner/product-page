//  puesdo
// <----- radio check ---->
//color choice - check appears on the right - default color is black

//When user clicks on the radio button the check mark will move to that color with the radio button

//if the user clicks a color that isn't the previous color with the checkmark

// then the previous color has the checkmark removed and the check mark is applied to a new color

const zoomImageContainer = document.querySelector('.product-zoom-images')

document.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('click', event => {
    zoomImageContainer.classList.remove('hide-show-zoom')

    const productNumber = event.target.dataset.image
    const currentZoomClass = 'zoom-img-' + productNumber
    const currentZoomElement = document.querySelector('.' + currentZoomClass)
    currentZoomElement.scrollIntoView()
  })
})

zoomImageContainer.addEventListener('click', () => {
  zoomImageContainer.classList.add('hide-show-zoom')
})

let quantity = 1

const updateQuantity = () => {
  document.querySelector('.qty').innerText = 'quantity (' + quantity + ')'
}

document.querySelector('.add-to').addEventListener('click', () => {
  if (quantity < 15) {
    quantity++
  }
  updateQuantity()
})

document.querySelector('.subtract').addEventListener('click', () => {
  if (quantity > 1) {
    quantity--
  }
  updateQuantity()
})

$('.carousel').carousel({
  interval: false
})
