import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import RedirectPage from "./pages/RedirectPage";
import MainGlobalState from "./pages/MainGlobalState";
import MainRedux from "./pages/MainRedux";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={RedirectPage} />
      <Route path="/pages/MainGlobalState" component={MainGlobalState} />
      <Route path="/pages/MainRedux" component={MainRedux} />
    </Switch>
  );
}

export default App;
