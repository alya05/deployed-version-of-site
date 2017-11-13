import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in__inner-container">
          <NavLink className="sign-in__text" to={'/questions'}>Вопросы и ответы</NavLink>
        </div>
      </div>
    );
  }
}

export default SignIn;
