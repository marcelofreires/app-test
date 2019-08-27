import React from 'react';
import { Link } from "react-router-dom"

import HeaderPage from 'components/HeaderPage';
import AddCustomer from 'components/AddCustomer';

import './styles.scss';

const CreateCustomer = () => (
  <>
    <HeaderPage headerTitle="Cadastro" />
    <div className="page page-center">
      <div className="create-customer-wrap">
        <main className="create-customer-box">
          <p className="create-customer-intro">Cadastre um cliente</p>
          <AddCustomer />
        </main>
        <Link className="button" to="/clientes">Lista de clientes</Link>
      </div>
    </div>
  </>
);

export default CreateCustomer;
