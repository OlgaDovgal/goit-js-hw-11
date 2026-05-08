import SimpleLightbox from 'simplelightbox';
const imagesListEl = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function createGallery(images) {
  const markup = images.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"/>
        <ul class="gallery-image-props-list">
        <li class="image-prop-item"><p>Likes</p><p>${likes}</p></li>
        <li class="image-prop-item"><p>Views</p><p>${views}</p></li>
        <li class="image-prop-item"><p>Comments</p><p>${comments}</p></li>
        <li class="image-prop-item"><p>Downloads</p><p>${downloads}</p></li>
        </ul>
        
    </a>
  </li>`;
    }
  );
  imagesListEl.insertAdjacentHTML('afterbegin', markup.join(''));
  lightbox.refresh();
}
function clearGallery() {
  imagesListEl.innerHTML = '';
}
function showLoader() {
  document.querySelector('.loader').classList.add('shown');
}
function hideLoader() {
  document.querySelector('.loader').classList.remove('shown');
}
export { createGallery, clearGallery, showLoader, hideLoader };
