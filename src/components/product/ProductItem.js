/**
 * Created by nowwe on 21/12/2016.
 */
import React from 'react'
import {Image, Glyphicon} from 'react-bootstrap'
import './ProductItem.scss'

const ProductItem = ({data}) => {
    return (
        <div className="product-block product-resize fixheight">
            <div className="product-img image-resize view view-third">
                <a href={`product/${data.id}`} title={data.name}>
                    <div className="mask">
                        <img/>
                    </div>
                    <Image alt="Trà cúc san hô" src={data.url} responsive/>
                </a>
            </div>
            <div className="product-detail clearfix">
                <p className="nowprice">135,000₫</p>
                <p className="wasprice">
                    <del>160,000₫</del>
                </p>
                <div className="product-name"><a href={`product/${data.id}`}>{data.name}</a></div>
            </div>
        </div>
    )
}

export default ProductItem