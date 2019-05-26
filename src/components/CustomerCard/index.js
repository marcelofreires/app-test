import React from 'react';

import moment from 'moment';
import { format as formatCPF } from "gerador-validador-cpf";
import { FiTrash } from "react-icons/fi";


import './styles.scss';

const ClientCard = (props) => (
  <article className="customer-card">
    <button 
      onClick={() => props.onClick(props.customer.id)}
      className="icon-button-danger customer-action left"
    >
      <FiTrash size={20} />
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
      <button className="button">Mais informações</button>
    </div>
  </article>
);

export default ClientCard;
