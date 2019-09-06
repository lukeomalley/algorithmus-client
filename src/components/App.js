import React from "react";
import { Route, Switch } from "react-router-dom";
import "../css/App.css";

import QuestIndexPage from "../containers/QuestIndexPage";
import ShopPage from "../containers/ShopPage"; ////
import ProfilePage from "../components/ProfilePage";
import QuestPage from "../containers/QuestPage";
import Header from "../components/Header";

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

  handleSelect = (e, obj) => {
    this.setState({
      questObj: obj
    });
  };

  // I think i need to give the route component the id of the algo that was clicked so that it can actualyl go that algo
  // The state is being changed when the image of the algo is clicked on...however, it does not show the QuestPage because it doesn't change the URL
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/quest/:id"
            render={props => {
              // let questId = props.match.params.id;
              // These lines of code we might be able to remove
              // let questObj = this.state.quests.find(
              //   quest => quest.id === questId
              // );

              return this.state.questObj ? (
                <QuestPage quest={this.state.questObj} />
              ) : (
                <QuestIndexPage
                  quests={this.state.quests}
                  handleSelect={this.handleSelect}
                />
              );
            }}
          />
          <Route path="/shop" component={ShopPage} />
          <Route path="/profile" component={ProfilePage} />

          <Route
            exact
            path="/"
            render={() => (
              //might we be able to remove this code as well? Is it ever even being hit?
              <QuestIndexPage
                quests={this.state.quests}
                handleSelect={this.handleSelect}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
