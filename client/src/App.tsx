import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage";
import Courses from "pages/Courses/Courses";
import PlayData from "pages/PlayData/PlayData";

const App = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/courses">
        <Courses />
      </Route>
      <Route exact path="/play-data">
        <PlayData />
      </Route>
    </Switch>
  </Router>
);

export default App;
