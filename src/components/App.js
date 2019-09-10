import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
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

    if (localStorage.getItem('token')) {
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          Authentication: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then(res => res.json())
        .then(user => {
          this.updateUser(user);
          this.props.history.push('/quests');
        });
    } else {
      this.setState({ loading: false });
    }
  }

  updateUser = user => {
    this.setState({
      user: user,
      loading: false,
    });
    return <Redirect to="/quests" push />;
  };

  setTheme = theme => {
    if (theme === 'blueTheme') this.setState({ theme: blueTheme });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyle />
          {this.state.user ? <Header user={this.state.user} /> : null}
          {!this.state.loading ? (
            <Switch>
              <Route
                exact
                path="/quests/:id"
                render={props => {
                  let questId = parseInt(props.match.params.id, 10);
                  let questObj = this.state.quests.find(quest => quest.id === questId);
                  if (this.state.user) {
                    if (questObj) {
                      return <QuestPage quest={questObj} />;
                    } else {
                      return <NotFound />;
                    }
                  } else {
                    return <LoginPage />;
                  }
                }}
              />
              <ProtectedRoute
                exact
                path="/shop"
                component={ShopPage}
                user={this.state.user}
                items={this.state.items}
              />
              <ProtectedRoute
                exact
                path="/profile"
                component={ProfilePage}
                user={this.state.user}
                updateUser={this.updateUser}
              />
              <ProtectedRoute
                exact
                path="/quests"
                user={this.state.user}
                component={QuestIndexPage}
                quests={this.state.quests}
              />
              <Route
                exact
                path="/login"
                render={() => <LoginPage updateUser={this.updateUser} />}
              />
              <Route exact path="/" component={LandingPage} />
              <Route component={NotFound} />
            </Switch>
          ) : null}
        </>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
