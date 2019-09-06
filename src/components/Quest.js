import React from 'react';
import styled from 'styled-components';

const QuestWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  text-align: left;
  margin-bottom: 10px;
  background: #323232;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
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
  return (
    <QuestWrapper>
      <div>
        <img src={quest.img_url} alt={quest.title} />
      </div>
      <div className="details">
        <h1>{quest.title}</h1>
        <p>{quest.question}</p>
        <p>Sample Input: {quest.sample_input}</p>
        <p>Sample Output: {quest.sample_output}</p>
        <span>
          <p>🍄 {quest.xp}</p>
          <p>💰 {quest.doubloon}</p>
        </span>
      </div>
    </QuestWrapper>
  );
};

export default Quest;
