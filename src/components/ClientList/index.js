import React, { Component } from 'react';

import './styles.scss';
import api from '../../services/api';

class ClientList extends Component {
  state = {
    clients: [],
  }

  componentDidMount() {
    this.showClients();
  }

  showClients = async () => {
    const response = await api.get(`/customers`);

    this.setState({ clients: response.data.data});
  }

  render() {
    return (
      <ul className="client-list">
        {this.state.clients.map(client => (
          <li key={client.id} className="client-item">
            <div className="client-name">{client.name}</div>
            <div className="client-cpf">{client.cpf}</div>
            <div className="client-birthdate">{client.birthdate}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ClientList;
