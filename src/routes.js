import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/DashboardPage';
import Contact from './containers/ContactPage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Route>
);
