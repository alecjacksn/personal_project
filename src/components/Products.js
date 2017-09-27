import React, { Component } from 'react'
import AllProducts from './AllProducts'
import AllLights from './Lights'
import LightSwitch from './Light_Switch'
import Outlets from './Outlets'
import Thermostats from './Thermostats'
import SmartSpeakers from './SmartSpeakers'
import {connect} from 'react-redux'
class Products extends Component {


    render() {

        return (
            <div>
                {this.props.allProducts ? <AllProducts /> : null}
                {this.props.light_bulb ?  <AllLights /> : null}
                {this.props.light_switch ? <LightSwitch /> : null}
                {this.props.outlet ? <Outlets /> : null}
                {this.props.thermostat ? <Thermostats /> : null}
                {this.props.smart_speaker ? <SmartSpeakers /> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
  return state
}



export default connect(mapStateToProps)(Products);