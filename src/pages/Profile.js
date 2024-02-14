import { Box, Button, Container, CssBaseline, Divider, TextField, Typography } from '@mui/material';
import * as React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch(error) {
            console.log('error', error);
        }
    }

    const handleSubmit = async () => {
        try {
            // await logout();
            navigate('/');
        } catch(error) {
            console.log('error', error);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Conta
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    InputLabelProps={{shrink: true}}
                    name="name"
                    value={user?.name}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="E-mail"
                    InputLabelProps={{shrink: true}}
                    value={user?.email}
                    disabled
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Nova senha"
                    type="password"
                />
                {/* <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirmar senha"
                type="password"
                id="confirm-password"
                /> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Salvar
                </Button>
            </Box>

                <Divider />

                <Button
                    onClick={handleLogout}
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                >
                    Logout
                </Button>
            </Box>
        </Container>

    )
}

export default Profile;
