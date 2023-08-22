import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// "react-router-dom": "^5.3.0",

class NavigationForV5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ''
        }
    }
    render() {
        
        return (
            <>


                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />

            </>
        );
    }
}

export default NavigationForV5;
