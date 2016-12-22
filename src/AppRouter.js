/**
 * Created by phathuy on 12/21/16.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/pages/Home'
import NotFound from './components/notfound/NotFound'
import ProductInfo from './components/product/ProductInfo'

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="products/:id" component={Home}/>
                    <Route path="product/:id" component={ProductInfo}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter