import { useCallback, useEffect, useState } from "react";
import { deleteScheduling, getSchedulings } from "../services/schedulings";
import { Box, Card, CardContent, CardHeader, Container, Divider, Fab, FormControl, Grid, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { Add, Build, Delete, DirectionsCar, Edit, Search } from "@mui/icons-material";
import { SERVICE_TYPES, getServiceName } from "../utils/schedulings";
import { useNavigate, useSearchParams } from "react-router-dom";
import ConfirmDialog from "../components/ConfirmDialog/ConfirmDialog";

function Schedulings() {

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [list, setList] = useState([]);
    const [selectedToDelete, setSelectedToDelete] = useState(null);

    const getData = useCallback(async () => {
        try {
            const vehicle = searchParams.get('vehicle') ? searchParams.get('vehicle') : ''
            const serviceType = searchParams.get('serviceType') ? searchParams.get('serviceType') : ''
            const result = await getSchedulings(vehicle, serviceType);
            setList(result);

        } catch (error) {
            console.log('error', error);
        }
    }, [searchParams])

    useEffect(() => {
        getData();
    }, [getData])

    const handleDelete = async () => {
        try {
            await deleteScheduling(selectedToDelete?.id);
            setSelectedToDelete(null);
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    const setSearchVehicle = async (e) => {
        const { value } = e.target
        const serviceType = searchParams.get('serviceType') ? searchParams.get('serviceType') : ''
        setSearchParams(`vehicle=${value}&serviceType=${serviceType}`);
    }

    const setServiceType = async (e) => {
        const { value } = e.target
        const vehicle = searchParams.get('vehicle') ? searchParams.get('vehicle') : ''
        setSearchParams(`vehicle=${vehicle}&serviceType=${value}`);
    }

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
                    <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="search-vehicle">Pesquisar veículo</InputLabel>
                    <OutlinedInput
                        id="search-vehicle"
                        startAdornment={
                            <InputAdornment position="start">
                                <Search/>
                            </InputAdornment>}
                        label="Pesquisar veículo"
                        onChange={setSearchVehicle}
                        value={searchParams.get('vehicle')}
                    />
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="service-type-label">Tipo de serviço</InputLabel>
                        <Select
                            labelId="service-type-label"
                            id="service-type"
                            value={searchParams.get('serviceType')}
                            name="serviceType"
                            onChange={setServiceType}
                            input={<OutlinedInput label="Tipo de serviço" />}
                        >
                        {SERVICE_TYPES.map((item) => (
                            <MenuItem
                                key={item.value}
                                value={item.value}
                            >
                            {item.label}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>

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
                                    <IconButton aria-label="editar" onClick={() => setSelectedToDelete(item)}>
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
            <ConfirmDialog
                open={selectedToDelete !== null}
                handleClose={() => setSelectedToDelete(null)}
                title='Remover agendamento'
                content={`Deseja remover o agendamento do dia ${new Date(selectedToDelete?.date).toLocaleDateString()}?`}
                callback={handleDelete}
            />
        </Container>

    )
}

export default Schedulings;
