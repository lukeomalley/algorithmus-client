import React from 'react';
import styled from 'styled-components';

import QuestCard from '../components/QuestCard';

const QuestCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  width: 90vw;
  margin: 25px auto;
`;

const QuestIndexPage = props => {
  return (
    <div>
      <QuestCardContainer>
        {props.quests.map(quest => {
          return <QuestCard quest={quest} key={quest.id} handleSelect={props.handleSelect} />;
        })}
      </QuestCardContainer>
    </div>
  );
};

export default QuestIndexPage;
