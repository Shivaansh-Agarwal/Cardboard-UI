import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Introduction,
  Avatar,
  ButtonUtility,
  Alert,
  CardUtility,
  BadgeUtility,
  ListUtility,
  ToastUtility,
  InputFieldUtility,
} from "../../css-components";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Switch>
        <Route path="/app/introduction" component={Introduction} />
        <Route path="/app/avatar" component={Avatar} />
        <Route path="/app/button" component={ButtonUtility} />
        <Route path="/app/alert" component={Alert} />
        <Route path="/app/card" component={CardUtility} />
        <Route path="/app/badge" component={BadgeUtility} />
        <Route path="/app/list" component={ListUtility} />
        <Route path="/app/toast" component={ToastUtility} />
        <Route path="/app/input" component={InputFieldUtility} />
      </Switch>
    </div>
  );
};

export default Main;
