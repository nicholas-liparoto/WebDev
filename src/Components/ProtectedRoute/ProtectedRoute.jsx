import React from "react";
import { Navigate } from "react-router-dom";
import {checkUser} from "../Auth/AuthService.jsx";

const ProtectedRoute = ({element: Component, ...rest}) => {
    console.log("Element: ", Component);

    // check user
    if (checkUser()) {
        return <Component />;
    } else {
        return <Navigate to="/auth" replace />
    };

};

export default ProtectedRoute;