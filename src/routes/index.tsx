import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Customer from '../pages/Customer';
import Product from '../pages/Product';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/customer" component={Customer} />
      <Route path="/customers" component={Customers} />
      <Route path="/product" component={Product} />
      <Route path="/products" component={Products} />
      <Route path="/signin" component={Signin} hideNavBar />
      <Route path="*" component={NotFound} hideNavBar />
    </Switch>
  </BrowserRouter>
);

export default Routes;
