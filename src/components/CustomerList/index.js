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
    updateCustomer: {}
  }

  componentDidMount() {
    this.showCustomers();
  }

  handleDelete = async id => {
    await api.delete(`/customers/${id}`);

    this.showCustomers();
  }
  
  handleEdit = async id => {
    this.setState({ editMode: !this.state.editMode });
    console.log(this.state.editMode);
    
    // await api.patch(`/customers/${id}`, {});
  }
  
  showCustomers = async () => {
    const response = await api.get("/customers");
    
    this.setState({ customers: response.data.data});
  }
  
  showCustomer = async id => {
    const response = await api.get(`/customers/${id}`);
    console.log(response.data);
    
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
                onClickEdit={this.handleEdit}
                editMode={this.state.editMode}
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
              <CustomerBio customer={this.state.customer} />
            </div>
          </div>
        }
      </>
    );
  }
}

export default ClientList;
