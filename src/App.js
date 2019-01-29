import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Routes/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
