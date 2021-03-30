import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Introduction,
  AvatarUtility,
  ButtonUtility,
  AlertUtility,
  CardUtility,
  BadgeUtility,
  ListUtility,
  ToastUtility,
  InputFieldUtility,
  ImageUtility,
} from "../../css-components";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Switch>
        <Route path="/app/introduction" component={Introduction} />
        <Route path="/app/avatar" component={AvatarUtility} />
        <Route path="/app/button" component={ButtonUtility} />
        <Route path="/app/alert" component={AlertUtility} />
        <Route path="/app/card" component={CardUtility} />
        <Route path="/app/badge" component={BadgeUtility} />
        <Route path="/app/list" component={ListUtility} />
        <Route path="/app/toast" component={ToastUtility} />
        <Route path="/app/input" component={InputFieldUtility} />
        <Route path="/app/image" component={ImageUtility} />
      </Switch>
    </div>
  );
};

export default Main;
