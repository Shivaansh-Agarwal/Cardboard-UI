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
} from "../../css-components";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/avatar" component={Avatar} />
        <Route path="/button" component={ButtonUtility} />
        <Route path="/alert" component={Alert} />
        <Route path="/card" component={CardUtility} />
        <Route path="/badge" component={BadgeUtility} />
        <Route path="/list" component={ListUtility} />
        <Route path="/toast" component={ToastUtility} />
      </Switch>
    </div>
  );
};

export default Main;
