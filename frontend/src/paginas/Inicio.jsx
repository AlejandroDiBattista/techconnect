import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, Container, Grid2 as Grid } from '@mui/material';

export function Inicio() {
    return (
        <Container maxWidth="md" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        Bienvenido
                    </Typography>
                </Grid>
                <Grid item>
                    <nav>
                        <List>
                            <ListItem button component={RouterLink} to="/elegir/1">
                                <ListItemText primary="Celulares" />
                            </ListItem>
                            <ListItem button component={RouterLink} to="/elegir/2">
                                <ListItemText primary="Notebooks" />
                            </ListItem>
                            <ListItem button component={RouterLink} to="/elegir/3">
                                <ListItemText primary="Tablets" />
                            </ListItem>
                        </List>
                    </nav>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Inicio;
