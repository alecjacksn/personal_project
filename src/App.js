import React, { Component } from 'react';
import './App.css';
import Router from './Router'
// import aws from 'aws-lib';
// import Login from './components/Login'
// import Prompt from './components/Prompt'

// import axios from 'axios'
class App extends Component {
  constructor(){
    super();

    this.state = {
      books: []
    }
  }

  render() {
    return (
      <div className="App">
        {Router}
      </div>
    );
  }
}

export default App;
