// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const cardsMarkup = makeImgCards(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", cardsMarkup);

function makeImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
        .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    'captions': true,
    'captionDelay': 250,       
});