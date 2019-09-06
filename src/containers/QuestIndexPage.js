import React from "react";
import QuestCard from "../components/QuestCard";

const QuestIndexPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Quests Index Page</h1>
      <div className="questContainer">
        {props.quests.map(quest => {
          return (
            <QuestCard
              quest={quest}
              key={quest.id}
              handleSelect={props.handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestIndexPage;
