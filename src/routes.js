import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateCustomer from './pages/CreateCustomer';
import PageCustomers from './pages/PageCustomers';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact  component={CreateCustomer} />
      <Route path="/clientes" component={PageCustomers} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
