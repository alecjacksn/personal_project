import React, { Component } from 'react'
// import aws from 'aws-lib'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Slider from '../components/slider/ImageSlider'
import { updateProductid, homeButton, shopButton, getUserInfo } from '../ducks/reducer'
// import {getUserInfo} from '../ducks/userReducer'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Divider } from 'semantic-ui-react'
import amazonLogo from '../pictures/alexa_image.png'
import googleLogo from '../pictures/google-assistant.png'
import homeKit from '../pictures/works_with_homekit_badge_800.webp'



// import echoSpeaker from '../pictures/echo.png'
// import homepod from '../pictures/homepod.png'

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
            items: [],
            images: [],
            productidClicked: ''

        }
    }


    componentDidMount() { 
        this.props.getUserInfo();
        
        axios.get('http://localhost:3232/api/products').then(res => {
            this.setState({
                items: res.data,

            })
        })
        axios.get('http://localhost:3232/api/productimages').then(res => {
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
                var x = <Link to={`/item/${e.productid}`} ><a href="" onClick={() => this.props.updateProductid(e.productid)}><img className="display-images" src={theImages[i].largeimage} alt="" /></a></Link>
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




    // activateSearchbox(el) {
    //     el.classList.add('searchbox--active')
    // }
    // deactivateSearchbox(el) {
    //     el.classList.remove('searchbox--active')
    // }


    // onBlur() {
    //     deactivateSearchbox(document.querySelector('.searchbox'));
    // }

    // const items = [
    //     {
    //       childKey: 0,
    //       image: '/assets/images/wireframe/image.png',
    //       header: 'Header',
    //       description: 'Description',
    //       meta: 'Metadata',
    //       extra: 'Extra',
    //     },

    // displayListings() {
    //     var display = this.state.items;

    //     return display.map((e, i) => {
    //         return (<div key={i}>
    //             <div className="mapped-products">
    //                 <div>
    //                     <div className="mapped-info">
    //                         <div className="mapped-basic-info">
    //                             <div className="mapped-title">
    //                                 <Link to={`/item/${e.productid}`} ><a href="" onClick={() => this.props.updateProductid(e.productid)}>{e.title} </a></Link><br />
    //                             </div>
    //                             <br />
    //                             {e.color ? 'Color: ' + e.color : null}
    //                             <br />
    //                             {e.brand ? 'Brand: ' + e.brand : null}
    //                             <br />
    //                             <br />
    //                             <br />
    //                             Price: {e.price}
    //                             <br />
    //                             Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
    //                         </div>
    //                         <div className="mapped-image">
    //                             {this.imageFunction(e)}
    //                         </div>
    //                     </div>

    //                 </div>

    //             </div>
    //             <br /><br />
    //             <br />
    //             <br />
    //         </div>


    //         )
    //     })
    // }


    render() {
        // var {updateProductid} = this.props;
        return (
            <div className="container">
                {/* <h1>HOME PAGE</h1> */}
                <section className="homepage-header">
                    <div className="homepage-header-top-navbar">
                            <Link to='/'><div className='header-logo'>
                                <span  className='header-logo-w'>W</span><div className="logo-splitter">Wafta</div>
                        <div className="logo-button">
                            </div>
                        </div></Link>
                        <div>
                          
                           
                            <input className="homepage-searchbar" placeholder="Search" />
                            <div className="homepage-login-cart">
            
                        {this.props.user.id ? <a href='http://localhost:3232/auth/logout'><Button className="cart-button-yo" size="large" animated='vertical'>
                                    <Button.Content hidden>Logout</Button.Content>
                                    <Button.Content visible>
                                        Hi {this.props.user.firstname.split(" ")[0]}!
                                    </Button.Content>
                                </Button></a> 
                                :
                            <a href={ process.env.REACT_APP_LOGIN }><Button className="cart-button-yo" size="large" animated='vertical'>
                                    <Button.Content hidden>Login</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='user' />
                                    </Button.Content>
                                </Button></a>
                                 }
                                <div className="login-cart-splitter"></div>
                                <Link to='/shop'><Button className="cart-button-yo cart-shopall" size="large" >
                                    <Button.Content visible>
                                        Shop
                                </Button.Content>
                                </Button> </Link>
                                <div className="login-cart-splitter"></div>
                                <Link to='/cart'><Button className="cart-button-yo" size="big">
                                    <Button.Content visible>
                                        <Icon name='shop' />
                                    </Button.Content>
                                </Button>    </Link>
                            </div>
                        </div>

                        {/* <select className="homepage-select-dropdown">
                                <option value="all">All</option>
                                <option value="lights">Lights</option>
                                <option value="light_switches">Light Switches</option>
                                <option value="wall_plug">Wall Plugs</option>
                                <option value="smart_speakers">Smart Speakers</option>
                            </select> */}
                        {/* <Dropdown className="homepage-select-dropdown" search selection options={dropdownOptions} /> */}
                        {/* <button className="submit-button" type="submit"></button> */}
                    </div>

                    {/* <div className="homepage-main-navbar">
                        <div className="alexa-button-div">
                            <img className="echo-image" src={echoSpeaker} alt="" /> 
                            <div className="alexa-divider">
                            <Link to='/alexa'><img src={amazonLogo} alt="" className="alexa-button" /></Link>
                            </div>
                        </div>

                        <div className="google-button-div">
                            <div className="google-home-image">
                   
                   
                            <Link to='/google'><img src={googleLogo} alt="" className="google-button" /></Link>
                            </div>
                        </div>
                        <div className="alexa-button-div">
    
                            <div className="homekit-divider">
                            <Link to='/homekit'><img src={homeKit} alt="" className="homekit-button" /></Link>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="divider">

                 
                    </div> */}


                    {/* <button onClick={() => this.addToDatabase()}>Add to DB</button> */}

                </section>
                <div></div>
            </div >
        )
    }
}



function mapStateToProps(state) {
    // console.log("RETURNED STATE:", state)
    return state
}

let actionOutputs = {
    updateProductid,
    homeButton,
    shopButton,
    getUserInfo
}

export default connect(mapStateToProps, actionOutputs)(AWS)






getUserInfo








// `http://webservices.amazon.com/onca/xml?
        //  AWSAccessKeyId=AKIAI27OAG776JDUVLYQ
        //  &AssociateTag=personalproje-20
        //  &Keywords=smart%20light%20switch
        //  &Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers
        //  &SearchIndex=Electronics&Service=AWSECommerceService
        //  &Timestamp=2017-09-11T19%3A28%3A16.000Z
        //  &Signature=bo21dz7eLwhitK8%2FmVNnpVQqbIai6SeP6IGUA1SIaao%3D`
