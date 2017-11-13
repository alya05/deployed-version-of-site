import React, { Component } from 'react';

import Calculator from '../../Calculator/Calculator';
import CalculatorCottage from '../../Calculator/CalculatorCottage';

class OrderPage extends Component {
  constructor(props){
    super(props);
   this.state = {
      isFlat: this.props.isFlat,
    }
  };

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const calculator = this.state.isFlat ?
      <Calculator defaultValues={this.props.defaultValues}/>
      :
      <CalculatorCottage defaultValues={this.props.defaultValues}/>

    return (
      <div className="OrderPage">
        {calculator}
      </div>
    );
  }
}

export default OrderPage;
