import React from 'react';

import HeaderPage from '../../components/HeaderPage';
import CustomerList from '../../components/CustomerList';

const PageCustomers = () => (
  <>
    <HeaderPage backLink="/" headerTitle="Clientes" />
    <div className="page">
      <div className="container">
        <CustomerList />
      </div>
    </div>
  </>
);

export default PageCustomers;
