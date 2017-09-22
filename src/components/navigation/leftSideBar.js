import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LeftSideBar extends Component {
    constructor() {
        super()

        this.state = {
            clicked: '',
            redirect: true,
            category: 'brand',
            selectedCategory: 'Ankuoo'
        }
    }


    check(e) {
        var x = e.target.value
        console.log("Check box checked: ", x)
        this.setState({
            clicked: x
        })
        console.log("state check:", this.state.clicked)
    }


    // handleClick(){
    //     this.setState({
    //         redirect: true
    //     })
    // }

    render() {
        return (
            <div className="side-bar-left">
                <h3> Refine by </h3>
                <h5>Category</h5>
                <div className="checkbox-label">                   
                    <input id="allbox" type="checkbox" value="all" className="wemo-brand-search" />
                    <label htmlFor="allbox"><Link to='/allproducts'>All</Link></label>
                </div>
                <div className="checkbox-label">
                    
                    <input id="lightsbox" type="checkbox" value="lights" className="wemo-brand-search" />
                    <label htmlFor="lightsbox">{this.state.redirect ? <Link to='/lights'/> : null} Lights </label>
                </div>
                <div className="checkbox-label">
                    <input id="lightswitchesbox" type="checkbox" onClick={(value) => this.check(value)} value="light_switch" className="wemo-brand-search" />
                    <label htmlFor="lightswitchesbox">Light Switches </label>
                </div>
                <div className="checkbox-label">
                    <input id="outletbox" type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="outletbox">Outlets </label>
                </div>
                <div className="checkbox-label">
                    <input id="thermostatbox" type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="thermostatbox">Thermostats </label>
                </div>
                <div className="checkbox-label">
                    <input id="speakerbox" type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="speakerbox">Smart Speakers </label>
                </div>
                <br />




                <h5>Brand</h5>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search"><Link to={`/wemo`} >WeMo </Link></label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">Ankuoo </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">TP-Link </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">Wink </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">Koogeek </label>
                </div>


                <h5>Price</h5>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">Under $25 </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">$25 to $50 </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">$50 to $100 </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">$100 to $200 </label>
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="wemo-brand-search">$200 & Above</label>
                </div>
                <br />
                <br />
            </div>
        )
    }

}
export default LeftSideBar