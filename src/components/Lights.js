import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import _ from 'underscore-node'
// import Slider from '../components/slider/ImageSlider'



class Lights extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      images: [],
      prodIdClicked: ''
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3232/api/products/lights').then(res => {
      this.setState({
        items: res.data,

      })
    })
    axios.get('http://localhost:3232/api/products/lights/images').then(res => {
      this.setState({
        images: res.data
      })
    })
    axios.get()
  }


  // productClicked(e){
  //   this.setState({
  //     prodIdClicked: e.target.value
  //   })
  // }

  displayBrands() {
    var newArray = []
    var display = this.state.brandNames
    for (var i = 0; i < display.length; i++) {
        if (!newArray.includes(display[i].brand)) {
            newArray.push(display[i].brand)
        }
    }
    console.log("new ArRrayy: ", newArray)



    this.setState({
        redirect: false
    })
    return newArray.map((e, i) => {
       return(<div key={i} className="checkbox-label">
            <input type="checkbox" className="wemo-brand-search" />
            <label htmlFor="wemo-brand-search">{newArray[i]} </label>
        </div>)
    })
}







  imageFunction(e) {
    // var newArray = []
    var theImages = this.state.images
    for (var i = 0; i < theImages.length; i++) {
      if (theImages[i].prodid === e.productid) {
        var x = <Link to={`/item/${e.productid}`} ><a href=""><img className="display-images" src={theImages[i].largeimage} alt="" /></a></Link>
        // newArray.push(theImages[i])
      }
    }
    return (x)
  }



  displayListings() {
    var display = this.state.items;
    var brandsFilteredDisplay = _.union(this.props.brands_to_filter, this.state.items)
    var ifFilteredBrands = this.props.filterBrands ? brandsFilteredDisplay : this.state.items
    console.log("TRUE FALSE FILTERED:", brandsFilteredDisplay)
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
                <br />
                Price: {e.price}
                <br />
                Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
              </div>
              <div className="mapped-image">
              {this.imageFunction(e)}
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

  displayBrandFilteredListings() {
    var brandsFilteredDisplay = _.without(this.props.brands_to_filter, this.state.items)
    var testE = this.state.items.filter((e, i) => {
      return e.brand !== this.props.brands_to_filter
    })
    console.log("E FITLER: ", brandsFilteredDisplay)
    console.log("TRUE FALSE FILTERED:", this.state.item)
    return this.state.items.map((e, i) => {
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
                <br />
                Price: {e.price}
                <br />
                Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
              </div>
              <div className="mapped-image">
              {this.imageFunction(e)}
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


  render() {
    const theRender = this.displayListings();
    const theBrandFilteredRender = this.displayBrandFilteredListings();
    console.log("console filter brands", this.props.filterBrands)
    return (
      <div>
        {this.props.filterBrands ? theBrandFilteredRender :theRender}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Lights);
