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
    items: [],
    questObj: {},
    isLoggedIn: false
  };

  componentDidMount() {
    fetch(`http://localhost:3000/quests`)
      .then(res => res.json())
      .then(quests => this.setState({ quests }));

    fetch(`http://localhost:3000/items`)
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

  render() {
    if (this.state.isLoggedIn === true) {
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
            <Route
              path="/shop"
              render={() => <ShopPage items={this.state.items} />}
            />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/login" component={LoginPage} />
            <Route
              path="/quests"
              render={() => <QuestIndexPage quests={this.state.quests} />}
            />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <LandingPage />
        </div>
      );
    }
  }
}

export default App;
