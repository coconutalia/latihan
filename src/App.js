import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="banner">
        <Product judul="PB" harga="1000"/>
      </div>
      <div className="kolom" >
        <div className="bor">
        <Product judul="PB"/> <div className="org"> harga="1000"</div>
        <Product judul="PB"/> <div className="org"> harga="1000"</div>
        <Product judul="PB"/> <div className="org"> harga="1000"</div>
        <Product judul="PB"/> <div className="org"> harga="1000"</div>
        </div>
      </div>
    );
  }
}

export default App;
