import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Cart extends Component {



    render() {
        return (
            <div>
                <h1>CART PAGE</h1>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/login'><button>Login</button></Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                test
            </div>
        )
    }
}

export default Cart