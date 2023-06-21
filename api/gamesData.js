import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createQueuedGame = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/queuedGames.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getAllGames = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getUserGames = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteSingleGame = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleGame = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const createGame = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      const setcode = { firebaseKey: data.name };
      fetch(`${endpoint}/games/${setcode.firebaseKey}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setcode),
      }).then(resolve);
    })
    .catch(reject);
});

const updateGame = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUsersQueuedGames = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/queuedGames.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getAllGames,
  deleteSingleGame,
  getSingleGame,
  createGame,
  updateGame,
  getUserGames,
  getUsersQueuedGames,
  createQueuedGame,
};
