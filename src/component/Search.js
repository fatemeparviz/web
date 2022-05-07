import Styles from "./Search.module.css"


import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className={Styles.container}>
            <p>Search What You Want</p>
            <input placeholder='Search ...'/>
        </div>
        );
    }
}

export default Search;