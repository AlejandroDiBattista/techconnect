import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    Typography,
    Button,
    Card,
    CardContent,
    Container,
    Snackbar,
} from "@mui/material";
import DataService from "../datos/datos.js";
import { BotonRegresar } from "../components/BotonRegresar";
import { SelectorVariante } from "../components/SelectorVariante";

export function Detalle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [seleccionadas, setSeleccionadas] = useState(null);
    const [producto, setProducto] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    function calcularPrecio() {
        return producto.variantes.reduce((total, v, i) => total + v.valores[seleccionadas[i]].aumento, producto.precio);
    }

    function calcularVariantes() {
        return producto.variantes.map(({nombre,valores}, index) => 
            `${nombre}${valores[seleccionadas[index]].valor}`
        ).join("").toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    function ponerProducto(producto) {
        console.error("Producto", producto);
        setProducto(producto);
        const seleccion = Object.fromEntries(
            producto.variantes.map((_, index) => [index, 0]) // Selecciona la primera opción por defecto
        );
        setSeleccionadas(seleccion);
    }

    useEffect(() => {
        DataService.traerProducto(id).then((data) => ponerProducto(data));
    }, [id]);

    const elegirVariante = (varianteIndex, valorIndex) => {
        setSeleccionadas((prevSeleccionadas) => ({ ...prevSeleccionadas, [varianteIndex]: valorIndex }));
    };

    const comprarProducto = async () => {
        try {
            // Obtener o crear la compra activa
            const { compraId } = await DataService.traerCompraActiva();

            const variantes = calcularVariantes();
            console.log(`Agregando producto ${producto.id} con variantes ${variantes} a la compra ${compraId}`);

            await DataService.agregarProducto(compraId, producto.id, variantes);
            setOpenSnackbar(true);
            setSnackbarMessage("Producto agregado exitosamente");
            navigate('/compra');
        } catch (error) {
            console.error('Error en comprarProducto:', error);
            setOpenSnackbar(true);
            setSnackbarMessage("Error al procesar la compra: " + error.message);
        }
    };

    if (producto == null) {
        return (
            <Container>
                <BotonRegresar />
                <Typography variant="h4" gutterBottom>Producto no encontrado</Typography>
            </Container>
        );
    }
    return (
        <Container>
            <BotonRegresar />
            <Card>
                <CardContent>
                    <img src={DataService.traerImagen(producto.url_imagen)} alt={producto.nombre} style={{ width: "600px", height: "600px", objectFit: "cover" }} />
                    <Typography variant="h4" gutterBottom>Producto {producto.nombre}</Typography>
                    <Typography variant="body1">{producto.detalle}</Typography>
                    <Typography variant="h2" color="secondary">Precio: ${calcularPrecio()}</Typography>
                    <Typography variant="h5" gutterBottom>Variantes</Typography>
                    {producto.variantes.map((variante, i) => (
                        <SelectorVariante key={i} variante={variante} varianteIndex={i} seleccionado={seleccionadas[i]} onClick={elegirVariante} />
                    ))}
                    <Typography variant="body1" gutterBottom>Seleccionado: {calcularVariantes()}</Typography>
                    <Button variant="contained" color="primary" onClick={comprarProducto} style={{ marginTop: '20px' }}>Comprar</Button>
                    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} message={snackbarMessage} />
                </CardContent>
            </Card>
        </Container>
    );
}

export default Detalle;
