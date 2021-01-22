import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import AllProducts from './components/AllProducts'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'


function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={AllProducts} />
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/cart" component={Cart} />
                    <Route path="*" component={ () => <h2>404 Not Found</h2>} />
                </Switch>
            </Router>

        </div>
    )
}

export default RouteConfig
