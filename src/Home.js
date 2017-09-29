import React, { Component } from 'react';
import App from './App'
import HomeLayout from './components/HomeLayout'
// import ShopAlexa from './components/homePageSections/AlexaSection'
import ProductsSection from './components/homePageSections/ProductsSection'
import { connect } from 'react-redux'
import Router from './Router'
// import axios from 'axios'
class Home extends Component {

    render() {
        return (
            <div>
                <HomeLayout />
                <div className="products-section">
                    <ProductsSection />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    var {
    left_NavBar,
        home_page
  } = state;
    return {
        left_NavBar,
        home_page
    }
}

{/* <ShopAlexa /> 
{/* <HomeLayout /> */ }

export default connect(mapStateToProps)(Home);

