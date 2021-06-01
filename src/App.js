import React, { Component } from 'react';
import './App.css';
 import TopNav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />

        <div id="loader"></div>
      </div>
    
    );
  }
}
export default App;
