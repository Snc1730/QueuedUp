import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllGenres = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/genre.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleGenre = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/genre/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

export {
  getAllGenres,
  getSingleGenre,
};
