import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'underscore-node'
import {imageFunction} from './imageFunction'


export function displayListings (brands, price, items, images, filterBrandsTF, filterBrands) {
    var xLength = brands
    var pLength = price
    var display = items;
    var brandsFilteredDisplay = _.without(brands, items)

    if (xLength.length < 1) {
        filterBrandsTF(false)
    }
    if (filterBrands) {
        return display.map((e, i) => {
            if (brandsFilteredDisplay.includes(e.brand)) {
                return (<div key={i}>
                    <div className="mapped-products">
                        <div className="products-div-container">
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
                                    Price: {e.price}
                                    <br />
                                    <br />
                                    Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                                </div>
                                <div className="mapped-image">
                                    {imageFunction(e, images)}
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
                                Price: {e.price}
                                <br />
                                <br />
                                Read Customer Reviews <a target="_blank" href={e.customerreview}>HERE</a>
                            </div>
                            <div className="mapped-image">
                                {imageFunction(e, images)}
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

export default displayListings