import React from 'react';
import banner from "../images/banner.jpg"
import Styles from "./Slider.module.css"

const Slider = () => {
    return (
        <div>
            <img src={banner} alt="banner" className={Styles.banner} />
            <div className={Styles.ftext}>Botostart</div>
            <div className={Styles.stext}>We are learning <span className={Styles.react}>React.js</span> </div>


        </div>
    );
};

export default Slider;