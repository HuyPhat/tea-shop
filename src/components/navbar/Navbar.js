/**
 * Created by nowwe on 21/12/2016.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import './Navbar.scss'

class Navbar extends Component {

    showMenu = (e) => {
        e.preventDefault()
        this.props.showMenu()
    }

    render() {
        return (
            <div>
                <div id="headerInner">
                    <section id="topBar">
                        <div id="topBarInner" className="container">
                            <div className="navLeft">
                                <div id="showMenu">
                                    <a className="menu" href="#" onClick={this.showMenu}>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </a>
                                </div>
                                <div id="logo">
                                    <Link to={'/'} id="logoInner">
                                        <img className="iconLogo" src="/images/logo.png" role="presentation"/>
                                    </Link>
                                </div>
                                <div id="showMenu"></div>
                            </div>
                            <div className="navRight"></div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Navbar