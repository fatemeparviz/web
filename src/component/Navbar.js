import React, { Component } from 'react';
import Styles from "./Navbar.module.css"
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom"




class Navbar extends Component {
    render() {
        return (
            <div>
                <div className={Styles.navbar}>
                    <ul className={Styles.menu}>
                        <li><Link to="/">Home page</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/">About us</Link></li>
                    </ul>
                    <img src={logo} className={Styles.logo} />
                </div>
            </div>
        );
    }
}

export default Navbar;