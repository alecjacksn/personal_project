import React, { Component } from 'react';
import Slider from './homepage slider/HomepageImageSlider'
import LightBulb from '../../pictures/LightBulb Image1.jpg'
import LightSwitch from '../../pictures/LightSwitchImage.jpg'
import Outlet from '../../pictures/outlet image.jpg'
import Thermostat from '../../pictures/thermostat image.jpg'
import SmartSpeaker from '../../pictures/Smart Speaker Image.jpg'
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
            <div className="products-Container">
                <div className="product-type-box AllBox" onClick={() => this.clickedType(this.props.showAllProducts)}>
                    <h3>Shop All</h3>
                    <div className="underline-divider"></div>
                </div>
                <div className="product-type-box" onClick={() => this.clickedType(this.props.showLights)}>
                    <h3>Lights</h3>
                    <div className="underline-divider"></div>
                    <img className="display-lightbulb-image" src={LightBulb} alt="" />
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

                </div>
                <div className="product-type-box">
                    <h3>Google Assistant</h3>
                    <div className="underline-divider"></div>

                </div>
                <div className="product-type-box">
                    <h3>HomeKit</h3>
                    <div className="underline-divider"></div>

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