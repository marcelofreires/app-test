import React, { Component } from 'react';

import CustomerCard from '../../components/CustomerCard';
import api from '../../services/api';

import './styles.scss';

class ClientList extends Component {
  state = {
    customers: [],
  }

  componentDidMount() {
    this.showCustomer();
  }

  handleDelete = async id => {
    const response = await api.delete(`/customers/${id}`);

    console.log(response);
    
    this.showCustomer();
  }
  
  showCustomer = async () => {
    const response = await api.get("/customers");
    
    this.setState({ customers: response.data.data});
  }

  render() {
    return (
      <ul className="customer-list">
        {this.state.customers.map(customer => (
          <li key={customer.id} className="customer-item">
            <CustomerCard customer={customer} onClick={this.handleDelete} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ClientList;
