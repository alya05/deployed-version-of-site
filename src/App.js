import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './routes';

class App extends Component {

  handleScroll = (e) => {

      if (document.documentElement.clientWidth < 10) {
        return;
      }
      const orderInfo = document.getElementById('orderInfo');

      if (orderInfo) {
        const headerCalculator = document.getElementById('calculator-header');
        const orderInfoContainer = document.getElementById('orderInfoContainer');
        if (window.pageYOffset > headerCalculator.offsetHeight + 40) {
          orderInfo.classList.add('calculator__order-info--fixed');
          orderInfo.style.width = orderInfoContainer.offsetWidth + 'px';

        } else {
          orderInfo.classList.remove('calculator__order-info--fixed');
        }
      }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    return (
      <BrowserRouter>
        <div onScroll={this.handleScroll} className="App">
          <Routes/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


