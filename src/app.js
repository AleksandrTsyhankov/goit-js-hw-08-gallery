import * as arr from '../src/gallery-items.js'

console.log(arr)

function createGallery(arr) {
    const allImages = [];
    arr.default.map(element => {
    const image =
    `<li class="gallery__item>
        <a
            class="gallery__link
            href="${element.original}"
        >
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="Tulips"
        />
        </a>
    </li>`
    allImages.push(image)
    })
    console.log(allImages)
    console.log(arr.default)
}

createGallery(arr)