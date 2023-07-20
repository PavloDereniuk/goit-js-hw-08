// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createListItemsMarkup(obj) {
  return obj
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join('');
}

gallery.innerHTML = createListItemsMarkup(galleryItems);

let galleryShowEl = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});