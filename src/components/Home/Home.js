import React, { useState } from "react";
import "./Home.css";
import playersData from "../../data/playersData.json";
import PlayerCard from "../Player/PlayerCard";
import Cart from "../Cart/Cart";

const Home = () => {
  const [players, setPlayers] = useState(playersData);
  const [team, setTeam] = useState([]);

  const handleAddToTeam = (player) => {
    const isPresent = team.find((item) => item.id === player.id);
    if (isPresent) {
      alert(
        "This player already added to the team. Please select another player"
      );
    } else {
      setTeam([...team, player]);
    }
  };

  const handleRemoveFromTeam = (player) => {
    const newTeam = team.filter((item) => item.id !== player.id);
    setTeam(newTeam);
  };

  return (
    <div className="home">
      <div className="players-info">
        {players.map((item) => (
          <PlayerCard
            handleAddToTeam={handleAddToTeam}
            key={item.id}
            player={item}
          />
        ))}
      </div>
      <div className="selected-team-area">
        <Cart handleRemoveFromTeam={handleRemoveFromTeam} team={team} />
      </div>
    </div>
  );
};

export default Home;
