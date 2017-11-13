import React, { Component}  from 'react';
import Flat from './Components/Pages/Flat/Flat';
import Cottage from './Components/Pages/Cottage/Cottage';
import Agreement from './Components/Pages/Agreement/agreement';
import Terms from './Components/Pages/Terms/terms';
import Questions from './Components/Pages/Questions/questions';
import OrderPage from './Components/Pages/OrderPage/OrderPage';
import { Switch, Route } from 'react-router-dom'


let defaultValues = {
  roomCount: 1,
  BathroomCount: 1,
  metersCount: 200,
};

let defaultCottageValues = {

};

class Routes extends Component {

  changeStartOptions = (options) =>{
    defaultValues.roomCount = options.roomCount;
    defaultValues.BathroomCount = options.bathroomCount;
  };

  changeStartCottageOptions = (options) => {
    defaultValues.metersCount = options.metersCount
  };

  render() {
    return (
      <Switch>
        <Route exact path='/'  component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route exact path='/flat' component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route exact path='/cottage' component={() =><Cottage changeStartCottageOptions={this.changeStartCottageOptions}/>}/>
        <Route exact path='/order/flat' component={() => <OrderPage isFlat={true} defaultValues={defaultValues}/>}/>
        <Route exact path='/order/cottage' component={() => <OrderPage isFlat={false} defaultValues={defaultValues}/>}/>
        <Route exact path='/agreement' component={Agreement}/>
        <Route exact path='/terms' component={Terms}/>
        <Route exact path='/questions' component={Questions}/>
      </Switch>
    )
  }
}


export default Routes;