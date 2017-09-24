import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'underscore-node'
import {Sticky } from 'semantic-ui-react'
// const URL = 'http://localhost:3232';

class LeftSideBar extends Component {
    constructor() {
        super()

        this.state = {
            clicked: '',
            ready: false,
            category: 'brand',
            selectedCategory: '',
            brandNames: [],
            brandsBeingDisplayed: [],
            brandsActuallyDisplayed: [],
            light_bulb: {
                clicked: false,
                brands: [],
                div: []
            },
            light_switch: {
                clicked: false,
                brands: [],
                div: []
            },
            thermostat: {
                clicked: false,
                brands: [],
                div: []
            },
            outlet: {
                clicked: false,
                brands: [],
                div: []
            },
            smart_speaker: {
                clicked: false,
                brands: [],
                div: []
            }
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


    getBrandsForCategory(x, clickedState) {
        if (!clickedState.clicked) {
            axios.get(`http://localhost:3232/api/brandnames?producttype=${x}`)
                .then(res => {
                    this.setState({
                        [x]: { ...clickedState, brands: res.data, clicked: true },
                        clicked: x,
                        ready: true
                    })
                })
        } else {
            this.setState({
                [x]: { ...clickedState, clicked: false },
            })
        }
    }



    divFunction(e) {
        var x = []
        var test = e;
         test.map((e, i) => {
             x.push(<div key={i} className="checkbox-label">
                <input type="checkbox" onClick={() => this.testerer()} className="wemo-brand-search" />
                <label htmlFor="wemo-brand-search">{test[i]} </label>

            </div>)
        })
        this.setState({
            brandsActuallyDisplayed: x
        })
        return x;
}

    test = () => {

        Array.prototype.diff = function (arr2) {
            var ret = [];
            this.sort();
            arr2.sort();
            for (var i = 0; i < this.length; i += 1) {
                if (arr2.indexOf(this[i]) > -1) {
                    ret.push(this[i]);
                }
            }
            return ret;
        };

        var diff;
        var truu = this.state.clicked
        var stateForClicked = this.state[truu]
        var newArray = []
        var x = []
        var newStateArray = this.state.brandsBeingDisplayed.slice()
        var testtt;
        var finalArray;
        var maybe = this.state.brandsActuallyDisplayed;
        for (var i = 0; i < stateForClicked.brands.length; i++) {
            if (!newArray.includes(stateForClicked.brands[i].brand)) {
                newArray.push(stateForClicked.brands[i].brand)
            }
        }


        testtt = _.uniq(this.state.lastAttempt, newArray)
        console.log('underscore: ', testtt)
        this.setState({
            brandsBeingDisplayed: newStateArray,
            lastAttempt: testtt
        })



        finalArray = _.without(newArray, testtt)
        console.log('maybe? : ', maybe)


        newArray.diff(testtt)
        
        
      
        
      



        this.setState({
            [truu]: { ...stateForClicked, div: this.divFunction(newArray) },
            ready: false
        })


    }
    


    testerer() {
        console.log("TEST TEST TEST TEST TEST")
    }

    displayThermostatDiv() {
        var theDiv = this.state.thermostat.div
        return console.log("console test: ", theDiv)
    }

    // handleClick(){
    //     this.setState({
    //         clicked: true
    //     })
    // }

    render() {

        return (
            <div className="position-fixed">
            <div className="side-bar-left">
                <h3> Refine by </h3>
                <h5>Category</h5>
                <div className="checkbox-label">
                    <input id="allbox" type="checkbox" value="all" className="wemo-brand-search" />
                    <label htmlFor="allbox"><Link to='/allproducts'>All</Link></label>
                </div>
                <div className="checkbox-label">

                    <input id="lightsbox" onClick={() => this.getBrandsForCategory('light_bulb', this.state.light_bulb)} type="checkbox" value="lights" className="wemo-brand-search" />
                    <label htmlFor="lightsbox"><Link to='/lights' onClick={() => this.getBrandsForCategory('light_bulb', this.state.light_bulb)}>Lights</Link> </label>
                </div>
                <div className="checkbox-label">
                    <input id="lightswitchesbox" onClick={() => this.getBrandsForCategory('light_switch', this.state.light_switch)} type="checkbox" value="light_switch" className="wemo-brand-search" />
                    <label htmlFor="lightswitchesbox">Light Switches </label>
                </div>
                <div className="checkbox-label">
                    <input id="outletbox" onClick={() => this.getBrandsForCategory('outlet', this.state.outlet)} type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="outletbox">Outlets </label>
                </div>
                <div className="checkbox-label">
                    <input id="thermostatbox" ref='thermostat' onClick={() => this.getBrandsForCategory('thermostat', this.state.thermostat)} type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="thermostatbox">Thermostats </label>
                </div>
                <div className="checkbox-label">
                    <input id="speakerbox" ref='smart_speaker' onClick={() => this.getBrandsForCategory('smart_speaker', this.state.smart_speaker)} type="checkbox" className="wemo-brand-search" />
                    <label htmlFor="speakerbox">Smart Speakers</label>
                </div>
                <br />

                <h5>Brands</h5>
                {this.state.ready ? this.test() : null}
                {this.state.light_bulb.clicked ? this.state.light_bulb.div : null}
                {this.state.light_switch.clicked ? this.state.light_switch.div : null}
                {this.state.outlet.clicked ? this.state.outlet.div : null}
                {this.state.thermostat.clicked ? this.state.thermostat.div : null}
                {this.state.smart_speaker.clicked ? this.state.smart_speaker.div : null}




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
                {this.state.brandsBeingDisplayed}
            </div>
            </div>
        )
    }

}
export default LeftSideBar