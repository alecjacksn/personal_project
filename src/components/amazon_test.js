import React, { Component } from 'react'
// import aws from 'aws-lib'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from '../components/slider/ImageSlider'
import {updateProductid} from '../ducks/reducer'
import {connect} from 'react-redux'



// import amazon from 'amazon-product-api'
// var options = { SearchIndex: "Books", Keywords: "Deep Work" }

// var prodAdv = aws.createProdAdvClient(process.env.REACT_APP_AMAZONACCESSKEY, process.env.REACT_APP_AMAZONSECRETKEY, process.env.REACT_APP_AMAZONTAG);


// const client = amazon.createClient({
//     awsTag: process.env.REACT_APP_AMAZONTAG,
//     awsId: process.env.REACT_APP_AMAZONACCESSKEY,
//     awsSecret: process.env.REACT_APP_AMAZONSECRETKEY
// })



class AWS extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            images: [],
            productidClicked: ''
            

        }
    }


    componentDidMount() {
        axios.get('http://localhost:3232/api/products').then(res => {
            // console.log("component mount test: ", res) 
            this.setState({
                books: res.data,

            })
        })
        axios.get('http://localhost:3232/api/productimages').then(res => {
            console.log("image mount test: ", res.data)
            this.setState({
                images: res.data
            })
        })
    }



    imageFunction(e) {
        // var newArray = []
        var theImages = this.state.images
        for (var i = 0; i < theImages.length; i++) {
            if (theImages[i].prodid === e.productid) {
                var x = <img className="teeeee"src={theImages[i].mediumimage} />
                // newArray.push(theImages[i])
            }
        }
            return (x)
            // (
            //     <Slider images={newArray} >
            //     {newArray.slice(0).reverse().map((image, key) => <div key={key}><img src={image.mediumimage} alt="" /></div>)}
            //   </Slider>
            // )
        // })
    }



    //\\
    // \\                                                                    //
    //  \\                                                                  //
    //                       AMAZON SEARCH API                         //
    //                                                                  \\
    //                                                                    \\
    //                                                                      \\





    // componentDidMount() {
    //     axios.get('http://localhost:3232/test/amazon').then(res => {
    //         console.log("component mount: ", res.data[1])
    //         // console.log('books0', res.data[0].Offers[0].Offer[0].OfferListing[0].OfferListingId[0])
    //         this.setState({
    //             books: res.data
    //         })
    //     })
    // }


    // displayListings() {
    //     var display = this.state.books;

    //     return display.map((e, i) => {
    //         return (<div key={i}>
    //             <div>
    //                 <h3>Location: {i + 1}</h3>
    //                 <div>
    //                     ASIN: {e.ASIN[0]} <br />
    //                     <br />
    //                     {/* OfferListingId:  {e.Offers[0].Offer[0].OfferListing[0].OfferListingId} */}
    //                     <br />
    //                     <br />
    //                     Color: {e.ItemAttributes[0].Color}
    //                     <br />
    //                     <br />
    //                     Brand: {e.ItemAttributes[0].Brand}
    //                     <br />
    //                     <br />
    //                     Title: {e.ItemAttributes[0].Title[0]} <br />
    //                     <br />
    //                     {/* Price: {e.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0]} */}
    //                     {/* price: {e.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}, */}
    //                     <img src={e.MediumImage[0].URL} alt="" /><br />
    //                     <br />
    //                     <img src={e.ImageSets[0].ImageSet.URL} alt="" /><br />
    //                     <br />
    //                     <br />
    //                     Read Customer Reviews <a target="_blank" href={e.ItemLinks[0].ItemLink[5].URL[0]}>HERE</a>
    //                     <br />
    //                     <br />
    //                     Size: {e.ItemAttributes[0].Size}
    //                     <br />
    //                     <br />
    //                     Model: {e.ItemAttributes[0].Model}
    //                     <br />
    //                     <br />
    //                     Warranty: {e.ItemAttributes[0].Warranty}
    //                     <br />
    //                     <br />
    //                     Features:<br />
    //                     {e.ItemAttributes[0].Feature[0]}<br />
    //                     {e.ItemAttributes[0].Feature[1]}<br />
    //                     {e.ItemAttributes[0].Feature[2]}<br />
    //                     {e.ItemAttributes[0].Feature[3]}<br />
    //                     {e.ItemAttributes[0].Feature[4]}<br />
    //                     <br />
    //                 </div>
    //             </div>
    //             <br /><br />
    //             <br />
    //             <br />
    //         </div>


    //         )
    //     })

    // }



    // addToDatabase() {
    //     let testdata = {
    //         asin: this.state.books[1].ASIN[0],
    //         offerlistingid: this.state.books[1].Offers[0].Offer[0].OfferListing[0].OfferListingId[0],
    //         color: this.state.books[1].ItemAttributes[0].Color[0],
    //         brand: this.state.books[1].ItemAttributes[0].Brand[0],
    //         // price: this.state.books[3].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0],
    //         price: this.state.books[1].Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0],
    //         customerreview: this.state.books[1].ItemLinks[0].ItemLink[5].URL[0],
    //         productsize: this.state.books[1].ItemAttributes[0].Size[0],
    //         model: this.state.books[1].ItemAttributes[0].Model[0],
    //         displayImage: this.state.books[1].MediumImage[0].URL[0],
    //         warranty: this.state.books[1].ItemAttributes[0].Warranty,
    //         feature0: this.state.books[1].ItemAttributes[0].Feature[0],
    //         feature1: this.state.books[1].ItemAttributes[0].Feature[1],
    //         feature2: this.state.books[1].ItemAttributes[0].Feature[2],
    //         feature3: this.state.books[1].ItemAttributes[0].Feature[3],
    //         feature4: this.state.books[1].ItemAttributes[0].Feature[4],
    //         title: this.state.books[1].ItemAttributes[0].Title[0]
    //     }
    //     console.log(testdata)
    //     axios.post('http://localhost:3232/api/post', testdata)
    //         .then(response => {
    //             console.log("Posting Response: ", response)
    //         })
    //     // console.log('price: ', this.state.books[3].Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0],)
    // }







    //\\                                                                      //
    // \\                                                                    //
    //  \\                                                                  //
    //                       AMAZON SEARCH API                         //
    //                                                                  \\
    //                                                                    \\
    //                                                                      \\








    displayListings() {
        var display = this.state.books;
        
        return display.map((e, i) => {
            return (<div key={i}>
                <div>
                    <h3>Location: {i + 1}</h3>
                    <div>
                    {/* <Link to='/item'><button  onClick={() => this.props.updateProductid(e.productid)}> Product Id: {e.productid} </button></Link> */}
                        <br />
                        ASIN: {e.asin} <br />
                        <br />
                        OfferListingId: {e.offerlistingid}
                        <br />
                        <br />
                        {e.color ? 'Color: ' + e.color : null}
                        <br />
                        <br />
                        {e.brand ? 'Brand: ' + e.brand : null}
                        <br />
                        <br />
                        <Link to={`/item/${e.productid}`} ><a href="" onClick={() => this.props.updateProductid(e.productid)}>{e.title} </a></Link><br />
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
                        <br />
                        Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                        <br />
                        <br />
                        {e.size ? 'Size: ' + e.siza : null}
                        <br />
                        <br />
                        {e.model ? 'Model: ' + e.model : null}
                        <br />
                        <br />
                        {e.warranty ? 'Warranty: ' + e.warranty : null}
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
        // var {updateProductid} = this.props;
        
        return (
            <div>
                <h1>HOME PAGE</h1>
                <br />
                <br />
                <div>
                    <Link to='/login'><button>LOGIN</button></Link>
                    <Link to='/lights'><button>Lights</button></Link>
                    <Link to='/cart'><button>Cart</button></Link>
                    <Link to='/alexa'><button>ALEXA</button></Link>
                    <Link to='/google'><button>GOOGLE</button></Link>
             
                    <button onClick={() => this.addToDatabase()}>Add to DB</button>

                </div>
                {theRender}
                <div></div>
                {/* {theRender[1]} */}
                <br />
                {/* {theRender[2]} */}
                <br />
                {/* {theRender[6]} */}
                {/* {theRender[9]} */}
            </div>
        )
    }
}



function mapStateToProps(state) {
    console.log("RETURNED STATE:", state)
    return state
}

let actionOutputs = {
    updateProductid
}

export default connect(mapStateToProps, actionOutputs)(AWS)











// `http://webservices.amazon.com/onca/xml?
        //  AWSAccessKeyId=AKIAI27OAG776JDUVLYQ
        //  &AssociateTag=personalproje-20
        //  &Keywords=smart%20light%20switch
        //  &Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers
        //  &SearchIndex=Electronics&Service=AWSECommerceService
        //  &Timestamp=2017-09-11T19%3A28%3A16.000Z
        //  &Signature=bo21dz7eLwhitK8%2FmVNnpVQqbIai6SeP6IGUA1SIaao%3D`
