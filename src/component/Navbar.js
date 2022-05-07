import React, { Component } from 'react';
import Styles from "./Navbar.module.css"
import logo from "../images/logo.jpg"




class Navbar extends Component {
    render() {
        return (
            <div>
                <div className={Styles.navbar}>
                    <ul className={Styles.menu}>
                        <li>Home page</li>
                        <li>Products</li>
                        <li>About us</li>
                    </ul>
                    <img src={logo} className={Styles.logo} />
                </div>
            </div>
        );
    }
}

export default Navbar;