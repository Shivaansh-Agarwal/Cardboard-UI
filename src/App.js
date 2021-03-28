import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { Header, Aside, Main } from "./components/outer-components";

const App = () => {
  return (
    <div className="App">
      <div className="top-segment">
        <Header />
      </div>
      <div className="main-segment">
        <Route>
          <Aside />
          <Main />
        </Route>
      </div>
    </div>
  );
};

export default App;
