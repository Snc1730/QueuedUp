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
      <Button onClick={getAllTheGames}>Show All</Button>
      <Button onClick={showAction}>Action</Button>
      <Button onClick={showAdventure}>Adventure</Button>
      <Button onClick={showCasual}>Casual</Button>
      <Button onClick={showRPG}>RPG</Button>
      <Button onClick={showSim}>Simulation</Button>
      <Button onClick={showStrategy}>Strategy</Button>
      <Button onClick={showSports}>Sports & Racing</Button>
      <Button onClick={showMMO}>Massively Multiplayer</Button>
      <Button onClick={showIndie}>Indie</Button>
      <div className="text-center d-flex flex-wrap">
        {userGames.map((game) => (
          <GameCard key={game.firebaseKey} gameObj={game} onUpdate={getAllTheGames} />
        ))}
      </div>
    </>
  );
}

export default Home;
