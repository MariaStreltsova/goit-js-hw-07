import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);


galleryItemsContainer.addEventListener('click', onClickGalleryItems)

// console.log(createGalleryItemsMarkup(galleryItems))
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


// console.log(markup)
}
function onClickGalleryItems(event) {
    event.preventDefault();
    const galleryImageEl = event.target.classList.contains("gallery__image");
    if (!galleryImageEl) {
        return;
    }
    console.log(event.target.dataset.source);
    const urlSource = event.target.dataset.source;
    createModal(urlSource);
}
function createModal(x) {
    const instance = basicLightbox.create(`
    <div class="modal">
<img src="${x}"/>
<a>Close</a>
    </div>
`,
    {
        onShow: (instance) => {
            document.addEventListener("keydown", onEscClose);
            function onEscClose(e) {
                if (e.code == "Escape") {
                    instance.close();
                document.removeEventListener("keydown", onEscClose);
                }
            }
        }
    })

instance.show()
}


console.log(galleryItems);
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })
// instance.show()}