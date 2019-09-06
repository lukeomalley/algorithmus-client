import React from 'react';
import { Link } from 'react-router-dom';
import '../css/QuestCard.css';

const QuestCard = props => {
  return (
    <div className="mainCard">
      <div className="imageDiv">
        <img src={props.quest.img_url} className="cardImage" alt="card"></img>
      </div>
      <div className="details">
        <Link to={`/quests/${props.quest.id}`}>{props.quest.title}</Link>
        <p>
          {props.quest.doubloon}
          <span>{/* Doubloon Icon Here*/}</span>
        </p>
        <p>
          {props.quest.xp}
          <span>{/* Experience Icon Here*/}</span>
        </p>
      </div>
    </div>
  );
};

export default QuestCard;
