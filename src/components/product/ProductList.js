/**
 * Created by nowwe on 21/12/2016.
 */
import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
import ProductItem from './ProductItem'
import './ProductList.scss'

const ProductList = ({data}) => {
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

export default ProductList