import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import ZvyshDescription from '../../Components/ZvyshDescription/ZvyshDescription';
import Navigation from '../../Components/Navigation/Navigation';
import PhoneNumber from '../../Components/PhoneNumber/PhoneNumber';


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false
    }
  }

  changeMenuStatus = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  };

  render() {
    return (
      <header className={'header ' + this.props.specClass}>
        <div className="header__inner-container">
          <Logo logo={this.props.logo} specClass={'header__page'}/>
          <div className="header__container">
            <ZvyshDescription/>
            <Navigation isMenuActive={this.state.isMenuActive}/>
            <PhoneNumber/>
          </div>
          <div className="header__nav">
            <p onClick={this.changeMenuStatus} className={this.state.isMenuActive ? 'active' : '' } id="nav-toggle"><span></span></p>
          </div>
          {/*<SignIn/>*/}
        </div>
      </header>
    );
  }
}

export default Header;
