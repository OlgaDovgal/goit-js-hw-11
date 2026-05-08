import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
const formSend = document.querySelector('.form');
formSend.addEventListener('submit', event => {
  event.preventDefault();
  const queryWord = document
    .querySelector('input[name="search-text"]')
    .value.trim();
  if (!queryWord) {
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(queryWord)
    .then(response => {
      const images = response.hits;
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(images);
        document.querySelector('input[name="search-text"]').focus();
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'Oops! Something went wrong. Plese try again.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});
