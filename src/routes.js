import React, { Component}  from 'react';
import Flat from './Components/Pages/Flat/Flat';
import Agreement from './Components/Pages/Agreement/agreement';
import Terms from './Components/Pages/Terms/terms';
import Calculator from './Components/Calculator/Calculator';
import { Switch, Route } from 'react-router-dom'


let defaultValues = {
  roomCount: 1,
  BathroomCount: 1
};

class Routes extends Component {

  changeStartOptions = (options) =>{
    defaultValues = options;

  };

  render() {
    return (
      <Switch>
        <Route exact path='/'  component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route exact path='/flat' component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route exact path='/cottage' component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route exact path='/order/:type' component={() => <Calculator defaultValues={defaultValues}/>}/>
        <Route exact path='/agreement' component={Agreement}/>
        <Route exact path='/terms' component={Terms}/>
      </Switch>
    )
  }
}


export default Routes;