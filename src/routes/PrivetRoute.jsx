import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) return <progress className="progress w-56 absolute top-1/2 left-1/2"></progress>

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" />
}
export default PrivetRoute;