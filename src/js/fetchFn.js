import axios from 'axios';

const API = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/characters',
  params: {
    ts: 1,
    apikey: '24d3d2460d60c6f63a9af8492c50f004',
    hash: 'a356dd248b100063b222726f44ff9390',
  },
});

export async function fetchFn(comics, orderBy, modifiedSince, nameStartsWith) {
  console.log('params', comics, orderBy, modifiedSince, nameStartsWith);
  let object = new Object();

  if (nameStartsWith !== '') object.nameStartsWith = nameStartsWith;
  if (comics !== '') object.comics = comics;
  if (orderBy !== '') object.orderBy = orderBy;
  if (modifiedSince !== '') object.modifiedSince = modifiedSince;

  return await API.get('', {
    params: object,
  }).then(response => {
    // console.log(response.data.data.total);
    return response.data.data;
  });
}
