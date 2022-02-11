import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Delivery from '../pages/Delivery';

/**
 * This component creates the routes for dashboard and delivery pages
 */

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/delivery" exact component={Delivery} />
    </Router>
  );
}
export default Routes;
