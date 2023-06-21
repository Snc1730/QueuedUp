import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { createQueuedGame } from '../api/gamesData';

function GameCard({ gameObj }) {
  const router = useRouter();
  const { user } = useAuth();

  const handleQueueClick = (e) => {
    e.preventDefault();
    const payload = {
      uid: user.uid, game_id: gameObj.firebaseKey,
    };
    createQueuedGame(payload).then(() => {
      router.push('/queuedGamePage');
      console.warn(gameObj);
    });
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{gameObj.title}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE GAME DETAILS  */}
        <Link href={`/game/${gameObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Button variant="danger" onClick={handleQueueClick} className="card-unsave">Add To Queue</Button>
      </Card.Body>
    </Card>
  );
}

GameCard.propTypes = {
  gameObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    numOfPlayers: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default GameCard;
