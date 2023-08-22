import React, { Component } from 'react';
import { useLocation } from "react-router-dom";

export const  withLocation = (Component) => {
    return props => <Component {...props} location={useLocation()} />;
  } 

class About extends Component {

    componentDidMount() {
        console.log('props', this.props);
        console.log("data", this.props?.location?.state);
    }

  render() {
    return (
      <div>
        <h2>About Page</h2>
        <p>This is the about page.</p>
      </div>
    );
  }
}

export default withLocation(About);
// export default About;
