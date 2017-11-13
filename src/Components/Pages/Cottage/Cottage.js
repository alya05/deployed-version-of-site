import React, { Component } from 'react';
import './Cottage.css';
import MainSection from '../../../Components/Sections/MainSection/MainSection';
import RelaxSection from '../../../Components/Sections/RelaxSection/RelaxSection';
import TrustSection from '../../../Components/Sections/TrustSection/TrustSection';
import DescriptionSection from '../../../Components/Sections/DescriptionSection/DescriptionSection';
import FAQSection from '../../../Components/Sections/FAQSection/FAQSection';
import ProcessingSection from '../../../Components/Sections/ProcessingSection/ProcessingSection';
import BottomCalculator from '../../../Components/Sections/Bottom-Calculator/Bottom-Calculator';
import logo from '../../../images/main_logo_colorfull.png';
import {CircleLoader} from 'react-spinners';
import Modal from '../../Modal/modal';

import * as PRICES from '../../../constants/price';
import Footer from '../../../Components/Footer/Footer';

class Cottage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metersCount: 200,
      basePrice: PRICES.COTTAGE_SUPPORTIVE_PRICE,
      visible: false,
      isModal: false
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillMount() {
    this.setVisible();
  }

  setVisible = () => {
    setTimeout(() => {
      this.setState({visible: true});
    }, 1000);
  };


  addMeters = () => {
    this.setState({
      metersCount: this.state.metersCount + 10
    });

  };

  removeMeters = () => {
    if (this.state.metersCount === 100) {
      return;
    } else {
      this.setState({
        metersCount: this.state.metersCount -10
      })
    }

  };

  closeModal =() => {
    this.setState({
      isModal: false
    })
  };

  openModal =() => {
    this.setState({
      isModal: true
    })
  };

  countPrice = () => {
    let price = 0;
    price = this.state.basePrice * this.state.metersCount;
    this.props.changeStartCottageOptions({metersCount: this.state.metersCount});
  return price;
  };

  render() {
    const renderModal = this.state.isModal ?
      <Modal closeModal={this.closeModal}/>
      :
      null;
    const price = this.countPrice();
    return (
      <div className="flat">
        <div className={this.state.visible ? 'hide': 'spinner'}>
          <CircleLoader loading={!this.state.visible} color={'#2ebaa7'}/>
        </div>
        <div className={this.state.visible ? 'container--visible': 'container'}>
          <MainSection logo={logo}
                       metersCount={this.state.metersCount}
                       addMeters={this.addMeters}
                       removeMeters={this.removeMeters}
                       type="cottage"
                       price={price}/>
          {renderModal}
          <RelaxSection isCottage={true}/>
          <TrustSection/>
          <DescriptionSection openModal={this.openModal}/>
          <FAQSection/>
          <ProcessingSection/>
          <BottomCalculator label='Уборка коттеджа от 80р' price={price} url="/order/cottage"/>
          <Footer logo={logo}/>
          </div>
      </div>
    );
  }
}

export default Cottage;
