import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'underscore-node'
import { Sticky } from 'semantic-ui-react'
import {
    showLights
    , showLightSwitches
    , showAllProducts
    , showOutlets
    , showThermostats
    , showSmartSpeakers
    , brandsToFilter
    , deleteBrandsToFilter
    , filterBrandsTF

} from '../../ducks/reducer'
import { connect } from 'react-redux'
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
            allProducts: {
                clicked: false,
                brands: [],
                div: []
            },
            light_bulb: {
                clicked: false,
                brands: [],
                div: []
            },
            light_switch: {
                brands: [],
                div: []
            },
            thermostat: {
                clicked: false,
                search: null,
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
            },
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


    getBrandsForAll(x, clickedState, reducerTF) {
        if (!clickedState.clicked) {
            this.setState({
                ['light_bulb']: { ...this.state.light_bulb, clicked: false },
                ['light_switch']: { ...this.state.light_switch, clicked: false },
                ['thermostat']: { ...this.state.thermostat, clicked: false },
                ['outlet']: { ...this.state.outlet, clicked: false },
                ['smart_speaker']: { ...this.state.smart_speaker, clicked: false }
            })
            this.props.showLights(false)
            this.props.showLightSwitches(false)
            this.props.showOutlets(false)
            this.props.showThermostats(false)
            this.props.showSmartSpeakers(false)
            this.refs['light-box'].checked = false
            this.refs['light-switch-box'].checked = false
            this.refs['outlet-box'].checked = false
            this.refs['thermostat-box'].checked = false
            this.refs['smart-speaker-box'].checked = false
            axios.get(`http://localhost:3232/api/brandnames?producttype=${x}`)
                .then(res => {
                    console.log(res)
                    this.setState({
                        [x]: { ...clickedState, brands: res.data, clicked: true },
                        clicked: x,
                        ready: true
                    })
                })
            reducerTF(true)
        } else {
            this.setState({
                [x]: { ...clickedState, clicked: false }
            })
            reducerTF(false)
        }
    }



    getBrandsForCategory(x, clickedState, reducerTF) {
        if (this.state.allProducts.clicked) {
            this.setState({
                ['allProducts']: { ...this.state.allProducts, clicked: false }
            })
            this.props.showAllProducts(false)
            this.refs['allbox1'].checked = false
        }
        if (!clickedState.clicked) {
            axios.get(`http://localhost:3232/api/brandnames?producttype=${x}`)
                .then(res => {
                    //reducerBrands(res.data)
                    this.setState({
                        [x]: { ...clickedState, brands: res.data, clicked: true },
                        clicked: x,
                        ready: true
                    })
                })
            // reducerBrands(clickedState.brands)
            reducerTF(true)
        } else {
            this.setState({
                [x]: { ...clickedState, clicked: false }
            })
            reducerTF(false)
        }
    }



    divFunction(e) {
        var x = []
        var test = e;
        test.map((e, i) => {
            x.push(<div key={i} className="checkbox-label">
                <input id={test[i]} type="checkbox"  className="wemo-brand-search" />
                <label htmlFor={test[i]} onClick={() => this.filterBrandsFunction(e)} >{test[i]} </label>

            </div>)
        })
        this.setState({
            brandsActuallyDisplayed: x
        })
        return x;
    }

    test = () => {



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
        // console.log('underscore: ', testtt)
        this.setState({
            brandsBeingDisplayed: newStateArray,
            lastAttempt: testtt
        })



        finalArray = _.without(newArray, testtt)
        // console.log('maybe? : ', maybe)




        this.setState({
            [truu]: { ...stateForClicked, div: this.divFunction(newArray) },
            ready: false
        })
    }


    filterBrandsFunction(e) {
        
        let x = this.props.brands_to_filter
        
        if (!x.length){
          this.props.brandsToFilter(e)

        } else{
        for (let i = 0; i < x.length; i++) {
            if (!x.includes(e)){
                
               return this.props.brandsToFilter(e)
                console.log("TRUEEEEE")
            } else {
                this.props.deleteBrandsToFilter(e)
            }
        }
    }
        console.log('clicked state: ', x.length)
        
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
        var { showLights } = this.props
        console.log("RENDERED BRANDS: ", this.props.brands_to_filter)
        return (
            <div className="position-fixed">
                <div className="side-bar-left">
                    <h3> Refine by </h3>
                    <h5>Category</h5>
                    <div className="checkbox-label">
                        <input id="allbox" ref="allbox1" onClick={() => this.getBrandsForAll('allProducts', this.state.allProducts, this.props.showAllProducts)} type="checkbox" value="all" className="wemo-brand-search" />
                        <label htmlFor="allbox">All</label>
                    </div>

                    <div className="checkbox-label">

                        <input id="lightsbox" ref="light-box" onClick={() => this.getBrandsForCategory('light_bulb', this.state.light_bulb, this.props.showLights)} type="checkbox" value="lights" className="wemo-brand-search" />
                        <label htmlFor="lightsbox" >Lights</label>
                    </div>
                    <div className="checkbox-label">
                        <input id="lightswitchesbox" ref="light-switch-box" onClick={() => this.getBrandsForCategory('light_switch', this.state.light_switch, this.props.showLightSwitches)} type="checkbox" value="light_switch" className="wemo-brand-search" />
                        <label htmlFor="lightswitchesbox">Light Switches </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="outletbox" ref="outlet-box" onClick={() => this.getBrandsForCategory('outlet', this.state.outlet, this.props.showOutlets)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="outletbox">Outlets </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="thermostatbox" ref="thermostat-box" onClick={() => this.getBrandsForCategory('thermostat', this.state.thermostat, this.props.showThermostats)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="thermostatbox">Thermostats </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="speakerbox" ref="smart-speaker-box" onClick={() => this.getBrandsForCategory('smart_speaker', this.state.smart_speaker, this.props.showSmartSpeakers)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="speakerbox">Smart Speakers</label>
                    </div>
                    <br />

                    <h5>Brands</h5>
                    {this.state.ready ? this.test() : null}
                    {this.state.allProducts.clicked ? this.state.allProducts.div : null}
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
    brandsToFilter,
    deleteBrandsToFilter,
    filterBrandsTF

}


export default connect(mapStateToProps, actionOutputs)(LeftSideBar);