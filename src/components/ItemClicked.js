import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/slider/ImageSlider'
import { connect } from 'react-redux'
import { getItem } from '../ducks/reducer'
import axios from 'axios'
import Typekit from 'react-typekit'
import { Button } from 'semantic-ui-react'
class ItemClicked extends Component {
    constructor() {
        super()

        this.state = {
            items: [],
            images: [],
            asin: ''
        }
    }



    componentDidMount() {
        // this.props.getItem(this.props.productid)
        // this.props.getImages(this.props.productid)
        // console.log("PRODCUT ID TEST: ",this.props.getItem(this.props.productid))
        // this.setState({
        //     items: this.props.getItem(this.props.productid)

        axios.get(`/api/item/${this.props.match.params.id}`)
            .then(res => {
                console.log("axios test: ", res.data)
                this.setState({
                    items: res.data,
                    asin: res.data[0].asin
                })

            })
        axios.get(`/api/item/image/${this.props.match.params.id}`).then(res => {
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
            <div className="pictures">
                <div>
                    <Slider images={newArray} >
                        {newArray.slice(0).reverse().map((image, key) => <div key={key}><img src={image.largeimage} alt="" /></div>)}
                    </Slider>


                </div>

            </div>
        )

    }

    displayListings() {
        var display = this.state.items;

        return display.map((e, i) => {
            return (<div key={i}>
                <div className="single-item-container">
                    <div className="single-item-content">
                        <div className="single-item-picture-slides">
                            {this.imageFunction(e)}
                            <div className="under-pictures">

                            </div>
                        </div>
                        <div className="single-main-content">
                            {/* Product Id: {e.productid} */}
                            <div className="single-title">
                                <h3> {e.title} </h3>
                                <h5>By <span className="single-brand-name">{e.brand}</span></h5>
                            </div>
                            <br />
                            Price: <span className="price-tag">{e.price}</span>
                            <br />
                            <a target="_blank" href="https://www.amazon.com/gp/cobrandcard/marketing.html/ref=as_li_ss_tl?pr=con321&inc=50gc&ts=dj4olmu3qkpm8djva91wdofa9yrotpf&dasin=B01NBI0A6R&plattr=math&place=priceblock&imp=A37QEOLC9YMVRU&linkCode=ll2&tag=personalproje-20&linkId=cbfedfce42965ddfb3034594acb16ef5"><h6>Get $50 off instantly: Pay $0.00 upon approval for the Amazon Rewards Visa Card.</h6></a>

                            {e.color ? e.color : null}
                            <br />

                            {/* price: {e.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}, */}
                            {/* <img src={e.MediumImage[0].URL} alt="" /><br /> */}
                            {/* <img src={e.ImageSets[0].ImageSet.URL} alt="" /><br /> */}
                            <br />
                            <div className="single-page-customer-reviews">
                                Read Customer Reviews <a target="_blank" href={e.customerreview} className="here-button"> HERE</a>

                                {e.size ? 'Size: ' + e.size : null}


                                {e.warranty ? 'Warranty: ' + e.warranty : null}
                                <br />

                            </div>
                            <div className="single-features">
                                <h3>Features</h3><br />
                            </div>
                            <ul className="feature-list">
                                <li>{e.feature0}</li><br />
                                <li>{e.feature1}</li>
                                <li>{e.feature2}</li>
                                <li>{e.feature3}</li>
                                <li>{e.feature4}</li>
                            </ul>


                        </div>
                    </div>
                </div>
                <br /> <br />
                <br />

            </div >


            )
        })

    }



    render() {
        let theRender = this.displayListings()
        // this.setState({
        //     item: this.props.item
        // })


        return (
            <div className="single-item-page-container">


                <div className="single-divider">


                    <div className="single-item-page">


                        <div className="single-item-page-item">
                            {theRender}
                        </div>
                        <div className="single-page-right-navbar">
                            <div className="right-share-section">
                                
                        </div>
                            <div className="single-right-box">
                                <div className="right-add-cart-section">
                                    <div className="cart-section">
                                    <a  target="_blank" href={`https://www.amazon.com/Light-Switch-Wi-Fi-enabled-Amazon/dp/${this.state.asin}/ref=sr_1_1?ie=UTF8&qid=1506878792&sr=8-1&keywords=B00DGEGJ02`} className="here-button"><div className="buy-from-amazon"></div></a>
                                        <div className="add-to-cart-divider">
                                        <Button className="add-to-cart" size="small" color='orange'>Add to Cart</Button>


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


export default connect(mapStateToProps, { getItem })(ItemClicked);