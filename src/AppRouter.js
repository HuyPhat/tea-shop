/**
 * Created by phathuy on 12/21/16.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import App from './components/App'
import NotFound from './components/notfound/NotFound'
import ProductInfo from './components/product/ProductInfo'
import ProductList from './components/product/ProductList'

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ProductList}/>
                    <Route path="/products/:id" component={ProductList}/>
                    <Route path="/product/:id" component={ProductInfo}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter