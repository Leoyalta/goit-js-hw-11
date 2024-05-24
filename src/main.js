import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getDataFromAPI } from './js/pixabay-api';
import { renderGalleryImg } from './js/render-function'

const API_KEY = '44022963-dc7d5638f3e5caf2e9b20745b';
const BASE_URL= 'https://pixabay.com/api/';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper ');

searchForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  galleryEl.innerHTML = '';
  loaderWrapper.classList.remove('is-hidden');

  const inputSearchValue = event.currentTarget.search.value.trim();

  if (!inputSearchValue) {
    displayErrorMessage('Sorry, there are no images matching your search query. Please try again!');
    event.currentTarget.reset();
    loaderWrapper.classList.add('is-hidden');
    return;
  }

  getDataFromAPI(BASE_URL, API_KEY, inputSearchValue)
    .then(data => {
      const formData = data.hits;
      if (formData.length === 0) {
        displayErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        loaderWrapper.classList.add('is-hidden');
        return;
      }

      renderGalleryImg(galleryEl, formData);
      loaderWrapper.classList.add('is-hidden');
    })
    .catch(error => {
      errorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      console.error('Error fetching data:', error);
    });

  event.currentTarget.reset();
}

const iziToastConfig = {
  position: 'topRight',
  titleColor: '#FFF',
  titleSize: '16',
  titleLineHeight: '24',
  messageColor: '#FFF',
  messageSize: '16',
  messageLineHeight: '24',
};

function errorMessage(message, title) {
  iziToast.error({
    ...iziToastConfig,
    title: title || '',
    message: `${message}`,
    backgroundColor: '#EF4040',
  });
}