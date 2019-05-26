import React, { Component } from 'react';

import api from '../../services/api';

import './styles.scss';

class AddCustomer extends Component {
  state = {
    name: "",
    cpf: "",
    birthdate: ""
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await api.post("/customers", {
      name: this.state.name,
      cpf: this.state.cpf,
      birthdate: this.state.birthdate
    });

    console.log(response);
    console.log(response.data);
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <div className="add-customer">
      <form className="form-wrap" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label className="form-label">Nome completo</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Digite seu nome"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <label className="form-label">CPF</label>
            <input
              type="text"
              name="cpf"
              className="form-input"
              placeholder="Digite seu CPF"
              value={this.state.cpf}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <label className="form-label">Nascimento</label>
            <input
              type="text"
              name="birthdate"
              className="form-input"
              placeholder="1999-12-31"
              value={this.state.birthdate}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCustomer;
