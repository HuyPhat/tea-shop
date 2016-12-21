import React, {Component} from 'react';
import NavBar from './navbar/Navbar'
// import MainSidebar from './sidebar/MainSidebar'
import CategoryLeftSidebar from './sidebar/CategoryLeftSidebar'
import ProductList from './product/ProductList'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/App.scss';
import dataCategory from '../../response/category.json'
import dataProductList from '../../response/product-list.json'
import dataCategoryProducts from '../../response/category-products.json'

class App extends Component {

    constructor() {
        super()
        this.category = dataCategory.category
        this.productsByCat = dataCategoryProducts.data
    }

    state = {
        showMenu: false,
        // category: dataCategory.category,
        productList: dataProductList.productList,
        // productsByCat: dataCategoryProducts.data
    }

    showMenu = () => {
        const showMenu = this.state.showMenu
        this.setState({showMenu: !showMenu})
    }

    handleSelectCategory = (categoryId) => {
        console.log("Category ", categoryId)
        const productsByCat = this.productsByCat.category
        const products = productsByCat.find((category) => {
            return category.id === categoryId
        })
        console.log('products ', products)
    }

    render() {
        const category = this.category
        const {productList} = this.state
        return (
            <div id='app' className={`${this.state.showMenu ? 'showMenu' : ''}`}>
                <header id="navbar">
                    <NavBar showMenu={this.showMenu}/>
                </header>
                <section id="middle1" className="clearfix container">
                    <aside id="leftSidebar1" className="col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                        <CategoryLeftSidebar category={category} onSelectCategory={this.handleSelectCategory}/>
                    </aside>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="main-content">
                            {
                                productList.map((item, index) =>
                                    <ProductList key={index} data={item} />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12"></div>
                </section>
                <footer id="footer"></footer>
            </div>
        );
    }
}

export default App;
