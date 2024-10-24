import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Datos from '../datos/datos';
import { Typography, Button, Card, CardContent, Container, ButtonGroup } from '@mui/material';

export function Detalle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [precio, setPrecio] = useState(0);
    const [aumentos, setAumentos] = useState({});
    const [seleccionadas, setSeleccionadas] = useState({});
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        let tmpProducto = Datos.traerProducto(id);
        setProducto( tmpProducto );
        const aumentosIniciales = tmpProducto.variantes.reduce((acc, variante, index) => {
            acc[index] = variante.valores[0].aumento;
            return acc;
        }, {});

        const seleccionadasIniciales = tmpProducto.variantes.reduce((acc, variante, index) => {
            acc[index] = 0; // Selecciona la primera opción por defecto
            return acc;
        }, {});
        
        setAumentos(aumentosIniciales);
        setSeleccionadas(seleccionadasIniciales);
        
        const precioInicial = Object.values(aumentosIniciales).reduce((acc, curr) => acc + curr, tmpProducto.precio);
        setPrecio(precioInicial);
    }, [id]);

    function handleClick() {
        navigate(-1); // Esto hace que se navegue a la página anterior
    }

    const handleVarianteClick = (varianteIndex, valorIndex, aumento) => {
        setAumentos((prevAumentos) => {
            const nuevosAumentos = { ...prevAumentos, [varianteIndex]: aumento };
            const nuevoPrecio = Object.values(nuevosAumentos).reduce((acc, curr) => acc + curr, producto.precio);
            setPrecio(nuevoPrecio);
            return nuevosAumentos;
        });
        setSeleccionadas((prevSeleccionadas) => ({
            ...prevSeleccionadas,
            [varianteIndex]: valorIndex,
        }));
    };

    if(producto == null) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Producto no encontrado
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Regresar
                </Button>
            </Container>
        );
    }
    return (
        <Container>
            <Card>
                <CardContent>
                    <img
                        src={`/images/${producto.url_imagen}`}
                        alt={producto.nombre}
                        style={{ width: '600px', height: '600px', objectFit: 'cover' }}
                    />
                    <Typography variant="h4" gutterBottom>
                        Producto {producto.nombre}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {producto.detalle}
                    </Typography>
                    <Typography variant="h2" color="secondary">
                        Precio: ${precio || producto.precio}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Variantes
                    </Typography>
                    {producto.variantes.map((variante, index) => (
                        <Card key={index} variant="outlined" style={{ marginBottom: '16px' }}>
                            <CardContent>
                                <Typography variant="h6"> {variante.nombre} </Typography>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {variante.valores.map((valor, valorIndex) => (
                                        <Button 
                                            key={valorIndex} 
                                            value={valor.valor} 
                                            onClick={() => handleVarianteClick(index, valorIndex, valor.aumento)}
                                            variant={seleccionadas[index] === valorIndex ? 'contained' : 'outlined'}
                                        >
                                            {`${valor.valor} ${valor.aumento > 0 ? `+ $${valor.aumento}` : ''}`}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
}

export default Detalle;