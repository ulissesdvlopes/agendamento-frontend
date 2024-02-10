import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AuthHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Agendamentos
                </Typography>
                <Button component={Link} to={'/app'} color="inherit">Meus agendamentos</Button>
                <Button component={Link} to={'/app/conta'} color="inherit">Conta</Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default AuthHeader;