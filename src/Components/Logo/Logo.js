import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo__inner-container">
            <NavLink to={'/flat'}>
                <img className="logo__image" src={this.props.logo} alt="Логотип сервиса Звыш"/>
            </NavLink>
        </div>
      </div>
    );
  }
}

export default Logo;
