import React, { useState } from "react";
// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Header from "./components/Header/index";
import Login from "./components/login";
import Home from "./components/Home";
import HandleOAuthLogin from "./components/handleOAuthLogin";
import Signup from "./components/signup";
import Donation from "./components/Donation/index";
import Footer from "./components/Footer/index";
// Styling
import { Body, Wrapper } from "./App.styles";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const handleCloseHamburger = () => {
    setHamburgerOpen(false);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    handleToggle();
  };

  return (
    <Router>
      <Wrapper>
        <Header
          handleToggle={handleToggle}
          hamburgerOpen={hamburgerOpen}
          handleToggleDarkMode={handleToggleDarkMode}
          darkMode={darkMode}
          handleCloseHamburger={handleCloseHamburger}
        />
        <Body hamburgerOpen={hamburgerOpen}>
          <Switch>
            <Route exact path="/">
              <Home darkMode={darkMode} />{" "}
            </Route>
            <Route path="/donation">
              <Donation darkMode={darkMode} />{" "}
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/handleoauthlogin" component={HandleOAuthLogin} />
          </Switch>
        </Body>
        <Footer darkMode={darkMode} />
        <GlobalStyle darkMode={darkMode} />
      </Wrapper>
    </Router>
  );
}

export default App;
