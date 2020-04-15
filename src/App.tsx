import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile, Dashboard, Report, PersonalSales } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/profile" exact={true}>
          <Profile />
        </Route>
        <Route path="/report" exact={true}>
          <Report />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
