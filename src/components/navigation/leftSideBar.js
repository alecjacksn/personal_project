import React, { Component } from 'react';
import axios from 'axios'
import _ from 'underscore-node'
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
    , price1filterTF
    , price2filterTF
    , price3filterTF
    , price4filterTF
    , price5filterTF

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

    // checkIfBoxWasChecked(e){
    //     let q = this.props.brands_to_filter
    //     var e = e;
    //     if (q.includes(e)){
    //         console.log("THIS BOX IS TRUEEEEEE")
    //     }
    // }


    // divFunction(e) {
    //     var x = []
    //     var test = e;
    //     var truu = this.state.clicked
    //     var stateForClicked = this.state[truu]
    //     test.map((e, i) => {
    //         this.testNewArrayAndBrands(e) 
    //         x.push(<div key={i} className="checkbox-label">
    //             <input id={e} onClick={() => this.filterBrandsFunction(e)}  type="checkbox" className="wemo-brand-search" />
    //             <label htmlFor={e} >{test[i]} </label>
    //         </div>)
    //     })
    //     return this.setState({
    //         [truu]: { ...stateForClicked, div: x },
    //         ready: false
    //     })
    // }


    testNewArrayAndBrands(e){
        let q = this.props.brands_to_filter
        var w = e
        for (let i = 0; i < w.length; i++){
            if(w.includes(q[i])){ 
                console.log("CONSOLE LOG: ", w)
                return true
            } else {
                return false
            }
        }
    }

    isReadyFunction = () => {
        var x = []
        var truu = this.state.clicked
        var stateForClicked = this.state[truu]
        var newArray = []
        // var finalArray;
        // var maybe = this.state.brandsActuallyDisplayed;
        for (var i = 0; i < stateForClicked.brands.length; i++) {
            if (!newArray.includes(stateForClicked.brands[i].brand)) {
                newArray.push(stateForClicked.brands[i].brand)
            }
        }

        // var j = stateForClicked.brands.filter((e, i) => {
        //     if(!newArray.includes(e.brand)){
        //         return newArray.push(e.brand)
        //     }
        // })

        newArray.map((e, i) => {
                var qq = this.testNewArrayAndBrands(e) 
                console.log("EEEE: ", e)
               return x.push(<div key={i} className="checkbox-label">
                    <input defaultChecked={qq ? true : false} id={e} onClick={() => this.filterBrandsFunction(e)}  type="checkbox" className="wemo-brand-search" />
                    <label htmlFor={e} >{e} </label>
                </div>)
            })


        return this.setState({
                    [truu]: { ...stateForClicked, div: x },
                    ready: false
                })
            
        // console.log('underscore: ', testtt)



        // finalArray = _.without(newArray, testtt)
        // console.log('maybe? : ', maybe)
        // testtt.map((e, i) => {
        //     this.testNewArrayAndBrands(e) 
        //    return x.push(<div key={i} className="checkbox-label">
        //         <input id={e} onClick={() => this.filterBrandsFunction(e)}  type="checkbox" className="wemo-brand-search" />
        //         <label htmlFor={e} >{test[i]} </label>
        //     </div>)
        // })
        
        
        // return this.setState({
        //     [truu]: { ...stateForClicked, div: x },
        //     ready: false
        // })

    //    return this.divFunction(newArray)
    // console.log("THIS IS J: ", j)

    }
    filterBrandsFunction(e) {
        let x = this.props.brands_to_filter
        
        if (!x.length){
          this.props.brandsToFilter(e)
          return this.props.filterBrandsTF(true) 
        } else{
        for (let i = 0; i < x.length; i++) {
            if (!x.includes(e)){
                this.props.filterBrandsTF(true) 
               return this.props.brandsToFilter(e)
            } else {
                this.props.deleteBrandsToFilter(e)
            }
        }
    }
        
    }


    // filterPriceFunction(e) {
    //     let x = this.props.price_to_filter
        
    //     if (!x.length){
    //       this.props.priceToFilter(e)
    //       return this.props.filterPriceTF(true) 
    //     } else{
    //     for (let i = 0; i < x.length; i++) {
    //         if (!x.includes(e)){
    //             this.props.filterPriceTF(true) 
    //            return this.props.priceToFilter(e)
    //         } else {
    //             this.props.deletePriceToFilter(e)
    //         }
    //     }
    // }
        
    // }


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
                    {this.state.ready ? this.isReadyFunction() : null}
                    {this.state.allProducts.clicked ? this.state.allProducts.div : null}
                    {this.state.light_bulb.clicked ? this.state.light_bulb.div : null}
                    {this.state.light_switch.clicked ? this.state.light_switch.div : null}
                    {this.state.outlet.clicked ? this.state.outlet.div : null}
                    {this.state.thermostat.clicked ? this.state.thermostat.div : null}
                    {this.state.smart_speaker.clicked ? this.state.smart_speaker.div : null}




                    <h5>Price</h5>
                    <div className="checkbox-label">
                        <input id="under25" onClick={() => this.props.price1filterTF(!this.props.price1Filter)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="under25">Under $25 </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="25to50"  onClick={() => this.props.price2filterTF(!this.props.price2Filter)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="25to50">$25 to $50 </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="50to100" onClick={() => this.props.price3filterTF(!this.props.price3Filter)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="50to100">$50 to $100 </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="100to200" onClick={() => this.props.price4filterTF(!this.props.price4Filter)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="100to200">$100 to $200 </label>
                    </div>
                    <div className="checkbox-label">
                        <input id="200andabove"  onClick={() => this.props.price5filterTF(!this.props.price5Filter)} type="checkbox" className="wemo-brand-search" />
                        <label htmlFor="200andabove">$200 & Above</label>
                    </div>
                    <br />
                    <br />
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
    filterBrandsTF,
    price1filterTF,
    price2filterTF,
    price3filterTF,
    price4filterTF,
    price5filterTF
}


export default connect(mapStateToProps, actionOutputs)(LeftSideBar);