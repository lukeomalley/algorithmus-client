import React from "react";
import styled from "styled-components";

import QuestCard from "../components/QuestCard";

const QuestCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const QuestIndexPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Quests Index Page</h1>
      <QuestCardContainer>
        {props.quests.map(quest => {
          return (
            <QuestCard
              quest={quest}
              key={quest.id}
              handleSelect={props.handleSelect}
            />
          );
        })}
      </QuestCardContainer>
    </div>
  );
};

export default QuestIndexPage;
