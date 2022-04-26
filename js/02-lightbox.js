import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryItemsContainer.addEventListener('click', onClickGalleryItems)

// console.log(createGalleryItemsMarkup(galleryItems))
function createGalleryItemsMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
    `}).join("");

console.log(markup)
}
function onClickGalleryItems(event) {
    event.preventDefault();
    const galleryImageEl = event.target.classList.contains("gallery__image");
    if (!galleryImageEl) {
        return;
    }
}
const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
console.log(galleryItems);
