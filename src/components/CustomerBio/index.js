import React from 'react';

import moment from 'moment';
import { format as formatCPF } from "gerador-validador-cpf";

import './styles.scss';

const CustomerBio = (props) => (
  <article className="customer-bio">
    <figure className="customer-bio-image">
      <img src="https://source.unsplash.com/uDx79AOZ3jM/500x500" alt={props.customer.name} />
    </figure>
    <div className="customer-bio-info">
      <h3 className="customer-bio-name">{props.customer.name}</h3>
      <p className="">{formatCPF(props.customer.cpf)}</p>
      <p className="customer-bio-birthdate">{moment(props.customer.birthdate).format("DD/MM/YYYY")}</p>
    </div>
    <div className="customer-bio-description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et quam tempus, gravida ipsum quis, consequat mauris. Quisque tristique quam sed sem egestas, ut porta diam mollis. Nullam quis hendrerit enim. Nunc vestibulum et ex et accumsan. Phasellus pulvinar odio id nisl lobortis, ac lobortis enim vestibulum. Ut id ante sit amet urna egestas venenatis. Proin eget metus ut ex sollicitudin mattis. In hac habitasse platea dictumst. Curabitur efficitur eu eros in ullamcorper. Nunc malesuada ante at ex facilisis, vitae ornare ante luctus. Aenean ut nunc at ligula fermentum imperdiet ullamcorper sit amet urna. Nunc lacinia laoreet facilisis. Sed mattis nulla lectus, eget maximus augue consequat id. Integer sollicitudin nibh nec lorem suscipit, vel tempus.</p>
    </div>
  </article>
);

export default CustomerBio;
