import Styles from "./Search.module.css"


import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state={
            search:""
        }
    }
     ChangeHandeler=(event)=>{
            this.setState({
                search:event.target.value
            })
        }
    
    render() {
        return (
            <div className={Styles.container}>
            <p>Search What You Want</p>
            <div className={Styles.search}>
            <input type="text" value={this.state.text} onChange={this.ChangeHandeler} placeholder='Search ...'/>
            <span>{this.state.search}</span>
            </div>
        </div>
        );
    }
}

export default Search;