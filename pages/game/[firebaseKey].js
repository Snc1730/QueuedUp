/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import viewGameDetails from '../../api/mergedData';
import ReviewForm from '../../components/forms/ReviewForm';
import { getReviewsByGameId } from '../../api/gamesData';

export default function ViewGame() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [gameDetails, setGameDetails] = useState({});

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewGameDetails(firebaseKey).then(setGameDetails);
    getReviewsByGameId(firebaseKey).then();
  }, [firebaseKey]);

  const getGameReviews = () => { getReviewsByGameId(firebaseKey).then(); };

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={gameDetails.image} alt={gameDetails.title} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {gameDetails.title}
          </h5>
          <p>Genre: {gameDetails.genre || ''}</p>
          <p>Description: {gameDetails.description || ''}</p>
          <hr />
          <p>Price: ${gameDetails.price || ''}</p>
          <p>Number of players: {gameDetails.numOfPlayers || ''}</p>
        </div>
      </div>
      <span className="text-white">Reviews</span>
      <div className="review-container">
        <div className="text-white">
          <ReviewForm gameId={firebaseKey} onUpdate={getGameReviews} />
        </div>
      </div>
    </>
  );
}
