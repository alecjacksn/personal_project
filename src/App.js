import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import Amazon from './components/amazon_test'
import LeftSideBar from './components/navigation/leftSideBar'
import Products from './components/Products'
import { connect } from 'react-redux'
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
        <div className="all-products">
          <div className="all-products-div">
            <div className="side-bars">
              {this.props.left_NavBar ?
                <div className="left-test">
                  <LeftSideBar />
                </div>
                : null}
              <div className="listed-products">
                <div className="show-search-results">
                  <Products />
                  {Router}
                </div>
              </div>
              <div className="side-bar-right-none">
                ADDS HERE
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  var {
  left_NavBar
} = state;
  return {
    left_NavBar
  }
}


export default connect(mapStateToProps)(App);