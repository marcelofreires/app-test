import React, { Component } from 'react';

import api from '../../services/api';
import moment from 'moment';
import { format as formatCPF } from "gerador-validador-cpf";
import { FiEdit2, FiChevronLeft, FiSave } from "react-icons/fi";

import './styles.scss';

class CustomerBio extends Component {
  state = {
    updateCustomerName: "",
    editMode: false
  }

  handleEditSubmit = async e => {
    e.preventDefault();
    
    await api.put(`/customers/${this.props.customer.id}`, {
      name: this.state.updateCustomerName,
      birthdate: this.props.customer.birthdate,
    });

    this.props.handleModal();
    this.props.showCustomers();
  }

  handleEditInputChange = e => {
    this.setState({
      updateCustomerName: e.target.value
    });
  }

  handleEditModeToggle = () => {
    this.setState({
      updateCustomerName: "",
      editMode: !this.state.editMode
    });
  }

  render() {
    return (
      <article className="customer-bio">
        <figure className="customer-bio-image">
          <img src="https://source.unsplash.com/uDx79AOZ3jM/500x500" alt={this.props.customer.name} />
        </figure>

        <div className="customer-bio-content">
          {this.state.editMode ? (
            <div className="customer-bio-info">
              <form className="form update-customer" onSubmit={this.handleEditSubmit}>
                <div className="customer-bio-edit">
                  <button 
                    onClick={this.handleEditModeToggle}
                    className="icon-button"
                  >
                    <FiChevronLeft size={26} />
                  </button>
                  <button className="icon-button" type="submit">
                    <FiSave size={20} />
                  </button>
                  {/* <button className="button" type="submit">Salvar</button> */}
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder={this.props.customer.name}
                  onChange={this.handleEditInputChange}
                  value={this.state.updateCustomerName}
                  required
                />
                <p className="customer-bio-cpf">{formatCPF(this.props.customer.cpf)}</p>
                <p className="customer-bio-birthdate">{moment(this.props.customer.birthdate).format("DD/MM/YYYY")}</p>
              </form>
            </div>
          ) : (
            <div className="customer-bio-info">
              <div className="customer-bio-edit">
                <button 
                  onClick={this.handleEditModeToggle}
                  className="icon-button"
                >
                  <FiEdit2 size={20} />
                </button>
              </div>
              <h3 className="customer-bio-name">{this.props.customer.name}</h3>
              <p className="customer-bio-cpf">{formatCPF(this.props.customer.cpf)}</p>
              <p className="customer-bio-birthdate">{moment(this.props.customer.birthdate).format("DD/MM/YYYY")}</p>
            </div>
          )}

          <div className="customer-bio-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et quam tempus, gravida ipsum quis, consequat mauris. Quisque tristique quam sed sem egestas, ut porta diam mollis. Nullam quis hendrerit enim. Nunc vestibulum et ex et accumsan. Phasellus pulvinar odio id nisl lobortis, ac lobortis enim vestibulum. Ut id ante sit amet urna egestas venenatis. Proin eget metus ut ex sollicitudin mattis. In hac habitasse platea dictumst. Curabitur efficitur eu eros in ullamcorper. Nunc malesuada ante at ex facilisis, vitae ornare ante luctus. Aenean ut nunc at ligula fermentum imperdiet ullamcorper sit amet urna. Nunc lacinia laoreet facilisis. Sed mattis nulla lectus, eget maximus augue consequat id. Integer sollicitudin nibh nec lorem suscipit, vel tempus.</p>
          </div>
        </div>
      </article>
    );
  }
}

// const CustomerBio = (props) => (
//   <article className="customer-bio">
//     <button 
//       onClick={props.onClickEdit}
//       className="icon-button"
//     >
//       <FiEdit2 size={20} />
//     </button>

//     <figure className="customer-bio-image">
//       <img src="https://source.unsplash.com/uDx79AOZ3jM/500x500" alt={props.customer.name} />
//     </figure>
//     {props.customer.id}
//     <form className="form update-customer" onSubmit={() => props.handleEditSubmit(props.customer.id)}>
//       <input
//         type="text"
//         name="name"
//         className="form-input"
//         placeholder={props.customer.name}
//         onChange={props.handleEditInputChange}
//         value={props.updateCustomerName}
//         required
//       />
//       <p className="customer-cpf">{formatCPF(props.customer.cpf)}</p>
//       <p className="customer-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
//       <button className="button" type="submit">Salvar</button>
//     </form>

//     {props.editMode ? (
//       <form className="form update-customer" onSubmit={() => props.handleEditSubmit(props.customer.id)}>
//         <input
//           type="text"
//           name="name"
//           className="form-input"
//           placeholder={props.customer.name}
//           onChange={props.handleEditInputChange}
//           value={props.updateCustomerName}
//           required
//         />
//         <p className="customer-cpf">{formatCPF(props.customer.cpf)}</p>
//         <p className="customer-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
//         <div className="button" type="submit">Salvar</div>
//       </form>
//     ) : (
//       <div className="customer-bio-info">
//         <h3 className="customer-bio-name">{props.customer.name}</h3>
//         <p className="">{formatCPF(props.customer.cpf)}</p>
//         <p className="customer-bio-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
//       </div>
//     )}
    
//     <button onClick={props.showCustomers} className="button" type="submit">show</button>
    
//     <div className="customer-bio-description">
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et quam tempus, gravida ipsum quis, consequat mauris. Quisque tristique quam sed sem egestas, ut porta diam mollis. Nullam quis hendrerit enim. Nunc vestibulum et ex et accumsan. Phasellus pulvinar odio id nisl lobortis, ac lobortis enim vestibulum. Ut id ante sit amet urna egestas venenatis. Proin eget metus ut ex sollicitudin mattis. In hac habitasse platea dictumst. Curabitur efficitur eu eros in ullamcorper. Nunc malesuada ante at ex facilisis, vitae ornare ante luctus. Aenean ut nunc at ligula fermentum imperdiet ullamcorper sit amet urna. Nunc lacinia laoreet facilisis. Sed mattis nulla lectus, eget maximus augue consequat id. Integer sollicitudin nibh nec lorem suscipit, vel tempus.</p>
//     </div>
//   </article>
// );

export default CustomerBio;
