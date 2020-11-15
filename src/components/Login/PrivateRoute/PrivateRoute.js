import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;