import React, {Component} from 'react';
import NavBar from './navbar/Navbar'
// import MainSidebar from './sidebar/MainSidebar'
import CategoryLeftSidebar from './sidebar/CategoryLeftSidebar'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/App.scss';
import response from '../../response/category.json'

class App extends Component {

    state = {
        showMenu: false,
        category: response.category
    }

    showMenu = () => {
        const showMenu = this.state.showMenu
        this.setState({showMenu: !showMenu})
    }

    render() {
        const {category} = this.state
        return (
            <div id='app' className={`${this.state.showMenu ? 'showMenu' : ''}`}>
                <header id="navbar">
                    <NavBar showMenu={this.showMenu}/>
                </header>
                <section id="middle1" className="clearfix container">
                    <aside id="leftSidebar1" className="col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                        <CategoryLeftSidebar category={category}/>
                    </aside>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12"></div>
                </section>
                <footer id="footer"></footer>
            </div>
        );
    }
}

export default App;
