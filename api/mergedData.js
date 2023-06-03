import { getSingleGame } from './gamesData';
import { getSingleGenre } from './genreData';

const viewGameDetails = (gameFirebaseKey) => new Promise((resolve, reject) => {
  getSingleGame(gameFirebaseKey)
    .then((gameObject) => {
      getSingleGenre(gameObject.genre_id)
        .then((genreObject) => {
          resolve({ genreObject, ...gameObject });
        });
    }).catch((error) => reject(error));
});

export default viewGameDetails;
