import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product'

class Banner extends Component {
    render() {
      return (
        <div className="banner" >
          <Product judul="PB" harga="1000"/>
        </div>
      );
    }
  }
  
  export default App;