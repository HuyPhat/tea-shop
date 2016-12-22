/**
 * Created by nowwe on 21/12/2016.
 */
import React from 'react'
import {Image} from 'react-bootstrap'
import './ProductItem.scss'
import {Link} from 'react-router'

class ProductItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {data} = this.props
        return (
            <div className="product-block product-resize fixheight">
                <div className="product-img image-resize view view-third">
                    <Link to={`/product/${data.id}`} title={data.title}>
                        <div className="mask">
                            <img role="presentation"/>
                        </div>
                        <Image alt="Trà cúc san hô" src={data.url} responsive/>
                    </Link>
                </div>
                <div className="product-detail clearfix">
                    <p className="nowprice">{data.nowPrice}</p>
                    <p className="wasprice">
                        <del>{data.wasPrice}</del>
                    </p>
                    <div className="product-name">
                        <Link to={`/product/${data.id}`}>{data.title}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem