import { fetchFn } from './fetchFn';

//Sticky color header
window.addEventListener('scroll', function () {
  if (pageYOffset > 50) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
});

let page = 1;

const form = document.querySelector('#search-form');

// form.addEventListener('submit', handleInput);

function handleInput(event) {
  // console.log(event);
  // event.preventDefault();

  const input = event.target.elements.searchQuery.value.trim();
  if (input === '') {
    console.log('The search string cannot be empty.');

    return;
  }

  fetchFn('', '', '', input).then(data => {
    if (data.total === 0) {
      console.log(data.total);
      console.log(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      console.log(data);
    }
  });
}
// handleInput(none);

const markupGallery = elements => {
  return elements
    .map(
      element => `<img class="charcters-gallery-item" src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.description}" loading="lazy" />
  <div class="character-name">
    <h3>${element.name}</h3>
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
