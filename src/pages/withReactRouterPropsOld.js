import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const  withReactRouterPropsOld = (Component) => {
    return props => <Component {...props} location={useLocation()} navigate={useNavigate()}/>;
  } 