import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleQueue } from '../api/gamesData';

function QueuedGameCard({ gameObj, onUpdate }) {
  const deleteThisQueuedGame = () => {
    if (window.confirm(`Remove ${gameObj.title} from your queue?`)) {
      deleteSingleQueue(gameObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{gameObj.title}</Card.Title>
        <p>Description: {gameObj.description}</p>
        <p>Genre: {gameObj.genre}</p>
        <p>Price: ${gameObj.price}</p>
        <Button variant="danger" onClick={deleteThisQueuedGame} className="m-2">
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

QueuedGameCard.propTypes = {
  gameObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    genre: PropTypes.string,
    description: PropTypes.string,
    numOfPlayers: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default QueuedGameCard;
