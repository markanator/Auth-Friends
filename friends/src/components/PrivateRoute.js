import React from "react";
import { Route, Redirect } from "react-router-dom";

// Private Route requirements
// 1. It has the same API as <Route />
// 2. It renders a Route and apasses all the props
// 3. It checks if the user is authenticated, render is yes
// otherwise, redirect to login

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props =>
            // if token, render component
            localStorage.getItem("token") ? (
            <Component {...props} />
            ) : (
            (<Redirect to="/login" />, console.log("redirecting..."))
            )
        }
        />
    );
};

export default PrivateRoute;
