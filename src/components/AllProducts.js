import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { filterBrandsTF } from '../ducks/reducer'
import { connect } from 'react-redux'
import _ from 'underscore-node'
import {displayListingsByPrice} from '../utilities/displayListingsByPrice'
import {displayListings} from '../utilities/displayListings'
class AllProducts extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      images: [],
      priceItems: [],
      filterPrice2: [],
      filterPrice3: [],
      filterPrice4: [],
      filterPrice5: []
    }
  }


  componentDidMount() {
    axios.get('/api/products').then(res => {
      this.setState({
        items: res.data,

      })
    })
    axios.get('/api/productimages').then(res => {
      this.setState({
        images: res.data
      })
    })
    if (this.props.price1Filter) {
      axios.get('/api/filterallbyprice').then(res => {
        this.setState({
          priceItems: res.data,
        })
      })
    }
    if (this.props.price2Filter) {
      axios.get('/api/filterallbyprice25').then(res => {
        this.setState({
          filterPrice2: res.data,
        })
      })
    }
    if (this.props.price3Filter) {
      axios.get('/api/filterallbyprice50').then(res => {
        this.setState({
          filterPrice3: res.data,
        })
      })
    }
    if (this.props.price4Filter) {
      axios.get('/api/filterallbyprice100').then(res => {
        this.setState({
          filterPrice4: res.data,
        })
      })
    }
    if (this.props.price5Filter) {
      axios.get('/api/filterallbyprice200').then(res => {
        this.setState({
          filterPrice5: res.data,
        })
      })
    }
  }

  componentWillReceiveProps() {
    axios.get('/api/filterallbyprice').then(res => {
      this.setState({
        priceItems: res.data,
      })
    })
    axios.get('/api/filterallbyprice25').then(res => {
      console.log("RES . DATA", res.data)
      this.setState({
        filterPrice2: res.data,
      })
    })
    axios.get('/api/filterallbyprice50').then(res => {
      this.setState({
        filterPrice3: res.data,
      })
    })
    axios.get('/api/filterallbyprice100').then(res => {
      this.setState({
        filterPrice4: res.data,
      })
    })
    axios.get('/api/filterallbyprice200').then(res => {
      this.setState({
        filterPrice5: res.data,
      })
    })
  }




  whichPricesToFilter(brandsToFilter, priceToFilter, ){
    return displayListingsByPrice(brandsToFilter,
                                  priceToFilter, 
                                  this.props.brands_to_filter,
                                  this.state.items,
                                  this.state.images,
                                  this.props.filterBrandsTF,
                                  this.props.filterBrands)
  }

  


  testWhatToDisplay(){
    if(
      this.props.price1Filter === false &&
      this.props.price2Filter === false &&
      this.props.price3Filter === false &&
      this.props.price4Filter === false &&
      this.props.price5Filter === false 
    ){
      return true
    } else {
      return false
    }
  }



  render() {
    const theRender = displayListings(this.props.brands_to_filter,
                                      this.props.price_to_filter,
                                      this.state.items,
                                      this.state.images,
                                      this.props.filterBrandsTF,
                                      this.props.filterBrands);

                                      
    const testWhat = this.testWhatToDisplay();

    return (
      <div>
        {testWhat ? theRender : null}
        {this.props.price1Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.priceItems) : null}
        {this.props.price2Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice2) : null}
        {this.props.price3Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice3) : null}
        {this.props.price4Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice4) : null}
        {this.props.price5Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice5) : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

let actionOutputs = {
  filterBrandsTF
}


export default connect(mapStateToProps, actionOutputs)(AllProducts);