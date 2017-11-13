import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className={this.props.isMenuActive ? "navigation navigation--active" : "navigation"}  >
        <div className="navigation__inner-container">
          <div className="navigation__element">
            <NavLink to={'/flat'}  activeClassName="navigation__element-name_active" className="navigation__element-name ">квартира</NavLink>
          </div>
          <div className="navigation__element">
            <NavLink to={'/cottage'} activeClassName="navigation__element-name_active" className="navigation__element-name">коттедж</NavLink>
          </div>
          <div className="navigation__element navigation__element__question ">
            <NavLink to={'/questions'} activeClassName="navigation__element-name_active" className="navigation__element-name">вопросы</NavLink>
          </div>
          {/*<div className="navigation__element">*/}
            {/*<a className="navigation__element-name" href="#">окна</a>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Navigation;
