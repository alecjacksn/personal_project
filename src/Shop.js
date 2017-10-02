import React, { Component } from 'react';
import './App.css';
import Amazon from './components/amazon_test'
import LeftSideBar from './components/navigation/leftSideBar'
import Products from './components/Products'
import { connect } from 'react-redux'
import ProductsSection from './components/homePageSections/ProductsSection'
import {toggleLeftNavBar} from './ducks/reducer'
// import aws from 'aws-lib';
// import Login from './components/Login'
// import Prompt from './components/Prompt'

// import axios from 'axios'

// const amzn_assoc_placement = "adunit0";
// const amzn_assoc_tracking_id = "personalproje-20";
// const amzn_assoc_ad_mode = "manual";
// const amzn_assoc_ad_type = "smart";
// const amzn_assoc_marketplace = "amazon";
// const amzn_assoc_region = "US";
// const amzn_assoc_title = "My Amazon Picks";
// const amzn_assoc_asins = "B01HJKBCV4,B00N2ZDXW2,B00CPTD5AQ,B019JSE7PC";
// const amzn_assoc_linkid = "5905cf478d324d0b506921fdfcc9399c";
// const amzn_assoc_search_bar = "true";








class Shop extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            rightAd: true
        }
    }


    render() {
        return (
            <div>
            
                <div className="all-products">
                    <div className="all-products-div">
                    <div className="gap-between-nav">
                        </div>
                        
                       { this.props.left_NavBar ? <div className="side-bars">
                            <div className="left-test">
                                <LeftSideBar />
                                
                            </div>
                            <div className="listed-products">
                                <div className="listed-products-div">
                                    <Products />
                                </div>
                            </div>
                            {this.state.rightAd ?<div className="side-bar-right">
                                
                            <iframe className="right-bar-ad" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=amzn_smp_tkbt_tpr_0917&banner=01NYTVB67JFBC283K2G2&f=ifr&linkID=a10d3dd0f0d0627e45739728767c16fa&t=personalproje-20&tracking_id=personalproje-20" ></iframe>
              </div> : null}
                        </div>
                        : <div className="show-products-shop-section"><ProductsSection/></div> }
{/* <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script> */}

                        
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, {toggleLeftNavBar})(Shop);