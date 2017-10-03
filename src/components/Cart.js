import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {addToCart} from '../ducks/reducer'
import axios from 'axios'
class Cart extends Component {
    constructor() {
        super()

        this.state = {
            items: [],
            images: [],
            price: '',

            cart2: [],
            images2: [],
            price2: '',

            cart3: [],
            images3: [],
            price3: '',

            cart4: [],
            images4: [],
            price4: '',

            cart5: [],
            images5: [],
            price5: '',

            totalPrice: '',

        }
    }







    componentDidMount() {

        axios.get(`/api/item/${this.props.cart}`).then(res => {

            this.setState({
                items: res.data,
                price: res.data[0].price
            })
        })
        axios.get(`/api/item/image/${this.props.cart}`).then(res => {

            this.setState({
                images: res.data
            })
        })
        // axios.get(`/api/item/${this.props.cart2}`).then(res => {

        //     this.setState({
        //         cart2: res.data,
        //         price2: res.data[0].price
        //     })
        // })
        // axios.get(`/api/item/image/${this.props.cart2}`).then(res => {
        //     this.setState({
        //         images2: res.data
        //     })
        // })
        // axios.get(`/api/item/${this.props.cart3}`).then(res => {

        //     this.setState({
        //         cart3: res.data,
        //         price3: res.data[0].price
        //     })
        // })
        // axios.get(`/api/item/image/${this.props.cart3}`).then(res => {
        //     this.setState({
        //         image3: res.data
        //     })
        // })
        // axios.get(`/api/item/${this.props.cart4}`).then(res => {

        //     this.setState({
        //         cart4: res.data,
        //         price4: res.data[0].price
        //     })
        // })
        // axios.get(`/api/item/image/${this.props.cart4}`).then(res => {
        //     this.setState({
        //         images4: res.data
        //     })
        // })
        // axios.get(`/api/item/${this.props.cart5}`).then(res => {

        //     this.setState({
        //         cart5: res.data,
        //         price5: res.data[0].price
        //     })
        // })
        // axios.get(`/api/item/image/${this.props.cart5}`).then(res => {
        //     this.setState({
        //         images5: res.data
        //     })
        // })

    }



    getTotalPrice() {
        var p1 = this.state.price.substring(1, 10)
        var p2 = this.state.price2.substring(1, 10)
        var p3 = this.state.price3.substring(1, 10)
        var p4 = this.state.price4.substring(1, 10)
        var p5 = this.state.price5.substring(1, 10)
        var final = +p1 + +p2 + +p3 + +p4 + +p5
        return final;
    }


    removeFromCart(a, b, c){
        this.setState({
            [a]: [],
            [b]: [],
            [c]: []
        })
    }

    checkoutFunction(){
        alert("Completed!")
    }


    //                      cart 1                              //


