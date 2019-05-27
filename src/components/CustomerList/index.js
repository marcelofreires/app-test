import React, { Component } from 'react';

import api from '../../services/api';
import { FiXCircle } from "react-icons/fi";

import CustomerCard from '../../components/CustomerCard';
import CustomerBio from '../CustomerBio';

import './styles.scss';

class ClientList extends Component {
  state = {
    customers: [],
    customer: {},
    showModal: false
  }

  componentDidMount() {
    this.showCustomers();
  }

  handleDelete = async id => {
    await api.delete(`/customers/${id}`);

    this.showCustomers();
  }
  
  showCustomers = async () => {
    console.log("show");
    
    const response = await api.get("/customers");
    
    this.setState({ customers: response.data.data});
  }
  
  showCustomer = async id => {
    const response = await api.get(`/customers/${id}`);
    
    this.setState({
      customer: response.data,
    });
    
    this.handleModal();
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }
  
  render() {
    return (
      <>
        <ul className="customer-list">
          {this.state.customers.map(customer => (
            <li key={customer.id} className="customer-item">
              <CustomerCard
                customer={customer}
                onClickDelete={this.handleDelete}
                onClickMoreInfo={this.showCustomer}
              />
            </li>
          ))}
        </ul>
        
        <div className={`modal ${this.state.showModal ? "active" : ""}`}>
          <div className="modal-wrap">
            <button
              onClick={this.handleModal}
              className="modal-close icon-button"
            >
              <FiXCircle />
            </button>
            <CustomerBio
              customer={this.state.customer}
              showCustomers={this.showCustomers}
              handleModal={this.handleModal}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ClientList;
