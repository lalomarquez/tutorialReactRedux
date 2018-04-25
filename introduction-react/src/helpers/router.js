// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from '../components/App'
import Home from '../components/Home'
import Product from '../components/Product'
import Cart from '../components/Cart'
import ShoppingCart from '../components/ShoppingCart'
import Page404 from '../components/Page404'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/cart' component={Cart} />
            <Route exact path="/productList" component={Product} />
            <Route exact path="/shoppingCart" component={ShoppingCart} />            
            <Route component={Page404} />
        </Switch>
    </App>
export default AppRoutes