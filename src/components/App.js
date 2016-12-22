import React, {Component} from 'react';
import NavBar from './navbar/Navbar'
// import MainSidebar from './sidebar/MainSidebar'
// import CategoryLeftSidebar from './sidebar/CategoryLeftSidebar'
// import ProductList from './product/ProductList'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/App.scss';
import dataCategory from '../../response/category.json'
// import dataProductList from '../../response/product-list.json'
import dataCategoryProducts from '../../response/category-products.json'
import 'font-awesome/css/font-awesome.css'

class App extends Component {

    constructor() {
        super()
        this.category = dataCategory.category
        this.productsByCat = dataCategoryProducts.data
        this.state = {
            showMenu: false,
            // productList: dataProductList.productList,
            pickedCategory: this.productsByCat.category[0]
        }
    }

    showMenu = () => {
        const showMenu = this.state.showMenu
        this.setState({showMenu: !showMenu})
    }

    // handleSelectCategory = (categoryId) => {
    //     if (parseInt(categoryId,10) || categoryId === 0) {
    //         console.log("Category ", categoryId)
    //         const productsByCat = this.productsByCat.category
    //         const pickedCategory = productsByCat.find((category) => {
    //             return category.id === categoryId
    //         })
    //         console.log('products ', pickedCategory)
    //         this.setState({pickedCategory})
    //     }
    //     else {
    //         console.log('All Products')
    //     }
    //
    // }

    render() {
        // const categories = this.productsByCat.category
        // const {productList, pickedCategory} = this.state
        return (
            <div id='app' className={`${this.state.showMenu ? 'showMenu' : ''}`}>
                <header id="navbar">
                    <NavBar showMenu={this.showMenu}/>
                </header>
                <section id="middle1" className="clearfix container">
                    {this.props.children}
                </section>
                <footer id="footer"></footer>
            </div>
        );
    }
}

export default App;
