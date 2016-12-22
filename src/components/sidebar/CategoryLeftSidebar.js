/**
 * Created by nowwe on 21/12/2016.
 */
import React, {Component} from 'react'
import './CategoryLeftSidebar.scss'
import {Link} from 'react-router'

class CategoryLeftSidebar extends Component {

    render() {
        const {category} = this.props
        return (
            <div className="list-group category-overview-left">
                {/*<a className="category-overview-list-header">DANH MỤC SẢN PHẨM</a>*/}
                <ul className="nav category-overview-list-content">
                    {/*<li className="category-overview-list-item"><a className="category-overview-list-item-link" href="#" onClick={(event) => this.handleSelectCategory(event, "all")}>TẤT CẢ SẢN PHẨM</a></li>*/}
                    {category.map((item,index) =>
                        <li key={index} className="category-overview-list-item">
                            {/*<a className="category-overview-list-item-link" href="#" onClick={(event) => this.handleSelectCategory(event, item.id)}>{item.title}</a>*/}
                            <Link className="category-overview-list-item-link" to={`/products/${item.id}`}>{item.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CategoryLeftSidebar