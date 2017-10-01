import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/slider/ImageSlider'
import axios from 'axios'


class HomeKit extends Component {
    constructor() {
        super()

        this.state = {
            items: [],
            images: []
        }
    }



    componentDidMount() {

            console.log("Product Id: ", this.props.productid)
            axios.get(`/api/homekit`)
            .then(res => {
                this.setState({
                    items: res.data
                })
                
            })
            axios.get(`/api/homekitimages`).then(res => {
                console.log("image mount test: ", res.data)
                this.setState({
                    images: res.data
                })
            })
        }
        
       
    

    imageFunction(e) {
        var newArray = []
        var theImages = this.state.images
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                newArray.push(theImages[i])
            }
        }

            return (
                <Slider images={newArray} >
                {newArray.slice(0).reverse().map((image, key) => <div key={key}><img src={image.largeimage} alt="" /></div>)}
               </Slider>
            )
        
    }

    displayListings() {
        var display = this.state.items;
 
        return display.map((e, i) => {
            return (<div key={i}>
                <div>
                    <h3>Location: {i + 1}</h3>
                    <div>
                        Product Id: {e.productid}
                        <br />
                        ASIN: {e.asin} <br />
                        <br />
                        OfferListingId: {e.offerlistingid}
                        <br />
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

                        <div className="pictures">
                            {this.imageFunction(e)}
                        </div>
                        {/* price: {e.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}, */}
                        {/* <img src={e.MediumImage[0].URL} alt="" /><br /> */}
                        <br />
                        {/* <img src={e.ImageSets[0].ImageSet.URL} alt="" /><br /> */}
                        <br />
                        <br />
                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                        <br />
                        <br />
                        Size: {e.size}
                        <br />
                        <br />
                        Model: {e.model}
                        <br />
                        <br />
                        Warranty: {e.warranty}
                        <br />
                        <br />
                        Features:<br />
                        {e.feature0}<br />
                        {e.feature1}<br />
                        {e.feature2}<br />
                        {e.feature3}<br />
                        {e.feature4}<br />
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
        let theRender = this.displayListings()
        
        return (
            <div>
                <h1>HomeKit</h1>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><button>Cart</button></Link>
                <Link to='/lights'><button>Lights</button></Link>
                <Link to='/google'><button>GOOGLE</button></Link>
                <Link to='/alexa'><button>Alexa</button></Link>
                <div>
                    {theRender}

        

                    
                
                    
                    
                    
                </div>
            </div>
        )
    }
}



export default HomeKit;