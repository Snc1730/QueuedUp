/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllGames } from '../api/gamesData';
import GameCard from '../components/GameCard';
import {
  getAction, getAdventure, getCasual, getIndie, getMMO, getRPG, getSimulation, getSports, getStrategy,
} from '../api/genreData';

function Home() {
  const { user } = useAuth();

  const [userGames, setGames] = useState([]);
  const [filter, setFilter] = useState('');

  const getAllTheGames = () => {
    getAllGames(user.uid).then(setGames);
  };

  const showAction = () => {
    getAction(user.uid).then(setGames);
  };

  const showAdventure = () => {
    getAdventure(user.uid).then(setGames);
  };

  const showCasual = () => {
    getCasual(user.uid).then(setGames);
  };

  const showRPG = () => {
    getRPG(user.uid).then(setGames);
  };

  const showSim = () => {
    getSimulation(user.uid).then(setGames);
  };

  const showStrategy = () => {
    getStrategy(user.uid).then(setGames);
  };

  const showSports = () => {
    getSports(user.uid).then(setGames);
  };

  const showMMO = () => {
    getMMO(user.uid).then(setGames);
  };

  const showIndie = () => {
    getIndie(user.uid).then(setGames);
  };
  useEffect(() => {
    getAllTheGames();
  }, []);

  return (
    <>
      <div className="text-center">
        <br />
        <input placeholder="Search Game" onChange={(event) => setFilter(event.target.value)} />
      </div>
      <br />
      <Button className="filterBtn" onClick={getAllTheGames}>Show All</Button>
      <Button className="filterBtn" onClick={showAction}>Action</Button>
      <Button className="filterBtn" onClick={showAdventure}>Adventure</Button>
      <Button className="filterBtn" onClick={showCasual}>Casual</Button>
      <Button className="filterBtn" onClick={showRPG}>RPG</Button>
      <Button className="filterBtn" onClick={showSim}>Simulation</Button>
      <Button className="filterBtn" onClick={showStrategy}>Strategy</Button>
      <Button className="filterBtn" onClick={showSports}>Sports & Racing</Button>
      <Button className="filterBtn" onClick={showMMO}>Massively Multiplayer</Button>
      <Button className="filterBtn" onClick={showIndie}>Indie</Button>
      <div className="text-center d-flex flex-wrap">
        {userGames.filter((game) => {
          if (filter === '') {
            return game;
          } if (game.title.toLowerCase().includes(filter.toLowerCase())) {
            return game;
          }
          return '';
        }).map((game) => (
          <GameCard key={game.firebaseKey} gameObj={game} onUpdate={getAllTheGames} />
        ))}
      </div>
    </>
  );
}

export default Home;
