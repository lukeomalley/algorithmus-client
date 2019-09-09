import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);

  .details {
    background: ${props => props.theme.mainWhite};
  }

  img {
    width: 100%;
  }
`;

const QuestCard = props => {
  return (
    <QuestCardWrapper>
      <img src={props.quest.img_url} className="cardImage" alt="card"></img>
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
    </QuestCardWrapper>
  );
};

export default QuestCard;
