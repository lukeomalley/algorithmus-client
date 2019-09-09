import React from "react";
import { Route, Switch } from "react-router-dom";
import "../css/App.css";

import QuestIndexPage from "../pages/QuestIndexPage";
import ShopPage from "../pages/ShopPage";
import ProfilePage from "../pages/ProfilePage";
import QuestPage from "../pages/QuestPage";
import Header from "../components/Header";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";

class App extends React.Component {
  state = {
    quests: [],
    questObj: {}
  };

  componentDidMount() {
    fetch(`http://localhost:3000/quests`)
      .then(res => res.json())
      .then(quests => this.setState({ quests }));
  }

  // I think i need to give the route component the id of the algo that was clicked so that it can actualyl go that algo
  // The state is being changed when the image of the algo is clicked on...however, it does not show the QuestPage because it doesn't change the URL
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/quests/:id"
            render={props => {
              let questId = parseInt(props.match.params.id, 10);
              let questObj = this.state.quests.find(
                quest => quest.id === questId
              );
              return questObj ? (
                <QuestPage quest={questObj} />
              ) : (
                <QuestIndexPage quests={this.state.quests} />
              );
            }}
          />
          <Route path="/shop" component={ShopPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/quests"
            render={() => (
              //might we be able to remove this code as well? Is it ever even being hit?
              <QuestIndexPage quests={this.state.quests} />
            )}
          />

          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
