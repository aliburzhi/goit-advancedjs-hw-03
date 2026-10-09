import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('form'),
  submitBtn: document.querySelector('button[type="submit"]'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { currentTarget: searchFormEl } = event;

  const searchQuery = searchFormEl.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.error({ message: 'Empty input!', position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());
};

refs.formEl.addEventListener('submit', onSearchFormSubmit);
