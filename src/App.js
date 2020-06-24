/** @format */

import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CheckerboardPage from "./screens/CheckerboardPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CheckerboardPage} />
      </Switch>
    </div>
  );
}

export default App;
