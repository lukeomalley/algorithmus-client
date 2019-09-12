import React from 'react';
import styled from 'styled-components';

const QuestWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  text-align: left;
  align-items: center;
  margin-bottom: 10px;
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.mainWhite};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);

  img {
    max-height: 100px;
    background: ${props => props.theme.mainWhite};
    margin: 10px;
  }

  h1 {
  }

  .details {
    padding: 20px;
  }

  em {
    color: ${props => props.theme.accentColor};
  }
`;

const Quest = ({ quest }) => {
  const image = require(`../images/${quest.img_url}`);
  return (
    <QuestWrapper>
      <img src={image} alt={quest.title} />
      <span className="details">
        <h1>{quest.title}</h1>
        <p>{quest.question}</p>
        <p>
          Sample Input: <em>{quest.sample_input}</em>
        </p>
        <p>
          Sample Output: <em>{quest.sample_output}</em>
        </p>
        <span>
          <p>
            <span role="img" aria-label="exp-icon">
              🍄
            </span>
            {quest.xp}
          </p>
          <p>
            <span role="img" aria-label="doubloon-icon">
              💰
            </span>
            {quest.doubloon}
          </p>
        </span>
      </span>
    </QuestWrapper>
  );
};

export default Quest;
