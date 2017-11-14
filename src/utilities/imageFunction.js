import {Link} from 'react-router-dom'
import React, {Component} from 'react'


   export function imageFunction(e, images) {
        for (var i = 0; i < images.length; i++) {
            if (images[i].prodid === e.productid) {
                var x = <Link to={`/item/${e.productid}`} ><img className="display-images" src={images[i].largeimage} alt="" /></Link>
            }
        }
        return (x)
    }
