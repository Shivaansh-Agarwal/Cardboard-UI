import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./components/css-components/Toast/toast-context.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/outer-components";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/app" component={App} />
        </Switch>
      </Router>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
