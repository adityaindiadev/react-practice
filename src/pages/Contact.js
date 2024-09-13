import React, { Component } from 'react';
import { withReactRouterProps } from 'react-router-v6-class-props';
// import { withReactRouterProps } from './withReactRouterPropsOld';
// import { withReactRouterProps } from 'react-router-v6-class-props';

class Contact extends Component {

  componentDidMount() {
    console.log('props', this.props);
    console.log("data", this.props?.location?.state);
}

  render() {
    return (
      <div>
        <h2>Contact Page</h2>
        <p>You can contact us here.</p>
      </div>
    );
  }
}

export default withReactRouterProps(Contact);
