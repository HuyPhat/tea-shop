/**
 * Created by nowwe on 21/12/2016.
 */
import React from 'react'
import {Image} from 'react-bootstrap'
import './ProductItem.scss'
import {Link, browserHistory} from 'react-router'

class ProductItem extends React.Component {

    constructor(props) {
        super(props)
    }


    // navigateProductInfo(e, id) {
    //     browserHistory.push(`/product/${id}`)
    // }

    render() {
        const {data} = this.props
        return (
            <div className="product-block product-resize fixheight">
                <div className="product-img image-resize view view-third">
                    <a href={`product/${data.id}`} title={data.title}>
                        <div className="mask">
                            <img role="presentation"/>
                        </div>
                        <Image alt="Trà cúc san hô" src={data.url} responsive/>
                    </a>
                </div>
                <div className="product-detail clearfix">
                    <p className="nowprice">{data.nowPrice}</p>
                    <p className="wasprice">
                        <del>{data.wasPrice}</del>
                    </p>
                    <div className="product-name">
                        {/*<a href={`product/${data.id}`}>{data.title}</a>*/}
                        <Link to={`/product/${data.id}`}>{data.title}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem