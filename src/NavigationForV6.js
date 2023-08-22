import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// "react-router-dom": "^6.15.0",

class NavigationForV6 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ''
        }
    }
    render() {
        // let obj = {"name": "Aditya", "address" : { "city": "Delhi", "country": "india" }}
        return (


            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
            </Routes>


        );
    }
}

export default NavigationForV6;
