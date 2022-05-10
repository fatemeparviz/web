import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css"
import iphone11 from "../images/iphone11.jpg"
import iphone12 from "../images/iphone12.jpg"
import iphone13 from "../images/iphone13.jpg"
import s21 from "../images/s21.jpg"

class Cards extends Component {

    constructor(){
        super()
        this.state={
                userPhone:[
                {id:1, image:iphone11 , name:"Iphone11" ,price:"600 $"},
                {id:2,image:iphone12 , name:"Iphone12" ,price:"800 $"},
                {id:3,image:iphone13 , name:"Iphone13" ,price:"950 $"},
                {id:4,image:s21 , name:"S21 Ultra" ,price:"900 $"}
        ]
        }
    }

    render() {
        return (
            <div className={styles.Cards}>
                {this.state.userPhone.map(phone=><Card key={phone.id} image={phone.image} name={phone.name} price={phone.price} />)} 
            </div>
        );
    }
}

export default Cards;