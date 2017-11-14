import React, { Component } from 'react';
import './Flat.css';
import MainSection from '../../../Components/Sections/MainSection/MainSection';
import RelaxSection from '../../../Components/Sections/RelaxSection/RelaxSection';
import TrustSection from '../../../Components/Sections/TrustSection/TrustSection';
import FeedbackSection from '../../../Components/Sections/FeedbackSection/FeedbackSection';
import DescriptionSection from '../../../Components/Sections/DescriptionSection/DescriptionSection';
import FAQSection from '../../../Components/Sections/FAQSection/FAQSection';
import ProcessingSection from '../../../Components/Sections/ProcessingSection/ProcessingSection';
import BottomCalculator from '../../../Components/Sections/Bottom-Calculator/Bottom-Calculator';
import logo from '../../../images/main_logo_colorfull.png';
import {CircleLoader} from 'react-spinners';
import Modal from '../../Modal/modal';

import * as PRICES from '../../../constants/price';
import Footer from '../../../Components/Footer/Footer';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroomCount: 1,
      roomCount: 1,
      price: PRICES.BASE_PRICE,
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


  addRoom = () => {
    if (this.state.roomCount === 5) {
      return;
    }
    this.setState({
      roomCount: ++this.state.roomCount
    });

  };

  removeRoom = () => {
    if (this.state.roomCount === 1) {
      return;
    } else {
      this.setState({
        roomCount: --this.state.roomCount
      })
    }

  };

  addBathRoom = () => {
    if (this.state.bathroomCount === 5) {
      return;
    }
    this.setState({
      bathroomCount: ++this.state.bathroomCount
    });
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

  removeBathRoom = () => {
    if (this.state.bathroomCount === 1) {
      return;
    } else {
      this.setState({
        bathroomCount: --this.state.bathroomCount
      })
    }
  };

  countPrice = () => {
    let price = 0;
    price += PRICES.BASE_PRICE
      + (this.state.roomCount-1)*PRICES.ROOM_PRICE
      + (this.state.bathroomCount-1)*PRICES.BATHROOM_PRICE;
    this.props.changeStartOptions({roomCount: this.state.roomCount,bathroomCount: this.state.bathroomCount});
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
          <MainSection addRoom={this.addRoom}
                       addBathRoom={this.addBathRoom}
                       removeRoom={this.removeRoom}
                       logo={logo}
                       removeBathRoom={this.removeBathRoom}
                       roomCount={this.state.roomCount}
                       type="flat"
                       bathroomCount={this.state.bathroomCount}
                       price={price}/>
          {renderModal}
          <RelaxSection/>
          <TrustSection/>
          <DescriptionSection openModal={this.openModal}/>
          <FAQSection/>
          <ProcessingSection/>
          <FeedbackSection/>
          <BottomCalculator label={'Уборка квартиры от ' + price + 'р.'} url="/order/flat"/>
          <Footer logo={logo}/>
          </div>
      </div>
    );
  }
}

export default Flat;
