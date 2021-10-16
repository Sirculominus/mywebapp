import React, { useState } from "react";
// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Header from "./components/Header/index";
import Login from "./components/login";
import Home from "./components/Home";
import HandleOAuthLogin from "./components/handleOAuthLogin";
import Signup from "./components/signup";
// Styling
import { Body } from "./App.styles";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    handleToggle();
  };

  return (
    <Router>
      <Header
        handleToggle={handleToggle}
        hamburgerOpen={hamburgerOpen}
        handleToggleDarkMode={handleToggleDarkMode}
        darkMode={darkMode}
      />
      <Body hamburgerOpen={hamburgerOpen}>
        <Switch>
          <Route path="/" render={() => <Home darkMode={darkMode} />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/handleoauthlogin" component={HandleOAuthLogin} />
        </Switch>
      </Body>
      <GlobalStyle darkMode={darkMode} />
    </Router>
  );
}

export default App;
