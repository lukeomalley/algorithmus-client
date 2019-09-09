import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "../css/App.css";

import QuestIndexPage from "../pages/QuestIndexPage";
import ShopPage from "../pages/ShopPage";
import ProfilePage from "../pages/ProfilePage";
import QuestPage from "../pages/QuestPage";
import Header from "../components/Header";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import { darkTheme, blueTheme } from "../themes";

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
    font-size: 1rem;
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
    isLoggedIn: false,
    theme: darkTheme
  };

  componentDidMount() {
    fetch(`http://localhost:3000/quests`)
      .then(res => res.json())
      .then(quests => this.setState({ quests }));

    fetch(`http://localhost:3000/items`)
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

  setTheme = theme => {
    if (theme === "blueTheme") this.setState({ theme: blueTheme });
  };

  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <ThemeProvider theme={this.state.theme}>
          <>
            <GlobalStyle />
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
              <Route
                path="/profile"
                render={() => (
                  <ProfilePage
                    theme={this.state.theme}
                    setTheme={this.setTheme}
                  />
                )}
              />
              <Route path="/login" component={LoginPage} />
              <Route
                path="/quests"
                render={() => <QuestIndexPage quests={this.state.quests} />}
              />
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </>
        </ThemeProvider>
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
