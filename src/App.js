import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import Amazon from './components/amazon_test'
import LeftSideBar from './components/navigation/leftSideBar'
// import aws from 'aws-lib';
// import Login from './components/Login'
// import Prompt from './components/Prompt'

// import axios from 'axios'
class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    }
  }

  render() {
    return (
      <div className="App">
        <Amazon />

        <div className="all-products">
          <div className="all-products-div">
            <div className="side-bars">
              <LeftSideBar />
              <div className="listed-products">
                <div className="show-search-results">
                 {Router}
                 
                </div>
              </div>
              <div className="side-bar-right-hide">
                {/* ADDS HERE */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
