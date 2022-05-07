import React from 'react';
import Styles from "./Support.module.css"
import samsung from "../images/samsung-logo.jpg"
import apple from "../images/apple-logo.png"
import xiaomi from "../images/xiaomi-logo.png"



const Support = () => {
    return (
        <div className={Styles.container}>
            <p>Who Support us?</p>
            <img src={samsung} alt="samsung-logo"/>
            <img src={apple} alt="apple-logo"/>
            <img src={xiaomi} alt="xiaomi-logo"/>


        </div>
    );
};

export default Support;