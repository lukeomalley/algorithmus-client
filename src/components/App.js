import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import ProtectedRoute from '../components/ProtectedRoute';
import QuestIndexPage from '../pages/QuestIndexPage';
import ShopPage from '../pages/ShopPage';
import ProfilePage from '../pages/ProfilePage';
import QuestPage from '../pages/QuestPage';
import Header from '../components/Header';
import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import { darkTheme, blueTheme } from '../themes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Pro|Inconsolata&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inconsolata', monospace;
    color: ${props => props.theme.mainWhite};
    background-color: ${props => props.theme.primaryColor};
    font-size: 15px;
    margin: 0;
    height: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: ${props => props.theme.mainSpacing};
  }
`;

class App extends React.Component {
  state = {
    quests: [],
    items: [],
    questObj: {},
    user: null,
    theme: darkTheme,
    loading: true,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/quests`)
      .then(res => res.json())
      .then(quests => this.setState({ quests }));

    fetch(`http://localhost:3000/api/v1/items`)
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
    return <Redirect to="/quests" push />;
  };

  updateUser = user => {
    this.setState({
      user: user,
      loading: false,
    });
  };

  setTheme = theme => {
    if (theme === 'blueTheme') this.setState({ theme: blueTheme });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyle />
          <Header />
          <Switch>
            <ProtectedRoute
              exact
              path="/quests/:id"
              render={props => {
                let questId = parseInt(props.match.params.id, 10);
                let questObj = this.state.quests.find(quest => quest.id === questId);
                if (questObj) {
                  return <QuestPage quest={questObj} />;
                } else {
                  return <NotFound />;
                }
              }}
            />
            <ProtectedRoute
              exact
              path="/shop"
              render={() => <ShopPage items={this.state.items} />}
            />
            <ProtectedRoute
              exact
              path="/profile"
              render={() => <ProfilePage theme={this.state.theme} setTheme={this.setTheme} />}
            />
            <ProtectedRoute
              exact
              path="/quests"
              user={this.state.user}
              render={() => <QuestIndexPage quests={this.state.quests} />}
            />
            <Route
              exact
              path="/login"
              render={() => <LoginPage toggleLogin={this.toggleLogin} />}
            />
            <Route exact path="/" component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
