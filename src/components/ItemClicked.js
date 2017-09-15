import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/slider/ImageSlider'
import {connect} from 'react-redux'
import {getItem} from '../ducks/reducer'
import axios from 'axios'


class ItemClicked extends Component {
    constructor() {
        super()

        this.state = {
            items: [],
            images: []
        }
    }



    componentDidMount() {
        // this.props.getItem(this.props.productid)
        // this.props.getImages(this.props.productid)
        // console.log("PRODCUT ID TEST: ",this.props.getItem(this.props.productid))
        // this.setState({
        //     items: this.props.getItem(this.props.productid)
        // })
            console.log("Product Id: ", this.props.productid)
            axios.get(`http://localhost:3232/api/item/${this.props.match.params.id}`)
            .then(res => {
                console.log("axios test: ", res.data)
                this.setState({
                    items: res.data
                })
                
            })
            axios.get(`http://localhost:3232/api/item/image/${this.props.match.params.id}`).then(res => {
                console.log("image mount test: ", res.data)
                this.setState({
                    images: res.data
                })
            })
        }
        // console.log("COMP TEST: ", this.state.items)
       
    

    imageFunction(e) {
        var newArray = []
        var theImages = this.state.images
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
            //   var x = theImages[i].mediumimage
                newArray.push(theImages[i])
            }
        }
        // return (<img src={x} alt="" />)
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
        // this.setState({
        //     item: this.props.item
        // })
        
        
        return (
            <div>
                <h1>ItemClicked</h1>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/login'><button>Login</button></Link>
                <div>
                    {theRender}

        

                    {/* loading: {this.props.loading}  */}
                
                    
                    {/* {console.log(this.props.updateProductid(this.state.productid))} */}
                    {/* <div>{this.props.updateProductid(this.state.productid) ? this.props.productid : "falseeeee"}</div> */}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}


export default connect(mapStateToProps, {getItem})(ItemClicked);