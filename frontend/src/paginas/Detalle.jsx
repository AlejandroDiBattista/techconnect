import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    Container,
    Snackbar,
    Box,
} from "@mui/material";
import DataService from "../datos/datos.js";
import { BotonRegresar } from "../components/BotonRegresar";
import { SelectorVariante } from "../components/SelectorVariante";
import { Card, Flex, Text , Button} from "@radix-ui/themes";

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

    useEffect(() => { DataService.traerProducto(id).then((data) => ponerProducto(data)) }, [id]);

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
                <Text size="h4" gutterBottom>Producto no encontrado</Text>
            </Container>
        );
    }
    return (
            <>
                <BotonRegresar />
                <Card>
                        <img src={DataService.traerImagen(producto.url_imagen)} alt={producto.nombre} style={{ width: "600px", height: "600px", objectFit: "cover" }} />
                        <Flex direction="column" gap="2" align="start" justify="between" >
                        <Text size="4" as="p">{producto.nombre}</Text>
                        <Text size="1" as="p">{producto.detalle}</Text>
                        <Text size="3" as="p">Precio: ${calcularPrecio()}</Text>
                        <Text size="1" as="p">Variantes</Text>
                        <Flex direction="column" gap="2" align="start" justify="between" >
                        {producto.variantes.map((variante, i) => (
                            <SelectorVariante key={i} variante={variante} varianteIndex={i} seleccionado={seleccionadas[i]} onClick={elegirVariante} />
                        ))}
                        </Flex>
                        <Text size="1"  as="p">Seleccionado: {calcularVariantes()}</Text>
                        <Button size="2" variant="soft" onClick={comprarProducto}>Agregar al Carrito</Button>
                        </Flex>
                        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} message={snackbarMessage} />
                </Card>
            </>
    );
}

export default Detalle;
