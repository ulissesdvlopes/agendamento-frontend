import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthHeader from '../Header/AuthHeader';
import useAuth from '../../hooks/useAuth';

function AuthLayout() {
    const { user } = useAuth();
    
    if(user === null) {
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <AuthHeader />
            <Outlet />
        </div>

    )
}

export default AuthLayout;
