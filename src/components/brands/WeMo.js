import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Slider from '../components/slider/ImageSlider'



class WeMo extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      images: [],
      brand: 'brand',
      prodIdClicked: 'WeMo'
    }
  }


  componentDidMount() {
    axios.get(`http://localhost:3232/api/brands?${this.state.brand}=${this.state.prodIdClicked}`).then(res => {
      console.log("component mount test: ", res)
      this.setState({
        items: res.data,

      })
    })
    axios.get('http://localhost:3232/api/brands/wemo/images').then(res => {
      console.log("image mount test: ", res.data)
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
  render() {
    const theRender = this.displayListings();
    return (
      <div>
        {theRender}
      </div>
    );
  }
}

export default WeMo;
