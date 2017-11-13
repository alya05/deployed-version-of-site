import React, { Component } from 'react';
import './Bottom-Calculator.css'
import { NavLink } from 'react-router-dom'

class BottomCalculator extends Component {
  render() {
    return (
        <section className="bottom-calculator-section">
          <div className="bottom-calculator-section__inner-container">
              <NavLink to={this.props.url} className="bottom-calculator-section__text">
              <div >
                {this.props.label}
             </div>
              </NavLink>
          </div>
        </section>
    );
  }
}

export default BottomCalculator;
