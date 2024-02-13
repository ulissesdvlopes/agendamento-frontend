import { useEffect, useState } from "react";
import { getSchedulingById, getSchedulings, postScheduling, updateScheduling } from "../services/schedulings";
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, Container, Divider, Fab, FormControl, Grid, Icon, IconButton, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { Add, Build, CalendarMonth, Delete, DirectionsCar, Edit } from "@mui/icons-material";
import { SERVICE_TYPES, getServiceName } from "../utils/schedulings";
import { useNavigate, useParams } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

function Scheduling() {

    const { id } = useParams();
    const [form, setForm] = useState({
        vehicle: '',
        serviceType: '',
        date: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        if(id === 'new') return;
        const getData = async () => {
            try {
                const result = await getSchedulingById(id);
                setForm({
                    vehicle: result.vehicle,
                    serviceType: result.serviceType,
                    date: result.date,
                })

            } catch (error) {
                console.log('error', error);
            }
        }
        getData();
    }, [id])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleChangeDate = (value) => {
        setForm({...form, date: value.format('YYYY-MM-DD')});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(id === 'new') {
            handleAdd();
            return;
        }
        handleEdit();
    };

    const handleAdd = async () => {
        try {
            await postScheduling(form);
            navigate('/app');
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleEdit = async () => {
        try {
            await updateScheduling(id, form);
            navigate('/app');
        } catch (error) {
            console.log('error', error);
        }
    }

  return (
        <Container component="main" maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h5">
                {id === 'new' ? 'Novo agendamento': 'Editar agendamento'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="vehicle"
                    label="Veículo"
                    name="vehicle"
                    autoFocus
                    onChange={handleChange}
                    value={form.vehicle}
                />
                <FormControl sx={{ mt: 1 }} fullWidth required>
                    <InputLabel id="service-type-label">Tipo de serviço</InputLabel>
                    <Select
                        labelId="service-type-label"
                        id="service-type"
                        // multiple
                        value={form.serviceType}
                        name="serviceType"
                        onChange={handleChange}
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
                <DatePicker
                    label='Data *'
                    sx={{mt: 2, width:'100%'}}
                    defaultValue={moment()}
                    minDate={moment()}
                    format="DD/MM/YYYY"
                    // value={form.date ? form.date : null}
                    value={moment(form.date)}
                    onChange={handleChangeDate}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                Salvar
                </Button>
            </Box>
            </Box>
        </Container>
    );
}

export default Scheduling;
