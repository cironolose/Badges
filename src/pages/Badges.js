import React from 'react';
import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/badge-header.svg';
import {Link} from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from './api';

class Badges extends React.Component{

  state = {
    loading: true,
    error: null,
    data: undefined,
  }

  //el mejor lugar para traer l info de una api es en 
  //componentDidMount()
  componentDidMount(){
    this.fetchData()
  }

  //en primer lugar 
  fetchData = async () =>{
    this.setState({
      loading: true,
      error: null
    });
    //se comienza la llamada a la API
    try{
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch(error){
      this.setState({
        loading: false, 
        error: error
      });
    }
  }

  render(){

    //si loading es cierto...
    if(this.state.loading === true){
      return <PageLoading/>
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>;
    }

    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="image"/>
            </div>
          </div>
          <div className="Badges__container">
            <div className="Badges__buttoss">
              <Link className="btn btn-primary" to="/badges/new">
                New Badge
              </Link>
            </div>
            <div className="Badges__list">
              <div className="Badges__container">
                <BadgesList
                  badges={this.state.data}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges