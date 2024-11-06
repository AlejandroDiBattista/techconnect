import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Typography, Container, Grid2, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';

const carouselImages = [
    "./public/images/Carrusel-1.jpeg", 
    "./public/images/Carrusel-2.jpeg", 
    "./public/images/Carrusel-3.jpeg",      
];

export function Inicio() {
    return (
        <Container maxWidth="lg" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid2 container direction="column" alignItems="center" spacing={4}>

                {/* Carrusel de imágenes con margen superior */}
                <Grid2 item xs={12} style={{ width: '100%', marginTop: '250px' }}>
                    <Carousel>
                        {carouselImages.map((image, i) => (
                            <Paper key={i} style={{ position: 'relative', textAlign: 'center' }}>
                                <img
                                    src={image} 
                                    alt={`Imagen ${i + 1}`}
                                    style={{
                                        width: '100%',       
                                        height: '400px',     
                                        objectFit: 'cover',  
                                    }}
                                />
                                {/* Fondo negro transparente */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white', 
                                }}>
                                    {/* <Typography variant="h5">Texto sobre el carrusel</Typography> */}
                                </div>
                            </Paper>
                        ))}
                    </Carousel>
                </Grid2>

                {/* Encabezado */}
                <Grid2 item>
                    <Typography variant="h3" gutterBottom align="center">
                        Bienvenido a Techconnect
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{ maxWidth: '600px' }}>
                        En Techconnect, nos dedicamos a ofrecerte los mejores celulares, notebooks y tablets para mantenerte conectado en todo momento. Descubre nuestra amplia gama de productos y disfruta de la tecnología al alcance de tu mano.
                    </Typography>
                </Grid2>

                {/* Sección de productos con fondo gris */}
                <Grid2 item xs={12} style={{ width: '100%', backgroundColor: '#f0f0f0', padding: '20px' }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Nuestros productos
                    </Typography>
                    <Grid2 container spacing={4} justifyContent="center">
                        <Grid2 item xs={12} sm={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Notebook"
                                    height="140"
                                    image="./public/images/034.jpg"
                                />
                                <CardContent>
                                    <Typography variant="h6" align="center">
                                        Notebooks
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        component={RouterLink}
                                        to="/elegir/3"
                                        style={{ marginTop: '10px' }}
                                    >
                                        Ver más
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 item xs={12} sm={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Celulares"
                                    height="140"
                                    image="./public/images/002.jpg"
                                />
                                <CardContent>
                                    <Typography variant="h6" align="center">
                                        Celulares
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        component={RouterLink}
                                        to="/elegir/1"
                                        style={{ marginTop: '10px' }}
                                    >
                                        Ver más
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 item xs={12} sm={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Tablets"
                                    height="140"
                                    image="./public/images/044.jpg"
                                />
                                <CardContent>
                                    <Typography variant="h6" align="center">
                                        Tablets
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        component={RouterLink}
                                        to="/elegir/2"
                                        style={{ marginTop: '10px' }}
                                    >
                                        Ver más
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Sección "Sobre nosotros" */}
                <Grid2 item xs={12} style={{ width: '100%', padding: '20px' }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Sobre nosotros
                    </Typography>
                    <Typography variant="body1" align="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Techconnet es una tienda en línea dedicada a ofrecer una amplia gama de productos tecnológicos, incluyendo celulares,
                        tablets y notebooks. Nuestro objetivo es proporcionar a nuestros clientes dispositivos de la mejor calidad con un excelente
                        servicio al cliente. Nos enorgullecemos de contar con un equipo experto que está siempre dispuesto a ayudar en la elección
                        del producto perfecto para cada necesidad. Además, ofrecemos opciones de entrega rápida y segura para que puedas
                        disfrutar de tus compras sin demoras. En Techconnet, la satisfacción del cliente es nuestra prioridad, y trabajamos
                        arduamente para superar tus expectativas.
                    </Typography>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Inicio;

