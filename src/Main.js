import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import "./assets/css/style.css";
export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
