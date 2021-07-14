import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ handleAddToTeam, player }) => {
  const { img, name, country, salary } = player;
  return (
    <div className="player-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>{country}</h5>
      <h5>${salary}</h5>
      <button onClick={() => handleAddToTeam(player)}>Add to team</button>
    </div>
  );
};

export default PlayerCard;
