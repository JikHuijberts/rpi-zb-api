import { Redirect, Route } from 'react-router-dom';
import React from 'react';


export const PrivateRoute = ({component:Component, ...rest}:any) =>(
  <Route
    {...rest}
    render={(props) =>
      true ? (
          <Component {...props} />
      ):(
        <Redirect
          to={{pathname: '/', state: {from:props.location}}}
        />
      )
    }
  />
)
