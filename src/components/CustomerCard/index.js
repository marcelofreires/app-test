import React from 'react';

import moment from 'moment';
import { format as formatCPF } from "gerador-validador-cpf";
import { FiTrash, FiEdit2 } from "react-icons/fi";

import './styles.scss';

const ClientCard = (props) => (
  <article className="customer-card">
    <button 
      onClick={() => props.onClickDelete(props.customer.id)}
      className="icon-button-danger customer-action left"
    >
      <FiTrash size={20} />
    </button>
    
    <button 
      onClick={() => props.onClickEdit(props.customer.id)}
      className="icon-button customer-action right"
    >
      <FiEdit2 size={20} />
    </button>

    <figure className="customer-avatar">
      <img src="https://source.unsplash.com/uDx79AOZ3jM/100x100" alt={props.customer.name} />
    </figure>
    
    {props.editMode ? (
      <form className="form update-customer">
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder={props.customer.name}
          required
        />
        <p className="customer-cpf">{formatCPF(props.customer.cpf)}</p>
        <p className="customer-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
      </form>
    ) : (
      <div className="customer-info">
        <h3 className="customer-name">{props.customer.name}</h3>
        <p className="customer-cpf">{formatCPF(props.customer.cpf)}</p>
        <p className="customer-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
      </div>
    )}
    <div className="customer-more">
      <button
        onClick={() => props.onClickMoreInfo(props.customer.id)}
        className="button"
      >
        Mais informações
      </button>
    </div>
  </article>
);

export default ClientCard;
