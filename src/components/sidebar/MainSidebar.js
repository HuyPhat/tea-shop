/**
 * Created by nowwe on 21/12/2016.
 */
import React, {Component} from 'react'
import './MainSidebar.scss'

class MainSidebar extends Component {
    render() {
        return (
            <div id="mainSidebar">
                <div id="sideBarInner">
                    <nav id="categoryNav">
                        <section>
                            <div><a href="/">Trang Chủ</a></div>
                            <div><a href="/bestSelling">Bán Chạy</a></div>
                            <div><a href="/aromaticBeverage">Trà</a></div>
                            <div><a href="/christmas">Giáng Sinh</a></div>
                        </section>
                    </nav>
                    <div className="sticky" id="mainSticky">
                        <a href="#" className="backtotop"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSidebar