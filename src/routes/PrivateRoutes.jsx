// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, role }) => {
    const user = localStorage.getItem("user"); // Parse the stored JSON data
    console.log(user);
    const location = useLocation();

    // Check if the user is not logged in
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Check if a role is required and doesn't match the user's role
    if (role && user !== role) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Render the children if all conditions pass
    return children;
};

export default PrivateRoute;
