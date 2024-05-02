import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
// import NavigationForV5 from './NavigationForV5';
import NavigationForV6 from './NavigationForV6';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: ''
    }
  }
  render() {
    // let obj = {"name": "Aditya", "address" : { "city": "Delhi", "country": "india" }}
    return (
      <div className="App">
        <BrowserRouter>

          {/* <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav> */}

          {/* <NavigationForV5/> */}

          <NavigationForV6 />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
