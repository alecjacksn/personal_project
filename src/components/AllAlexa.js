import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/slider/ImageSlider'
import axios from 'axios'


class AllAlexa extends Component {
    constructor() {
        super()

        this.state = {
            items: [],
            images: []
        }
    }



    componentDidMount() {

        console.log("Product Id: ", this.props.productid)
        axios.get(`http://localhost:3232/api/alexa`)
            .then(res => {
                this.setState({
                    items: res.data
                })

            })
        axios.get(`http://localhost:3232/api/alexaimages`).then(res => {
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
                {newArray.slice(0).reverse().map((image, key) => <div key={key}><img className="display-images-big" src={image.largeimage} alt="" /></div>)}
            </Slider>
        )

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
                                    <Link to={`/item/${e.productid}`} ><a href="" onClick={() => this.props.updateProductid(e.productid)}>{e.title} </a></Link><br />
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
                {/* <h1>ALL ALEXA</h1>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><button>Cart</button></Link>
                <Link to='/lights'><button>Lights</button></Link>
                <Link to='/google'><button>GOOGLE</button></Link>
                <Link to='/homekit'><button>HomeKit</button></Link>
                <div className="all-products">
                    <div className="all-products-div">
                        <div className="side-bars">
                            <div className="side-bar-left">
                                </div>
                                <div className="listed-products"> */}
                {theRender}
                {/* </div>
                                <div className="side-bar-right"> </div>
                            </div>
                        </div>
                    </div> */}
            </div>
        )
    }
}



export default AllAlexa;