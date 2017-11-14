import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { filterBrandsTF } from '../ducks/reducer'
import {connect} from 'react-redux'
import _ from 'underscore-node'
// import Slider from '../components/slider/ImageSlider'
import {imageFunction} from '../utilities/imageFunction'


class Light_Switch extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      images: [],
      prodIdClicked: '',
      priceItems: [],
      filterPrice2: [],
      filterPrice3: [],
      filterPrice4: [],
      filterPrice5: []
    }
  }


  componentDidMount() {
    axios.get('/api/products/light_switch').then(res => {
      this.setState({
        items: res.data,

      })
    })
    axios.get('/api/products/light_switch/images').then(res => {
      this.setState({
        images: res.data
      })
    })
    if (this.props.price1Filter) {
      axios.get('/api/filterbyprice?producttype=light_switch').then(res => {
        this.setState({
          priceItems: res.data,
        })
      })
    }
    if (this.props.price2Filter) {
      axios.get('/api/filterbyprice25?producttype=light_switch').then(res => {
        this.setState({
          filterPrice2: res.data,
        })
      })
    }
    if (this.props.price3Filter) {
      axios.get('/api/filterbyprice50?producttype=light_switch').then(res => {
        this.setState({
          filterPrice3: res.data,
        })
      })
    }
    if (this.props.price4Filter) {
      axios.get('/api/filterbyprice100?producttype=light_switch').then(res => {
        this.setState({
          filterPrice4: res.data,
        })
      })
    }
    if (this.props.price5Filter) {
      axios.get('/api/filterbyprice200?producttype=light_switch').then(res => {
        this.setState({
          filterPrice5: res.data,
        })
      })
    }
  }

  componentWillReceiveProps() {
    axios.get('/api/filterbyprice?producttype=light_switch').then(res => {
      this.setState({
        priceItems: res.data,
      })
    })
    axios.get('/api/filterbyprice25?producttype=light_switch').then(res => {
      this.setState({
        filterPrice2: res.data,
      })
    })
    axios.get('/api/filterbyprice50?producttype=light_switch').then(res => {
      this.setState({
        filterPrice3: res.data,
      })
    })
    axios.get('/api/filterbyprice100?producttype=light_switch').then(res => {
      this.setState({
        filterPrice4: res.data,
      })
    })
    axios.get('/api/filterbyprice200?producttype=light_switch').then(res => {
      this.setState({
        filterPrice5: res.data,
      })
    })
  }


  displayListings() {
    var xLength = this.props.brands_to_filter
    var pLength = this.props.price_to_filter
    var display = this.state.items;
    var brandsFilteredDisplay = _.without(this.props.brands_to_filter, this.state.items)



    // console.log("TRUE FALSE FILTERED:", brandsFilteredDisplay)

    if (xLength.length < 1) {
      this.props.filterBrandsTF(false)
    }
    if (this.props.filterBrands) {
      return display.map((e, i) => {
        if (brandsFilteredDisplay.includes(e.brand)) {
          return (<div key={i}>
            <div className="mapped-products">
              <div>
                <div className="mapped-info">
                  <div className="mapped-basic-info">
                    <div className="mapped-title">
                      <Link to={`/item/${e.productid}`} ><a href="">{e.title} </a></Link><br />
                    </div>
                    <br />
                    {e.color ? 'Color: ' + e.color : null}
                    <br />
                    {e.brand ? 'Brand: ' + e.brand : null}
                    <br />
                    <br />
                    Price: {e.price}
                    <br />
                    <br />
                    Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                  </div>
                  <div className="mapped-image">
                    {imageFunction(e, this.state.images)}
                  </div>
                </div>

              </div>

            </div>
            <div className="product-bottom-border">
            </div>

          </div>


          )
        }
      })
    } else {
      return display.map((e, i) => {
        return (<div key={i}>
          <div className="mapped-products">
            <div>
              <div className="mapped-info">
                <div className="mapped-basic-info">
                  <div className="mapped-title">
                    <Link to={`/item/${e.productid}`} ><a href="">{e.title} </a></Link><br />
                  </div>
                  <br />
                  {e.color ? 'Color: ' + e.color : null}
                  <br />
                  {e.brand ? 'Brand: ' + e.brand : null}
                  <br />
                  <br />
                  Price: {e.price}
                  <br />
                  <br />
                  Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                </div>
                <div className="mapped-image">
                  {imageFunction(e, this.state.images)}
                </div>
              </div>
            </div>
          </div>
          <div className="product-bottom-border">
          </div>
        </div>
        )
      })
    }
  }


  whichPricesToFilter(brandsToFilter, priceToFilter, ){
    return this.displayListingsByPrice(brandsToFilter, priceToFilter)
  }

  displayListingsByPrice(brandsToFilter, priceToFilter) {
    var xLength = brandsToFilter;
    var display = priceToFilter;
    var brandsFilteredDisplay = _.without(this.props.brands_to_filter, this.state.items)



    // console.log("TRUE FALSE FILTERED:", brandsFilteredDisplay)

    if (xLength.length < 1) {
      this.props.filterBrandsTF(false)
    }
    if (this.props.filterBrands) {
      return display.map((e, i) => {
        if (brandsFilteredDisplay.includes(e.brand)) {
          return (<div key={i}>
            <div className="mapped-products">
              <div>
                <div className="mapped-info">
                  <div className="mapped-basic-info">
                    <div className="mapped-title">
                      <Link to={`/item/${e.productid}`} ><a href="">{e.title} </a></Link><br />
                    </div>
                    <br />
                    {e.color ? 'Color: ' + e.color : null}
                    <br />
                    {e.brand ? 'Brand: ' + e.brand : null}
                    <br />
                    <br />
                    Price: {e.price}
                    <br />
                    <br />
                    Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                  </div>
                  <div className="mapped-image">
                    {imageFunction(e, this.state.images)}
                  </div>
                </div>

              </div>

            </div>
            <div className="product-bottom-border">
            </div>

          </div>


          )
        }
      })
    } else {
      return display.map((e, i) => {
        return (<div key={i}>
          <div className="mapped-products">
            <div>
              <div className="mapped-info">
                <div className="mapped-basic-info">
                  <div className="mapped-title">
                    <Link to={`/item/${e.productid}`} ><a href="">{e.title} </a></Link><br />
                  </div>
                  <br />
                  {e.color ? 'Color: ' + e.color : null}
                  <br />
                  {e.brand ? 'Brand: ' + e.brand : null}
                  <br />
                  <br />
                  Price: {e.price}
                  <br />
                  <br />
                  Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                </div>
                <div className="mapped-image">
                  {imageFunction(e, this.state.images)}
                </div>
              </div>
            </div>
          </div>
          <div className="product-bottom-border">
          </div>
        </div>
        )
      })
    }
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
    const theRender = this.displayListings();
    const testWhat = this.testWhatToDisplay();
    // const filterByPrice = this.whichPricesToFilter(this.props.brands_to_filter, this.state.priceItems)
    // const theBrandFilteredRender = this.displayBrandFilteredListings();
    return (
      <div>
        {testWhat ? theRender : null}
        {this.props.price1Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.priceItems) : null}
        {this.props.price2Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice2) : null}
        {this.props.price3Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice3) : null}
        {this.props.price4Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice4) : null}
        {this.props.price5Filter ? this.whichPricesToFilter(this.props.brands_to_filter, this.state.filterPrice5) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

let actionOutputs = {
  filterBrandsTF
}


export default connect(mapStateToProps, actionOutputs)(Light_Switch);
