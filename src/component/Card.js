import React, { Component } from 'react';
import Styles from "./Card.module.css"

class Card extends Component {
    
    render() {
        const {image, name , price} = this.props
        return (
            <div className={Styles.Card}>
                <img src={image}/>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        );
    }
}

export default Card;