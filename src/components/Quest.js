import React from 'react';
import styled from 'styled-components';

const QuestWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
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
    margin: 0;
  }

  .details {
    padding: 10px;
  }
`;

const Quest = ({ quest }) => {
  const image = require(`../images/${quest.img_url}`);
  return (
    <QuestWrapper>
      <div>
        <img src={image} alt={quest.title} />
      </div>
      <div className="details">
        <h1>{quest.title}</h1>
        <p>{quest.question}</p>
        <p>Sample Input: {quest.sample_input}</p>
        <p>Sample Output: {quest.sample_output}</p>
        <span>
          <p>
            <span role="img" aria-label="exp-icon">
              🍄
            </span>
            {quest.xp}
          </p>
          <p>
            <span role="img" aria-label="exp-icon">
              💰
            </span>
            {quest.doubloon}
          </p>
        </span>
      </div>
    </QuestWrapper>
  );
};

export default Quest;
