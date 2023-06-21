import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function QueuedGameCard({ gameObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{gameObj.title}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE GAME DETAILS  */}
        <Link href={`/game/${gameObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

QueuedGameCard.propTypes = {
  gameObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    numOfPlayers: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default QueuedGameCard;
