import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Landing from './component/Landing';
import {Route,Switch} from "react-router-dom";
import Products from './component/Products';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
            <Switch>
                  <Route path="/products" component={Products} />
                  <Route path='/' component={Landing} />
            </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App;