import { Typography, Button, Grid2 as Grid, Card, CardContent, CardActions } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import Datos from '../datos/datos';

function addToCart() {
    alert('Producto añadido al carrito');
}

export function Elegir() {
    const { id } = useParams();

    let productos = Datos.traerCategoria(id);
    console.log('Elegir', id, productos);
    if (productos === null) {
        return (
            <Typography variant="h4" style={{ margin: '20px' }}>
                Categoría no encontrada
            </Typography>
        );
    }
    return (
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
            {productos.map((producto, index) => (
                <Grid xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <Link to={`/detalle/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardContent style={{ cursor: 'pointer' }}>
                                <img
                                    src={`/images/${producto.url_imagen}`}
                                    alt={producto.nombre}
                                    style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                                />
                                <Typography variant="h5">{producto.nombre}</Typography>
                                <Typography color="textSecondary">{producto.descripcion}</Typography>
                                <Typography variant="h6">${producto.precio}</Typography>
                            </CardContent>
                        </Link>
                        <CardActions>
                            <Button size="small" color="primary" onClick={addToCart}>
                                Añadir al Carrito
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}