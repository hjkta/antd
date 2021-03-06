import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Profile,
  Dashboard,
  DashboardCopy,
  Report,
  PersonalSales,
  PersonalSales2,
  PersonalSales3,
} from "pages";

import ruRU from "antd/es/locale/ru_RU";
import { ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

function App() {
  return (
    <ConfigProvider locale={ruRU}>
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
          <Route path="/personal_sales" exact={true}>
            <PersonalSales />
          </Route>
          <Route path="/personal_sales2" exact={true}>
            <PersonalSales2 />
          </Route>
          <Route path="/personal_sales3" exact={true}>
            <PersonalSales3 />
          </Route>
          <Route path="/dashboard_copy" exact={true}>
            <DashboardCopy />
          </Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default App;
