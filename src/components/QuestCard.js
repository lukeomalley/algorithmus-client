import React from "react";
import "../css/QuestCard.css";

const QuestCard = props => {
  return (
    <div className="mainCard">
      <div className="imageDiv">
        <img
          src={props.quest.img_url}
          className="cardImage"
          alt="card"
          onClick={e => {
            props.handleSelect(e, props.quest);
          }}
        ></img>
      </div>
      <div className="details">
        <h3>{props.quest.title}</h3>
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
