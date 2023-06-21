/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllGames } from '../api/gamesData';
import QueuedGameCard from '../components/QueuedGameCard';

function QueuedGamesOnDom() {
  const { user } = useAuth();

  const [userGames, setGames] = useState([]);

  const getAllTheGames = () => {
    getAllGames(user.uid).then(setGames);
  };

  useEffect(() => {
    getAllTheGames();
  }, []);

  return (
    <div className="text-center d-flex flex-wrap">
      {userGames.map((game) => (
        <QueuedGameCard key={game.firebaseKey} gameObj={game} onUpdate={getAllTheGames} />
      ))}
    </div>
  );
}

export default QueuedGamesOnDom;
