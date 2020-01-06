import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from './api';

class BadgeNew extends React.Component{
  //la informacion se almacena aqui en state{}
  //y hay que compartirla
  state={
    form:{
      firstName:'',
      lastName:'',
      email:'',
      jobTitle:'',
      twitter:''
    }
  }

  //recibira la info del e con nom y valor
  handleChange = e =>{
    this.setState({
      form:{
        //dejamos caer todos los valores del form
        ... this.state.form,
        //y añadimos o sobreescribimos el que 
        //estaba guardado
        [e.target.name]:e.target.value
      }
    })
  }

  handleSubmit = async e =>{
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    });

    try{
      await api.badges.create(this.state.form);
      this.setState({
        loading: false
      });
    }catch(error){
      this.setState({
        loading:false,
        error: error
      });
    }
  }
  
  render(){
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || 'First name'}
                lastName={this.state.form.lastName || 'Last name'}
                twitter={this.state.form.twitter|| 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'Email'}
                avatarUrl={this.state.form.avatarUrl}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                //obtiene los valores como props
                onChangen ={this.handleChange}
                onSubmit = {this.handleSubmit}
                formValuesn ={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;