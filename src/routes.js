import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import NoMatch from './screens/NoMatch';

export default class Routes extends Component {
  render() {
    return (
      <div className="main-container">
        <Suspense fallback={<div>Loader..</div>}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='*'>
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    )
  }
}