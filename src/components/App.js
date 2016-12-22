import React, {Component} from 'react';
import NavBar from './navbar/Navbar'
// import MainSidebar from './sidebar/MainSidebar'
import CategoryLeftSidebar from './sidebar/CategoryLeftSidebar'
// import ProductList from './product/ProductList'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/App.scss';
import dataCategory from '../../response/category.json'
// import dataProductList from '../../response/product-list.json'
import dataCategoryProducts from '../../response/category-products.json'

class App extends Component {

    constructor() {
        super()
        this.category = dataCategory.category
        this.productsByCat = dataCategoryProducts.data
        this.state = {
            showMenu: false,
            loading: true,
            pickedCategory: this.productsByCat.category[0]
        }
    }

    showMenu = () => {
        const showMenu = this.state.showMenu
        this.setState({showMenu: !showMenu})
    }

    componentDidMount() {
        console.log('aaa')
        this.setState({loading: false})
    }

    render() {
        const categories = this.productsByCat.category
        const {loading} = this.state
        return (
            <div id='app' className={`${this.state.showMenu ? 'showMenu' : ''}`}>
                <header id="navbar">
                    <NavBar showMenu={this.showMenu}/>
                </header>
                <section id="middle1" className="container">
                    <aside id="leftSidebar1" className="col-md-3 col-sm-12 col-xs-12 ">
                        <CategoryLeftSidebar category={categories}/>
                    </aside>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="main-content">
                            {loading ? <div>Loading....</div> : this.props.children}
                        </div>
                    </div>
                </section>
                <footer id="footer"></footer>
            </div>
        );
    }
}

export default App;
