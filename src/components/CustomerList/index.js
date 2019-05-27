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
    showModal: false,
    editMode: false,
    updateCustomerName: ""
  }

  componentDidMount() {
    this.showCustomers();
  }
  
  handleEditModeToggle = () => {
    this.setState({ editMode: !this.state.editMode });
  }
 
  handleEditInputChange = e => {
    this.setState({
      updateCustomerName: e.target.value
    });
  }
  
  handleEditSubmit = async (id, e) => {
    e.preventDefault();
    
    await api.patch(`/customers/${id}`, {
      name: this.state.updateCustomerName
    });

    this.setState({ editMode: !this.state.editMode });

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
    // console.log(this.state.updateCustomerName);

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
        
        {this.state.showModal &&
          <div className="modal">
            <div className="modal-wrap">
              <button
                onClick={this.handleModal}
                className="modal-close icon-button"
              >
                <FiXCircle size={28} />
              </button>
              <CustomerBio
                customer={this.state.customer}
                onClickEdit={this.handleEditModeToggle}
                editMode={this.state.editMode}
                handleEditInputChange={this.handleEditInputChange}
                updateCustomerName={this.state.updateCustomerName}
                handleEditSubmit={this.handleEditSubmit}
              />
            </div>
          </div>
        }
      </>
    );
  }
}

export default ClientList;
