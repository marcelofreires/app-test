import React, { Component } from 'react';

import api from 'services/api';
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
          <img src="https://source.unsplash.com/uDx79AOZ3jM/600x600" alt={this.props.customer.name} />
        </figure>

        <div className="customer-bio-content">
          {this.state.editMode ? (
            <div className="customer-bio-info">
              <form className="form update-customer" onSubmit={this.handleEditSubmit}>
                <div className="customer-bio-edit">
                  <button 
                    onClick={this.handleEditModeToggle}
                    className="icon-button icon-button-back"
                    title="Cancelar alteração"
                  >
                    <FiChevronLeft />
                  </button>
                  <button className="icon-button" type="submit" title="Salvar alteração">
                    <FiSave />
                  </button>
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder={this.props.customer.name}
                  onChange={this.handleEditInputChange}
                  value={this.state.updateCustomerName}
                  autoComplete="off"
                  autoFocus
                  required
                />
                <p className="customer-bio-label">
                  <span>{formatCPF(this.props.customer.cpf)}</span>
                  <span>{moment(this.props.customer.birthdate).format("DD/MM/YYYY")}</span>
                </p>
              </form>
            </div>
          ) : (
            <div className="customer-bio-info">
              <div className="customer-bio-edit">
                <button 
                  onClick={this.handleEditModeToggle}
                  className="icon-button"
                  title="Editar"
                >
                  <FiEdit2 />
                </button>
              </div>
              <h3 className="customer-bio-name">{this.props.customer.name}</h3>
              <p className="customer-bio-label">
                  <span>{formatCPF(this.props.customer.cpf)}</span>
                  <span>{moment(this.props.customer.birthdate).format("DD/MM/YYYY")}</span>
                </p>
            </div>
          )}

          <div className="customer-bio-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et quam tempus, gravida ipsum quis, consequat mauris. Quisque tristique quam sed sem egestas, ut porta diam mollis. Nullam quis hendrerit enim. Nunc vestibulum et ex et accumsan. Phasellus pulvinar odio id nisl lobortis, ac lobortis enim vestibulum. Ut id ante sit amet urna egestas venenatis. Proin eget metus ut ex sollicitudin mattis. In hac habitasse platea dictumst. Curabitur efficitur eu eros in ullamcorper. Nunc malesuada ante at ex facilisis, vitae ornare ante luctus. Aenean ut nunc at ligula fermentum imperdiet ullamcorper sit amet urna. Nunc lacinia laoreet facilisis. Sed mattis nulla lectus, eget maximus augue consequat id. Integer sollicitudin nibh nec lorem suscipit, vel tempus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam vitae ipsa tempore eius non magni dignissimos porro placeat assumenda molestiae voluptatibus laudantium, voluptate reiciendis, cumque veniam eligendi libero accusamus. Inventore voluptatibus veniam eligendi sunt harum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque accusantium a mollitia, iure ab ipsam amet officiis ipsum nulla sunt consectetur ut? Asperiores distinctio excepturi vero ex eligendi iste, ut dicta explicabo alias blanditiis reiciendis laudantium fuga commodi itaque eaque, ad incidunt a magni voluptate quas laboriosam delectus amet. Placeat quia veniam ad, esse nesciunt harum illo ratione? Error vero veniam eaque in eligendi necessitatibus deserunt ratione tempora culpa accusamus quisquam ducimus inventore consequuntur tempore placeat tenetur labore corporis, dolor totam, ex, alias voluptatibus. Voluptas est aliquid suscipit. Dolore minima qui sunt alias dolorum quaerat repudiandae officia iusto numquam, reiciendis odit fuga maiores, quod, optio nam dolores. Eveniet provident necessitatibus excepturi, dolor exercitationem non ea sunt repudiandae, quasi, quo repellendus ad soluta distinctio officia? Quia doloremque quasi perspiciatis ut labore odio soluta provident nam! Quis necessitatibus sunt doloribus debitis, dolore magni unde repellat tempora, optio eos minus provident nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta cupiditate aliquam eligendi odio incidunt eius praesentium hic voluptatibus corporis, maxime explicabo officia, beatae harum libero dolore quia? Nobis necessitatibus non iste reiciendis, ullam porro cumque fuga, praesentium dolor voluptate, nam eligendi sint veritatis? Illum, voluptatum consectetur. Rerum modi impedit delectus obcaecati suscipit totam repellat, nostrum placeat optio, magni fugiat sunt? Laborum, ut? Dicta facere deleniti impedit consequatur pariatur culpa nam iure dolore quaerat cumque, recusandae totam incidunt. Voluptatem eligendi id sequi perspiciatis dolore consequatur dignissimos ipsam cupiditate earum, qui quibusdam corrupti, excepturi aliquam ut?</p>
          </div>
        </div>
      </article>
    );
  }
}

export default CustomerBio;
