/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, React } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getUserGames } from '../api/gamesData';
import { signOut } from '../utils/auth';
import UserGameCard from './UserGameCard';

export default function UserData() {
  const { user } = useAuth();

  const [userGames, setGames] = useState([]);

  const getAllTheGames = () => {
    getUserGames(user.uid).then(setGames);
  };

  useEffect(() => {
    getAllTheGames();
  }, []);

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={user.photoURL} alt={user.displayName} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{user.displayName}</Card.Title>
          <p>{user.email}</p>
          <p>{user.metadata.lastSignInTime}</p>
          <Button type="button" onClick={signOut}>Sign Out</Button>
        </Card.Body>
      </Card>
      <div className="text-center d-flex flex-wrap">
        {userGames.map((game) => (
          <UserGameCard key={game.firebaseKey} gameObj={game} onUpdate={getAllTheGames} />
        ))}
      </div>
    </>
  );
}
