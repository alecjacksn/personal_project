import React, { Component } from 'react';
import Slider from './homepage slider/HomepageImageSlider'
import LightBulb from '../../pictures/LightBulb Image1.jpg'
import LightSwitch from '../../pictures/LightSwitchImage.jpg'
import Outlet from '../../pictures/outlet image.jpg'
import Thermostat from '../../pictures/thermostat image.jpg'
import SmartSpeaker from '../../pictures/Smart Speaker Image.jpg'
class ProductsSection extends Component {

    render() {
        return (
            <div className="products-Container">
                <div className="product-type-box AllBox">
                <h3>Shop All</h3>
                <div className="underline-divider"></div>
                </div>
                <div className="product-type-box">
                <h3>Lights</h3>
                <div className="underline-divider"></div>
                    <img className="display-lightbulb-image" src={LightBulb} alt="" />
                </div>
                <div className="product-type-box">
                <h3>Light Switches</h3>
                <div className="underline-divider"></div>
                    <img className="display-lightbulb-image" src={LightSwitch} alt="" />
                </div>
                <div className="product-type-box">
                <h3>Outlets </h3>
                <div className="underline-divider"></div>
                    <img className="display-lightbulb-image" src={Outlet} alt="" />
                </div>
                <div className="product-type-box">
                <h3>Thermostats </h3>
                <div className="underline-divider"></div>
                    <img className="display-lightbulb-image" src={Thermostat} alt="" />
                </div>
                <div className="product-type-box">
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


export default ProductsSection;