import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Delivery from '../pages/Delivery';
import Order from '../pages/Order';
import OrderPlaced from '../pages/OrderPlaced';
import Checkout from '../pages/Checkout';

/**
 * This component creates the routes for dashboard and delivery pages
 */

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/delivery" exact component={Delivery} />
      <Route path="/delivery/order" exact component={Order} />
      <Route path="/delivery/order/verify" exact component={Checkout} />
      <Route path="/delivery/order/successfull" exact component={OrderPlaced} />
    </Router>
  );
}
export default Routes;
