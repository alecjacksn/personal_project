import React, { Component } from 'react';
import App from './App'
import HomeLayout from './components/HomeLayout'
import ShopAlexa from './components/homePageSections/AlexaSection'
import ProductsSection from './components/homePageSections/ProductsSection'
// import axios from 'axios'
class Home extends Component {

  render() {
    return (
      <div>
        <App />
        <HomeLayout />
        <ProductsSection />
        <ShopAlexa />
      </div>
    );
  }
}


export default Home;