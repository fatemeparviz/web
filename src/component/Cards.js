import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css"
import iphone11 from "../images/iphone11.jpg"
import iphone12 from "../images/iphone12.jpg"
import iphone13 from "../images/iphone13.jpg"
import s21 from "../images/s21.jpg"

class Cards extends Component {
    render() {
        return (
            <div className={styles.Cards}>
                <Card image={iphone11} name="Iphone11" price="600$"/>
                <Card image={iphone12} name="Iphone12" price="800$"/>
                <Card image={iphone13} name="Iphone13" price="950$"/>
                <Card image={s21} name="S21 Ultra" price="900$"/>




            </div>
        );
    }
}

export default Cards;