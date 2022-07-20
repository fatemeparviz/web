import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Landing from './component/Landing';
import {Navigate, Route,Routes} from "react-router-dom";
import Products from './component/Products';
import Aboutus from './Aboutus';
import DatailProducts from './DatailProducts';
import Notfound from './Notfound';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
            <Routes>
                  <Route path="/products" element={<Products/>} />
                  <Route path="/products/:id" element={<DatailProducts/>} />
                  <Route path='/' element={<Landing/>} />
                  <Route path="/aboutus" element={<Aboutus/>} />
                  <Route path='notfound' element={<Notfound/>}/>
                  <Route path='/*' element={<Navigate to="/Notfound" />} />
            </Routes>
          <Footer/>
      </div>
    );
  }
}

export default App;