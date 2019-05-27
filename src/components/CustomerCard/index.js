import React from 'react';

import moment from 'moment';
import { format as formatCPF } from "gerador-validador-cpf";
import { FiTrash } from "react-icons/fi";

import './styles.scss';

const CustomerCard = (props) => (
  <article className="customer-card">
    <button 
      onClick={() => props.onClickDelete(props.customer.id)}
      className="icon-button-danger customer-action left"
      title="Excluir cliente"
    >
      <FiTrash />
    </button>
    
    <figure className="customer-avatar">
      <img src="https://source.unsplash.com/uDx79AOZ3jM/100x100" alt={props.customer.name} />
    </figure>
    
    <div className="customer-info">
      <h3 className="customer-name">{props.customer.name}</h3>
      <p className="customer-cpf">{formatCPF(props.customer.cpf)}</p>
      <p className="customer-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
    </div>
    
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

export default CustomerCard;
