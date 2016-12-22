/**
 * Created by nowwe on 22/12/2016.
 */
import React from 'react'
import {Col} from 'react-bootstrap'
import ProductItem from './ProductItem'
import './ProductList.scss'
import dataCategoryProducts from '../../../response/category-products.json'

class ProductGrid extends React.Component {
    constructor(props) {
        super(props)
        this.productsByCat = dataCategoryProducts.data
        this.state = {
            loading: true
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({loading: true})
        const categoryId = parseInt(newProps.params.id, 10) || 0
        console.log("New CategoryId: ", categoryId)
        const data = this.productsByCat.category.find((item) => {
            return item.id === categoryId
        })
        console.log(data)
        setTimeout(() => {
            this.setState({
                loading: false,
                data
            })
        }, 1000)
    }

    componentDidMount() {
        const categoryId = parseInt(this.props.params.id, 10) || 0
        let data = []
        if (categoryId) {
            data = this.productsByCat.category.find((item) => {
                return item.id === categoryId
            })
        }
        else {
            data = this.productsByCat.category[0]
        }
        setTimeout(() => {
            this.setState({
                loading: false,
                data
            })
        }, 1000)
    }

    render() {
        const {data, loading} = this.state
        if (loading) {
            return (<div>Loading...</div>)
        }
        else {
            return (
                <div className="product-list clearfix">
                    <div className="title-line">
                        <h3>{data.title}</h3>
                    </div>
                    <div className="row content-product-list">
                        {
                            data.products.map((item, index) =>
                                <Col key={index} md={4} xs={6} sm={6}>
                                    <ProductItem data={item}/>
                                </Col>
                            )
                        }
                    </div>
                </div>
            )
        }

    }
}

export default ProductGrid