/**
 * Created by nowwe on 21/12/2016.
 */
import React, {Component} from 'react'
import './CategoryLeftSidebar.scss'

class CategoryLeftSidebar extends Component {
    handleSelectCategory = (e, id) => {
        e.preventDefault()
        this.props.onSelectCategory(id)
    }

    render() {
        const {category} = this.props
        return (
            <div className="list-group category-overview-left">
                <a className="category-overview-list-header">Danh mục sản phẩm</a>
                <ul className="nav category-overview-list-content">
                    {category.map((item,index) =>
                        <li key={index} className="category-overview-list-item">
                            <a className="category-overview-list-item-link" href="#" onClick={(event) => this.handleSelectCategory(event, item.id)}>{item.title}</a>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CategoryLeftSidebar