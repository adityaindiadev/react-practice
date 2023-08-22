import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ReactRouterVersion } from '../Constants';
const DATA = {
    name: "Aditya",
    address: {
        city: "Delhi",
        country: "India"
    }
};

export const withNavigation = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Home extends Component {

    navigateToAboutForV5 = () => {
        this.props.history.push({
            pathname: "/about",
            state: { ...DATA } // Pass the data as state
        });
    };

    navigateToAboutForV6 = () => {
        this.props.navigate('/about', {state: {...DATA}});
    };

    navigateToAbout = () => {
        ReactRouterVersion === '6' ? this.navigateToAboutForV6() : this.navigateToAboutForV5()
    };



    componentDidMount() {
        console.log('props', this.props);
    }

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <p>Welcome to the home page!</p>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><button onClick={this.navigateToAbout}>GoToAboutWithData</button></li>
                        {/* <li><Link to="/about">About</Link></li> */}
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withNavigation(Home);
// export default Home;
