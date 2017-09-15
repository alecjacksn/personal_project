import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/amazon_test'
import Lights from './components/Lights'
import Cart from './components/Cart'
import ItemClicked from './components/ItemClicked'
import AllAlexa from './components/AllAlexa'
import AllGoogle from './components/AllGoogle'
export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/lights' component={Lights} />
        <Route path='/cart' component={Cart} />
        <Route path='/Item/:id' component={ItemClicked} />
        <Route path='/alexa' component={AllAlexa} />
        <Route path='/google' component={AllGoogle} />
    </Switch>
)