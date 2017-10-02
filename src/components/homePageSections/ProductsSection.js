import React, { Component } from 'react';
import Slider from './homepage slider/HomepageImageSlider'
import LightBulb from '../../pictures/LightBulb Image1.jpg'
import LightSwitch from '../../pictures/LightSwitchImage.jpg'
import Outlet from '../../pictures/outlet image.jpg'
import Thermostat from '../../pictures/thermostat image.jpg'
import SmartSpeaker from '../../pictures/Smart Speaker Image.jpg'
import Alexa from '../../pictures/echo.png'
import google from '../../pictures/google_logo.png'
import homekit from '../../pictures/homepod-standing-black.jpg'
import { connect } from 'react-redux'
import {
    showLights,
    showLightSwitches,
    showAllProducts,
    showOutlets,
    showThermostats,
    toggleLeftNavBar,
    showSmartSpeakers
} from '../../ducks/reducer.js'

class ProductsSection extends Component {

    clickedType(reducerFunction) {
        this.props.toggleLeftNavBar(true)
        reducerFunction(true)

    }

    render() {
        return (
            <div>
                <div className="shop-by">
                    <div>
                <h1>SHOP BY</h1>
                </div>
                </div>
            <div className="products-main">
                <div className="left-bar-div">
                <iframe className="shop-left-bar" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=amazonprimestudent&banner=1K40MY6CZQSVRR426682&f=ifr&linkID=da6db1a687ccfb719a44717c787892c0&t=personalproje-20&tracking_id=personalproje-20"></iframe>
                </div>
                <div className="products-container">
            
                    <div className="product-type-box all-box" onClick={() => this.clickedType(this.props.showAllProducts)}>
                        <h2>Shop All</h2>
                        {/* <div className="underline-divider"></div> */}
                    </div>
                    <div className="product-type-box" onClick={() => this.clickedType(this.props.showLights)}>
                        <h3>Lights</h3>
                        <div className="underline-divider"></div>
                        <img className="display-lightbulb-image" src='https://images-na.ssl-images-amazon.com/images/I/31OYCNo0BGL.jpg' alt="" />
                    </div>
                    <div className="product-type-box" onClick={() => this.clickedType(this.props.showLightSwitches)}>
                        <h3>Light Switches</h3>
                        <div className="underline-divider"></div>
                        <img className="display-lightbulb-image" src={LightSwitch} alt="" />
                    </div>
                    <div className="product-type-box" onClick={() => this.clickedType(this.props.showOutlets)}>
                        <h3>Outlets </h3>
                        <div className="underline-divider"></div>
                        <img className="display-lightbulb-image" src={Outlet} alt="" />
                    </div>
                    <div className="product-type-box" onClick={() => this.clickedType(this.props.showThermostats)}>
                        <h3>Thermostats </h3>
                        <div className="underline-divider"></div>
                        <img className="display-lightbulb-image" src={Thermostat} alt="" />
                    </div>
                    <div className="product-type-box" onClick={() => this.clickedType(this.props.showSmartSpeakers)}>
                        <h3>Smart Speakers </h3>
                        <div className="underline-divider"></div>
                        <img className="display-lightbulb-image" src={SmartSpeaker} alt="" />
                    </div>
                    <div className="product-type-box">
                        <h3>Shop Alexa </h3>
                        <div className="underline-divider"></div>
                        <img className="display-alexa-image" src={Alexa} alt="" />
                    </div>
                    <div className="product-type-box">
                        <h3>Google Assistant</h3>
                        <div className="underline-divider"></div>
                        <img className="display-google-image" src={google} alt="" />
                    </div>
                    <div className="product-type-box">
                        <h3>HomeKit</h3>
                        <div className="underline-divider"></div>
                        <img className="display-lightbulb-image" src={homekit} alt="" />
                    </div>
                </div>
                <div className="right-bar-div">
                <iframe className="shop-right-bar" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=primemain&banner=08SJGPXKZR2FNJKHJYG2&f=ifr&linkID=bd0ce852c0d7c4730d61e0715a759f57&t=personalproje-20&tracking_id=personalproje-20" ></iframe>
                </div>
            </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state
}

let actionOutputs = {
    showLights,
    showLightSwitches,
    showAllProducts,
    showOutlets,
    showThermostats,
    showSmartSpeakers,
    toggleLeftNavBar
}


export default connect(mapStateToProps, actionOutputs)(ProductsSection);