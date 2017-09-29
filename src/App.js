import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import Amazon from './components/amazon_test'
// import LeftSideBar from './components/navigation/leftSideBar'
// import Products from './components/Products'
import { connect } from 'react-redux'
import Home from './Home'
// import aws from 'aws-lib';
// import Login from './components/Login'
// import Prompt from './components/Prompt'

// import axios from 'axios'
class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header-test">
          <Amazon />
        </div>
        {Router}
      </div>
    );
  }
}


// function mapStateToProps(state) {
//   var {
//   left_NavBar
// } = state;
//   return {
//     left_NavBar
//   }
// }


export default App;