import DataService from "../datos/datos.js";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SelectorVariante } from "../components/SelectorVariante";
import { Card, Flex, Text, Button, Container } from "@radix-ui/themes";

export function Detalle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [seleccionadas, setSeleccionadas] = useState([]);
    const [producto, setProducto] = useState(null);

    function calcularPrecio() {
        return producto.variantes.reduce((total, v, i) => total + v.valores[seleccionadas[i]].aumento, producto.precio);
    }

    function calcularVariantes() {
        return producto.variantes
            .map(({ nombre, valores }, index) =>`${nombre}${valores[seleccionadas[index]].valor}`)
            .join("")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '');
    }

    function ponerProducto(producto) {
        setProducto(producto);
        setSeleccionadas(new Array(producto.variantes.length).fill(0));
    }

    useEffect(() => { DataService.traerProducto(id).then((data) => ponerProducto(data)) }, [id]);

    const elegirVariante = (variante, valor) => {
        setSeleccionadas(prev => prev.map((v, i) => i === variante ? valor : v));
    };

    const comprarProducto = async () => {
        try {
            // Obtener o crear la compra activa
            const { compraId } = await DataService.traerCompraActiva();

            const variantes = calcularVariantes();
            console.log(`Agregando producto ${producto.id} con variantes ${variantes} a la compra ${compraId}`);

            await DataService.agregarProducto(compraId, producto.id, variantes);
            navigate('/compra');
        } catch (error) {
            console.error('Error en comprarProducto:', error);
        }
    };

    if (producto == null) {
        return (
            <Container>
                <Text size="4">Producto no encontrado</Text>
            </Container>
        );
    }
    return (
        <>
            <Card>
                <img src={DataService.traerImagen(producto.url_imagen)} alt={producto.nombre} style={{ width: "400px", height: "400px", objectFit: "cover" }} />
                <Flex direction="column" gap="2" align="start" justify="between" >
                    <Text size="6" as="p" weight="bold">{producto.nombre}</Text>
                    <Text size="1" as="p">{producto.detalle}</Text>
                    <Text size="3" as="p" weight="bold">Precio: ${calcularPrecio()}</Text>
                    <Text size="1" as="p">Variantes</Text>
                    <Flex direction="column" gap="2" align="start" justify="between" >
                        {producto.variantes.map((variante, i) => (
                            <SelectorVariante key={i} variante={variante} seleccion={seleccionadas[i]} onClick={valor => elegirVariante(i, valor) } />
                        ))}
                    </Flex>
                    <Button size="2" variant="soft" onClick={comprarProducto}>Agregar al Carrito</Button>
                </Flex>
            </Card>
        </>
    );
}

export default Detalle;
