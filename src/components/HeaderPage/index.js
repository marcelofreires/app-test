import React from 'react';

import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi";

import './styles.scss';

const HeaderPage = (props) => (
  <header className="header">
    {props.backLink && (
      <Link
        className="header-action icon-button"
        to={props.backLink}
        title="Voltar"
      >
        <FiArrowLeft />
      </Link>
    )}
    <h1 className="header-title">{props.headerTitle}</h1>
  </header>
);

export default HeaderPage;
