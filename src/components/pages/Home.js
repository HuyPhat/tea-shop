/**
 * Created by phathuy on 12/21/16.
 */
import React  from 'react'
import ProductList from '../product/ProductList'
import CategoryLeftSidebar from '../sidebar/CategoryLeftSidebar'
import dataCategory from '../../../response/category.json'
import dataCategoryProducts from '../../../response/category-products.json'

class Home extends React.Component {

    constructor() {
        super()
        this.category = dataCategory.category
        this.productsByCat = dataCategoryProducts.data
        this.state = {
            loading: false,
            showMenu: false,
            pickedCategory: this.productsByCat.category[0]
        }
    }

    handleSelectCategory = (categoryId) => {
        this.setState({loading: true})
        let pickedCategory = []
        if (parseInt(categoryId,10) || categoryId === 0) {
            console.log("Category ", categoryId)
            const productsByCat = this.productsByCat.category
            pickedCategory = productsByCat.find((category) => {
                return category.id === categoryId
            })
            console.log('products ', pickedCategory)
            // this.setState({
            //     loading: false,
            //     pickedCategory
            // })
        }
        else {
            console.log('All Products')
        }
        setTimeout(() => {
            this.setState({
                loading: false,
                pickedCategory
            })
        },1000)
    }

    render () {
        const categories = this.productsByCat.category
        const {pickedCategory,loading} = this.state
        return (
            <div>
                {/*<aside id="leftSidebar1" className="col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs">*/}
                    {/*<CategoryLeftSidebar category={categories} onSelectCategory={this.handleSelectCategory}/>*/}
                {/*</aside>*/}
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="main-content">
                        {loading ? <div>Loading....</div> : <ProductList data={pickedCategory} />}
                    </div>
                </div>
            </div>
        )
    }

}

export default Home