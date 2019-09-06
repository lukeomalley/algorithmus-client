import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';

import QuestIndexPage from './QuestIndexPage';
import ShopPage from '../components/ShopPage';
import ProfilePage from '../components/ProfilePage';
import QuestPage from './QuestPage';
import Header from '../components/Header';

class App extends React.Component {
  state = {
    quests: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/quests`)
      .then(res => res.json())
      .then(quests => this.setState({ quests }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/quest/:id"
            render={props => {
              let questId = props.match.params.id;
              let questObj = this.state.quests.find(quest => quest.id === questId);
              return questObj ? <QuestPage quest={questObj} /> : <QuestIndexPage />;
            }}
          />
          <Route path="/shop" component={ShopPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route exact path="/" render={() => <QuestIndexPage quests={this.state.quests} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
