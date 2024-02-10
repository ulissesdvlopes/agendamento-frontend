import { Button } from '@mui/material';
import * as React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch(error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            Perfil
            <Button onClick={handleLogout}>Logout</Button>
        </div>

    )
}

export default Profile;
