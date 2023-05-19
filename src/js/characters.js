import { fetchFn } from './fetchFn';
let page = 1;

const form = document.querySelector('#search-form');
const listGallery = document.querySelector('.characters-gallery');

// form.addEventListener('submit', handleInput);

function handleInput(event) {
  // console.log(event);
  //   event.preventDefault();

  const input = event.target.elements.searchQuery.value.trim();
  if (input === '') {
    console.log('The search string cannot be empty.');
    listGallery.innerHTML = '';
    return;
  }

  fetchFn('', '', '', input).then(data => {
    if (data.total === 0) {
      console.log(data.total);
      console.log(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      listGallery.innerHTML = '';
    } else {
      console.log(data);
      const res = markupGallery(data.results);
      listGallery.innerHTML = res;
    }
  });
}

const markupGallery = elements => {
  return elements
    .map(
      element => `
      <div class="wrapper-gallery-item">
      <img id="characters-gallery-item" src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.description}" loading="lazy" />
  <div id="character-name">
    <h3>${element.name}</h3>
  </div>
  </div>`
    )
    .join('\n');
};

function initParamsGet() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('searchQuery')) {
    const form = document.querySelector('#search-form');
    console.log(form);
    form.elements.searchQuery.value = urlParams.get('searchQuery');

    const event = new Object();
    event.target = form;

    handleInput(event);
  }
}
initParamsGet();

//Page2.Section filter

const formFilter = document.querySelector('.form-filter');
console.log(formFilter);
formFilter.addEventListener('submit', handleFilter);

function handleFilter(event) {
  console.log(event);
  event.preventDefault();

  const input = event.target.elements.searchQuery.value.trim();
  const inputComics = event.target.elements['comics-enter-text'].value.trim();

  if (input === '') {
    console.log('The search string cannot be empty.');
    listGallery.innerHTML = '';
    return;
  }

  fetchFn(inputComics, '', '', input).then(data => {
    if (data.total === 0) {
      console.log(data.total);
      console.log(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      listGallery.innerHTML = '';
    } else {
      console.log(data);
      const res = markupGallery(data.results);
      listGallery.innerHTML = res;
    }
  });
}
