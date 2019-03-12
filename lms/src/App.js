import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonAppBar from './components/appbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
      </div>
    );
  }
}

export default App;
