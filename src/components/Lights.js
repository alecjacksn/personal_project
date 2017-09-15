import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Slider from '../components/slider/ImageSlider'



class Lights extends Component {
  constructor() {
    super()

    this.state = {
      allLights: [],
      images: [],
      prodIdClicked: ''
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3232/api/products/lights').then(res => {
      console.log("component mount test: ", res)
      this.setState({
        allLights: res.data,

      })
    })
    axios.get('http://localhost:3232/api/products/lights/images').then(res => {
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
    var newArray = []
    var theImages = this.state.images
    for (var i = 0; i < theImages.length; i++) {
        if (theImages[i].prodid === e.productid) {
          var x = theImages[i].mediumimage
            newArray.push(theImages[i])
        }
    }
    return (<img src={x} alt="" />)
        // return (
        //     // <Slider images={newArray} >
        //     newArray.slice(0).reverse().map((image, key) => <div key={key}><img src={image.mediumimage} alt="" /></div>)
        //   // </Slider>
        // )
    
}



  displayListings() {
    var display = this.state.allLights;

    return display.map((e, i) => {
      return (<div key={i}>
        <div className="layout_test">
          <div>
          <h3>Location: {i + 1}</h3>
            <br />
            Color: {e.color}
            <br />
            <br />
            Brand: {e.brand}
            <br />
            <br />
             Title: {e.title} <br />
            <br />
            Price: {e.price}
            <br />

            <div>
                        {this.imageFunction(e)}
                    </div>
            {/* price: {e.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}, */}
            {/* <img src={e.MediumImage[0].URL} alt="" /><br /> */}
            <br />
            {/* <img src={e.ImageSets[0].ImageSet.URL} alt="" /><br /> */}
            <br />
            
            Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
            <br />
            <br />
            {e.size ? 'Size: ' + e.size : null}            <br />
            <br />
            
            <br />
            {e.warranty ? 'Warranty: ' + e.warranty : null}
            <br />
            <br />
            {/* Features:<br />
            {e.feature0}<br />
            {e.feature1}<br />
            {e.feature2}<br />
            {e.feature3}<br />
            {e.feature4}<br /> */}
            <br />
          </div>
        </div>
        <br /><br />
        <br />
        <br />
      </div>


      )
    })

  }
  render() {
    const theRender = this.displayListings();
    return (
      <div className="App">
        <h1>LIGHTS PAGE</h1>
        <div>
          <Link to='/'><button>HOME</button></Link>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><button>Cart</button></Link>
          <Link to='/item'><button>TEST ITEM CLICKED</button></Link>
        </div>
        {theRender}
      </div>
    );
  }
}

export default Lights;
