import React from 'react';

import './styles.scss';

const ClientCard = (props) => (
  <article className="customer-card">
    <figure className="customer-avatar">
      <img src="https://source.unsplash.com/uDx79AOZ3jM/100x100" alt={props.customer.name} />
    </figure>
    <div className="customer-info">
      <h3 className="customer-name">{props.customer.name}</h3>
      <p className="customer-cpf">{props.customer.cpf}</p>
      <p className="customer-birthdate">{props.customer.birthdate}</p>
    </div>
    <div className="customer-more">
      <a className="button" href="#asdf">Mais informações</a>
    </div>
  </article>
);

export default ClientCard;