    imageFunction(e) {
        // var newArray = []
        var theImages = this.state.images
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                var x = <img className="display-images" src={theImages[i].largeimage} alt="" />
                // newArray.push(theImages[i])
            }
        }
        return (x)
    }




    displayListings() {
        var display = this.state.items;

        return display.map((e, i) => {
            return (<div key={i}>
                <div className="cart-mapped-products">
                    <div>
                        <div className="cart-mapped-info">
                            <div className="cart-main-info">
                                <div className="cart-mapped-basic-info">
                                    <div className="cart-mapped-title">
                                        <h3>{e.title} </h3>
                                    </div>
                                    <div>
                                        Price: {e.price}

                                    </div>

                                    <div>
                                        {e.color ? 'Color: ' + e.color : null}
                                    </div>

                                    <div>
                                        {e.brand ? 'Brand: ' + e.brand : null}
                                    </div>




                                    <div>
                                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-mapped-image">
                                {this.imageFunction(e)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-product-bottom-border">
                    <Link to='/shop' className="delete-product-from-cart" onClick={() => this.props.addToCart(null)}>Remove from cart</Link>
                </div>
            </div>


            )
        })

    }



    //                          cart 2                          //



    imageFunction2(e) {
        // var newArray = []
        var theImages = this.state.images2
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                var x = <img className="display-images" src={theImages[i].largeimage} alt="" />
                // newArray.push(theImages[i])
            }
        }
        return (x)
    }




    displayListings2() {
        var display = this.state.cart2;

        return display.map((e, i) => {
            return (<div key={i}>
                <div className="cart-mapped-products">
                    <div>
                        <div className="cart-mapped-info">
                            <div className="cart-main-info">
                                <div className="cart-mapped-basic-info">
                                    <div className="cart-mapped-title">
                                        <h3>{e.title} </h3>
                                    </div>
                                    <div>
                                        Price: {e.price}

                                    </div>

                                    <div>
                                        {e.color ? 'Color: ' + e.color : null}
                                    </div>

                                    <div>
                                        {e.brand ? 'Brand: ' + e.brand : null}
                                    </div>




                                    <div>
                                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-mapped-image">
                                {this.imageFunction2(e)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-product-bottom-border">
                    <a className="delete-product-from-cart" onClick={() => this.getTotalPrice()}>Remove from cart</a>
                </div>
            </div>


            )
        })

    }
    imageFunction3(e) {
        // var newArray = []
        var theImages = this.state.images3
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                var x = <img className="display-images" src={theImages[i].largeimage} alt="" />
                // newArray.push(theImages[i])
            }
        }
        return (x)
    }




    displayListings3() {
        var display = this.state.cart3;

        return display.map((e, i) => {
            return (<div key={i}>
                <div className="cart-mapped-products">
                    <div>
                        <div className="cart-mapped-info">
                            <div className="cart-main-info">
                                <div className="cart-mapped-basic-info">
                                    <div className="cart-mapped-title">
                                        <h3>{e.title} </h3>
                                    </div>
                                    <div>
                                        Price: {e.price}

                                    </div>

                                    <div>
                                        {e.color ? 'Color: ' + e.color : null}
                                    </div>

                                    <div>
                                        {e.brand ? 'Brand: ' + e.brand : null}
                                    </div>




                                    <div>
                                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-mapped-image">
                                {this.imageFunction3(e)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-product-bottom-border">
                    <a className="delete-product-from-cart" onClick={() => this.getTotalPrice()}>Remove from cart</a>
                </div>
            </div>


            )
        })

    }
    imageFunction4(e) {
        // var newArray = []
        var theImages = this.state.images4
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                var x = <img className="display-images" src={theImages[i].largeimage} alt="" />
                // newArray.push(theImages[i])
            }
        }
        return (x)
    }




    displayListings4() {
        var display = this.state.cart4;

        return display.map((e, i) => {
            return (<div key={i}>
                <div className="cart-mapped-products">
                    <div>
                        <div className="cart-mapped-info">
                            <div className="cart-main-info">
                                <div className="cart-mapped-basic-info">
                                    <div className="cart-mapped-title">
                                        <h3>{e.title} </h3>
                                    </div>
                                    <div>
                                        Price: {e.price}

                                    </div>

                                    <div>
                                        {e.color ? 'Color: ' + e.color : null}
                                    </div>

                                    <div>
                                        {e.brand ? 'Brand: ' + e.brand : null}
                                    </div>




                                    <div>
                                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-mapped-image">
                                {this.imageFunction4(e)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-product-bottom-border">
                    <a className="delete-product-from-cart" onClick={() => this.getTotalPrice()}>Remove from cart</a>
                </div>
            </div>


            )
        })

    }
    imageFunction5(e) {
        // var newArray = []
        var theImages = this.state.images5
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                var x = <img className="display-images" src={theImages[i].largeimage} alt="" />
                // newArray.push(theImages[i])
            }
        }
        return (x)
    }




    displayListings5() {
        var display = this.state.cart5;

        return display.map((e, i) => {
            return (<div key={i}>
                <div className="cart-mapped-products">
                    <div>
                        <div className="cart-mapped-info">
                            <div className="cart-main-info">
                                <div className="cart-mapped-basic-info">
                                    <div className="cart-mapped-title">
                                        <h3>{e.title} </h3>
                                    </div>
                                    <div>
                                        Price: {e.price}

                                    </div>

                                    <div>
                                        {e.color ? 'Color: ' + e.color : null}
                                    </div>

                                    <div>
                                        {e.brand ? 'Brand: ' + e.brand : null}
                                    </div>




                                    <div>
                                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-mapped-image">
                                {this.imageFunction5(e)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-product-bottom-border">
                    <a className="delete-product-from-cart" onClick={() => this.getTotalPrice()}>Remove from cart</a>
                </div>
            </div>


            )
        })

    }



    render() {
        let theRender = this.displayListings()
        // let theRender2 = this.displayListings2()
        // let theRender3 = this.displayListings3()
        // let theRender4 = this.displayListings4()
        // let theRender5 = this.displayListings5()
        return (
            <div>
                <div className="cart-item-page-container">


                    <div className="cart-divider">


                        <div className="cart-item-page">


                            <div className="cart-item-page-item">
                                {theRender}
                                {/* {theRender2} */}
                                {/* {theRender3} */}
                                {/* {theRender4} */}
                                {/* {theRender5} */}
                            </div>
                            <div className="cart-page-right-navbar">
                                <div className="right-share-section">

                                </div>
                                <div className="cart-right-box">
                                    <div className="cart-right-add-cart-section">
                                        <div className="cart-section">
                                            <div className="price-header">
                                                TOTAL: $<span className="cart-price">{this.getTotalPrice()}</span>
                                            </div>
                                            <div className="add-to-cart-divider">
                                            </div>
                                        </div>
                                        <div className="shipping-cart-2">
                                            <div>
                                                <span className="shipping-text">Shipping:</span> <span className="free-prime">Free With <a href="https://www.amazon.com/dp/B00DBYBNEE/ref=as_li_ss_tl?_encoding=UTF8&adid=0FB6XTG4SR674TC74TNR&primeCampaignId=prime_assoc_ft&linkCode=ll1&tag=personalproje-20&linkId=f4654b7435966fab56460148644e2b0e"> Prime!</a> </span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='/'><Button onClick={() => {this.props.addToCart(null); this.checkoutFunction()}} className="cart-add-to-cart" size="small" color='orange'>Checkout</Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <iframe className="right-box-ad" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=amzn_aucc_launch_0927&banner=1TEVC78CN3HNPRV107R2&f=ifr&linkID=41ca0070605a19e7040f15bd03505281&t=personalproje-20&tracking_id=personalproje-20" ></iframe>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}



export default connect(mapStateToProps , {addToCart})(Cart)