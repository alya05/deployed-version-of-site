import React, { Component } from 'react';
import './MainSection.css';
import Header from '../../../Components/Header/Header';
import Headlines from '../../../Components/Headlines/Headlines';
import CalculatorMini from '../../../Components/CalculatorMini/CalculatorMini';
import CalculatorMiniCottage from '../../../Components/CalculatorMini/CalculatorMiniCottage';

class MainSection extends Component {
  render() {

    const calculatorMini = this.props.type === 'flat' ?
      <CalculatorMini mainSectionProps={this.props}/>
      :
      <CalculatorMiniCottage mainSectionProps={this.props} />;
    return (
      <section className="main-section">
        <div className="main-section__inner-container">
          <Header logo={this.props.logo} specClass={'header__page'}/>
          <Headlines/>
          {calculatorMini}
        </div>
      </section>
    );
  }
}

export default MainSection;
