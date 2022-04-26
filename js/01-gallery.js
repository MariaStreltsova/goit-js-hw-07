import { galleryItems } from './gallery-items.js';
// Change code below this line
let modalWindow;
const galleryItemsContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryItemsContainer.addEventListener('click', onClickGalleryItems)

function createGalleryItemsMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`
    }).join("");
}

function onClickGalleryItems(event) {
    event.preventDefault();
    const galleryImageEl = event.target.classList.contains("gallery__image");
    if (!galleryImageEl) {
        return;
    }
    const urlSource = event.target.dataset.source;
    if (urlSource) {
        modalWindow = basicLightbox.create(`
   
<img src="${urlSource}"/>
`, {
            onShow: () => galleryItemsContainer.addEventListener("keydown", onEscClose),
            onClose: () => galleryItemsContainer.addEventListener("keydown", onEscClose),
        });
        modalWindow.show();
   }
   
}
 function onEscClose(e) {
        if (e.code == "Escape") 
            modalWindow.close();
        
    }

console.log(galleryItems);

