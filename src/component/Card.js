import React, { Component } from 'react';
import Styles from "./Card.module.css"
import up from "../images/circle-arrow-up-solid.svg"
import down from "../images/circle-arrow-down-solid.svg"
import { click } from '@testing-library/user-event/dist/click';


class Card extends Component {
    
    constructor(){
        super()
        this.state={
            counter:0
        }
    }

    clickUp=()=>{
        this.setState((prevState)=>({
            counter:prevState.counter + 1,
            // counter: prevState.target.value+1
            
        }))
    }

    clickDown=()=>{
        if(this.state.counter >= 1){
            this.setState((prevState)=>({
                counter:prevState.counter -1
               
            }))
        }
        
    }

    render() {
        const {image, name , price} = this.props
        let {counter}=this.state
        return (
            <div className={Styles.Card}>
                <img src={image}/>
                <h3>{name}</h3>
                <p>{price} { counter  ? ` *${counter}=  ${ counter * Number(price.split(" ")[0])} $`  : ""  }</p>
                <div className={Styles.counter} >
                    <img src={up} alt="arrow" onClick={this.clickUp} />
                    <span>{counter}</span>
                    <img src={down} alt="arrow" className={!counter &&  Styles.deactive } onClick={this.clickDown} />
                </div>
            </div>
        );
    }
}

export default Card;