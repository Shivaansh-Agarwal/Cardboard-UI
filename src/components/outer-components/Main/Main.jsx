import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Introduction,
  AvatarUtility,
  ButtonUtility,
  AlertUtility,
  CardUtility,
  BadgeUtility,
  GridUtility,
  ToastUtility,
  InputFieldUtility,
  ImageUtility,
  ListUtility,
  NavigationUtility,
} from "../../css-components";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Switch>
        <Route path="/docs/introduction" component={Introduction} />
        <Route path="/docs/avatar" component={AvatarUtility} />
        <Route path="/docs/button" component={ButtonUtility} />
        <Route path="/docs/alert" component={AlertUtility} />
        <Route path="/docs/card" component={CardUtility} />
        <Route path="/docs/badge" component={BadgeUtility} />
        <Route path="/docs/grid" component={GridUtility} />
        <Route path="/docs/toast" component={ToastUtility} />
        <Route path="/docs/input" component={InputFieldUtility} />
        <Route path="/docs/image" component={ImageUtility} />
        <Route path="/docs/list" component={ListUtility} />
        <Route path="/docs/navigation" component={NavigationUtility} />
      </Switch>
    </div>
  );
};

export default Main;
