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

// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleToggle = () => {
    setHamburgerOpen((prev) => !prev);
  };

  return (
    <Router>
      <Header handleToggle={handleToggle} hamburgerOpen={hamburgerOpen} />
      <Body hamburgerOpen={hamburgerOpen}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/handleoauthlogin" component={HandleOAuthLogin} />
        </Switch>
      </Body>
      <GlobalStyle />
    </Router>
  );
}

export default App;
