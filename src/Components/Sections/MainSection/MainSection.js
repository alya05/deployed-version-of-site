import React, { Component } from 'react';
import './MainSection.css';
import Header from '../../../Components/Header/Header';
import Headlines from '../../../Components/Headlines/Headlines';
import CalculatorMini from '../../../Components/CalculatorMini/CalculatorMini';


class MainSection extends Component {
  render() {
    return (
      <section className="main-section">
        <div className="main-section__inner-container">
          <Header logo={this.props.logo} specClass={'header__page'}/>
          <Headlines/>
          <CalculatorMini  mainSectionProps={this.props}/>
        </div>
      </section>
    );
  }
}

export default MainSection;
