import React, { Component } from 'react';

import moment from 'moment';
import VMasker from 'vanilla-masker';
import { format as formatCPF } from "gerador-validador-cpf";
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
    
    await api.post("/customers", {
      name: this.state.name,
      cpf: formatCPF(this.state.cpf, "digits"),
      birthdate: moment(this.state.birthdate, "DDMMYYYY").format("YYYY-MM-DD")
    });

    this.handleInputClean();
  }

  handleInputClean = () => {
    this.setState({
      name: "",
      cpf: "",
      birthdate: ""
    });
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
        <form className="form form-add-customer" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label className="form-label">Nome completo</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Digite seu nome"
              value={this.state.name}
              onChange={this.handleInputChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="form-item">
            <label className="form-label">CPF</label>
            <input
              type="text"
              name="cpf"
              maxLength="14"
              className="form-input"
              placeholder="Digite seu CPF"
              value={VMasker.toPattern(this.state.cpf, "999.999.999-99")}
              onChange={this.handleInputChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="form-item">
            <label className="form-label">Nascimento</label>
            <input
              type="text"
              name="birthdate"
              maxLength="10"
              className="form-input"
              placeholder="31/12/1989"
              value={VMasker.toPattern(this.state.birthdate, "99/99/9999")}
              onChange={this.handleInputChange}
              autoComplete="off"
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
