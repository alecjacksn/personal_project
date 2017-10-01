import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import AllProducts from './components/AllProducts'
// import Lights from './components/Lights'
import Cart from './components/Cart'
import ItemClicked from './components/ItemClicked'
// import AllAlexa from './components/AllAlexa'
// import AllGoogle from './components/AllGoogle'
// import HomeKit from './components/HomeKit'
// import App from './App'
// import Wemo from './components/brands/WeMo'
import Login from './components/Auth0/Login'
import Home from './Home'
import Shop from './Shop'
export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/allproducts' component={AllProducts} /> */}
        {/* <Route path='/lights' component={Lights} /> */}
        <Route exact path='/cart' component={Cart} />
        <Route path='/Item/:id' component={ItemClicked} /> 
        {/* <Route path='/alexa' component={AllAlexa} /> */}
        {/* <Route path='/google' component={AllGoogle} /> */}
        {/* <Route path='/HomeKit' component={HomeKit} /> */}
        {/* <Route path='/wemo' component={Wemo} />  */}
        <Route path='/login' component={Login} />
        <Route path='/shop' component={Shop} />
    </Switch>
)