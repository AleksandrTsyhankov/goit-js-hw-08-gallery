import * as arr from './gallery-items.js'


let index = 0;
const allOriginalImages = arr.default.map(element => element.original)
const allOriginalImagesDescriprion = arr.default.map(element => element.description)

const imagesGallery = document.querySelector('ul.js-gallery')
const lightbox = document.querySelector('.lightbox')
const overlayImage = document.querySelector('img.lightbox__image')


imagesGallery.addEventListener('click', onImageClickZoom)
imagesGallery.addEventListener('keydown', onClickEscKeyClose)
lightbox.addEventListener('click', onMouseClickClose)
window.addEventListener('keydown', onArrowPress)
createGallery(arr)

function createGallery(arr) {
  const allImages = [];
  
  arr.default.map(element => {
    const image =
      `<li class="gallery__item">
        <a
            class="gallery__link"
            href="${element.original}"
        >
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />
        </a>
    </li>`
    allImages.push(image)
  });

  imagesGallery.insertAdjacentHTML('beforeend', allImages.join(''))
}                                                       

function onImageClickZoom(e) {
  e.preventDefault()

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  lightbox.classList.add('is-open')

  overlayImage.src = e.target.dataset.source
  overlayImage.alt = e.target.alt

  index = allOriginalImages.indexOf(e.target.dataset.source)
}                                                       

function onMouseClickClose(e) {
  if (e.target.nodeName === 'IMG') {
    return;
  }
  
  lightbox.classList.remove('is-open')
  overlayImage.src = ""
  overlayImage.alt = ""
}

function onClickEscKeyClose(e) {
  if (e.keyCode !== 27) {
    return
  }

  lightbox.classList.remove('is-open')
  overlayImage.src = ""
  overlayImage.alt = ""
}

function onArrowPress(e) {
  if (e.keyCode === 37 && index > 0) {
    index -= 1
  }
  else if (e.keyCode === 39 && index < allOriginalImages.length-1) {
    index += 1
  }

  showImage(index)
}

function showImage(currentIndex) {
  overlayImage.src = allOriginalImages[currentIndex]
  overlayImage.alt = allOriginalImagesDescriprion[currentIndex]
}