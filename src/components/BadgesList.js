import React from 'react'
import { Link } from 'react-router-dom';

class BadgesList extends React.Component{
  render(){
    if(this.props.badges.lenght === 0){
      return(
        <div>
          <h3>No encontramos ningun Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crear un Badge
          </Link>
        </div>
      );
    }
    return(
      <div>
        <ul className="list-unstyled row">
          {this.props.badges.map(badge => {
            return(
              <li key={badge.id} className="m-2 border border-success">
                <div className="row">
                  <div className="col-4">
                    <img src={badge.avatarUrl}/>
                  </div>
                  <div className="col-8">
                    <h1>{badge.firstName} {badge.lastName}</h1>
                    <strong>{badge.jobTitle}</strong>
                    <p>{badge.twitter}</p>
                    <p>{badge.email}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList