import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import RedirectPage from "./pages/RedirectPage";
import MainGlobalState from "./pages/MainGlobalState";
import MainRedux from "./pages/MainRedux";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={RedirectPage} />
        <Route path="/pages/MainGlobalState" component={MainGlobalState} />
        <Route path="/pages/MainRedux" component={MainRedux} />
      </Switch>
    </Provider>
  );
}

export default App;
