import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { News } from "./pages";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={News} />
    </Switch>
  );
};

export default Routes;
