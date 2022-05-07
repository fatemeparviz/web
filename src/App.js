import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Cards from './component/Cards';
import Search from './component/Search';
import Support from './component/Support';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Slider/>
        <Cards/>
        <Search/>
        <Support/>
        <Footer/>
      </div>
    );
  }
}

export default App;