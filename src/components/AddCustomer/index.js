import React, { Component } from 'react';

import moment from 'moment';
// import { format as formatCPF } from "gerador-validador-cpf";
import api from '../../services/api';

import './styles.scss';

class AddCustomer extends Component {
  state = {
    name: "",
    cpf: "",
    birthdate: ""
  }

  // validateDate = () => {
  //   console.log(this.state.birthdate);
  //   console.log(moment(this.state.birthdate, "DDMMYYYY").format("YYYY-MM-DD"))
  // }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await api.post("/customers", {
      name: this.state.name,
      cpf: this.state.cpf,
      birthdate: moment(this.state.birthdate, "DDMMYYYY").format("YYYY-MM-DD")
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
    console.log(this.state);
    
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
              maxLength="14"
              className="form-input"
              placeholder="Digite seu CPF"
              value={this.state.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")}
              onChange={this.handleInputChange}
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
              value={this.state.birthdate.replace(/(\d{2})(\d{2})(\d{4})/g,"$1/$2/$3")}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </form>
        {/* <button onClick={this.validateDate} className="button">Validar data</button> */}
      </div>
    );
  }
}

export default AddCustomer;
