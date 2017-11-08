import React, { Component } from 'react';
import './Bottom-Calculator.css'
import { NavLink } from 'react-router-dom'

class BottomCalculator extends Component {
  render() {
    return (
        <section className="bottom-calculator-section">
          <div className="bottom-calculator-section__inner-container">
              <NavLink to={'order'} className="bottom-calculator-section__text">
              <div >
                 Уборка квартиры от {this.props.price} рублей
             </div>
              </NavLink>
          </div>
        </section>
    );
  }
}

export default BottomCalculator;
