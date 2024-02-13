import { useEffect, useState } from "react";
import { getSchedulings } from "../services/schedulings";
import { Box, Card, CardContent, CardHeader, Container, Divider, Fab, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Add, Build, Delete, DirectionsCar, Edit } from "@mui/icons-material";
import { getServiceName } from "../utils/schedulings";
import { useNavigate } from "react-router-dom";

function Schedulings() {

    const navigate = useNavigate();
    const [list, setList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await getSchedulings();
                setList(result);

            } catch (error) {
                console.log('error', error);
            }
        }
        getData();
    }, [])

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                Meus agendamentos
                </Typography>
                <Grid container spacing={2} sx={{marginTop:1}}>
                    {list.map(item => (
                        <Grid item xs={12} md={6}>
                        <Card >
                            <CardHeader
                                title={
                                    new Date(item.date).toLocaleDateString()
                                }
                                action={
                                    <>
                                    <IconButton aria-label="editar" onClick={() => navigate(`/app/${item.id}`)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton aria-label="editar">
                                        <Delete />
                                    </IconButton>
                                    </>
                                }
                            >
                            </CardHeader>
                            <Divider />
                            <CardContent>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DirectionsCar/>
                                        </ListItemIcon>
                                        <ListItemText primary={item.vehicle} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Build/>
                                        </ListItemIcon>
                                        <ListItemText primary={getServiceName(item.serviceType)} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
                
            </Box>
            <Fab color="primary" variant="extended" aria-label="Novo agendamento" 
                style={{position:'fixed', bottom:'2rem', right:'2rem'}}
                onClick={() => navigate('/app/new')}
            >
                    <Add/>
                    Novo agendamento
                </Fab>
        </Container>

    )
}

export default Schedulings;
