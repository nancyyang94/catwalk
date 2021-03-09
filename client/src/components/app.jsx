/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppComponent from './appComponent';

const App = () => (
  <Router>
    <Switch>
      <Route path="/product/:product_id" component={AppComponent} />
      <Route exact path="/" component={AppComponent} />
    </Switch>
  </Router>
);

export default App;
