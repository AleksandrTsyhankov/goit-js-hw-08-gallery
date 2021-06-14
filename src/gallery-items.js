export default [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

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