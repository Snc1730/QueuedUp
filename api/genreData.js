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

const getAction = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Action"`, {
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

const getAdventure = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Adventure"`, {
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

const getCasual = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Casual"`, {
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

const getRPG = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="RPG"`, {
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

const getSimulation = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Simulation"`, {
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

const getStrategy = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Strategy"`, {
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

const getSports = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Sports %26 Racing"`, {
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

const getMMO = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Massively Multiplayer"`, {
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

const getIndie = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/games.json?orderBy="genre"&equalTo="Indie"`, {
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
  getAllGenres,
  getSingleGenre,
  getAction,
  getAdventure,
  getCasual,
  getRPG,
  getSimulation,
  getStrategy,
  getSports,
  getMMO,
  getIndie,
};
