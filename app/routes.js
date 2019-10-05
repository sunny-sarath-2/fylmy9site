import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { News, Inner } from "./pages";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/:id" component={Inner} />
      <Route exact path="*" component={News} />
    </Switch>
  );
};

export default Routes;
