import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import PropertyCalcContainer from './containers/PropertyCalcContainer';
import MeritCalculator from './components/MeritCalculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path='/merits' render={() => <MeritCalculator />} />
        <Route path='/properties' render={() => <PropertyCalcContainer />} />
      </div>
    );
  }
}

export default App;
