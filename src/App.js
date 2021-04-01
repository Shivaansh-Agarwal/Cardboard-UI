import React from "react";
import { Header, Aside, Main } from "./components/outer-components";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="top-segment">
        <Header />
      </div>
      <div className="main-segment">
        <Router>
          <Aside />
          <Main />
        </Router>
      </div>
    </div>
  );
};

export default App;
