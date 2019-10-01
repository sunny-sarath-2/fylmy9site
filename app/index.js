import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import Routes from "./routes";
import Footer from "./footer";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={App} />
      </Switch>
    </Router>
  );
};
const App = props => {
  console.log(props);
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
