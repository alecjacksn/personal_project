import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { filterBrandsTF } from '../ducks/reducer'
import {connect} from 'react-redux'
import _ from 'underscore-node'


class Outlets extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      images: [],
      prodIdClicked: ''
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3232/api/products/outlet').then(res => {
      this.setState({
        items: res.data,

      })
    })
    axios.get('http://localhost:3232/api/products/outlet/images').then(res => {
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
    var xLength = this.props.brands_to_filter
    var display = this.state.items;
    var brandsFilteredDisplay = _.without(this.props.brands_to_filter, this.state.items)
    // console.log("TRUE FALSE FILTERED:", brandsFilteredDisplay)
    if(xLength.length < 1){
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
  }


  render() {
    const theRender = this.displayListings();
    return (
      <div>
        {theRender}
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


export default connect(mapStateToProps, actionOutputs)(Outlets);

