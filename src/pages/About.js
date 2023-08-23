import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
// import { withReactRouterProps } from './withReactRouterPropsOld';
import { withReactRouterProps } from '@adityaindiadev/react-router-v6-class-props';

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
      <div onClick={()=>{
        this.props.navigate('/contact', {state: this.props?.location?.state});
      }}>
        <h2>About Page</h2>
        <p>This is the about page.</p>
      </div>
    );
  }
}

export default withReactRouterProps(About);
// export default About;
