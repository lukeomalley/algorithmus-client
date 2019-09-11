import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const QuestCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  text-align: center;

  .details {
    background: ${props => props.theme.mainWhite};
    padding: 20px;
  }

  .rewards {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 20px;
  }

  img {
    width: 100%;
    height: 400px;
    padding: 20px;
    background: white;
  }

  h3 {
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.mainBlack};
    font-size: 1rem;
  }
`;

const QuestCard = props => {
  const image = require(`../images/${props.quest.img_url}`);
  return (
    <QuestCardWrapper>
      <Link to={`/quests/${props.quest.id}`}>
        <img src={image} className="cardImage" alt="card" />
        <div className="details">
          <h3>{props.quest.title}</h3>
          <div className="rewards">
            <h5>{props.quest.doubloon}💰</h5>
            <h5>{props.quest.xp} 🍄</h5>
          </div>
        </div>
      </Link>
    </QuestCardWrapper>
  );
};

export default QuestCard;
