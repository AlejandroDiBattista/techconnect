import DataService from "../datos/datos.js";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Text, Card, Flex, Inset, Grid } from "@radix-ui/themes"
import { Accion } from "../components/Accion";
import { Expandir } from "../components/Expandir";

export function Elegir() {
    const { id: idCategoria } = useParams();
    const [ productos, setProductos ] = useState([]);

    useEffect(
        () => {
            DataService.traerProductosPorCategoria(idCategoria).then(setProductos);
        },
        [idCategoria]
    );

    if(productos.length === 0) {
        return <Text size="9">No hay ningun producto para esta categoria</Text>;
    }
    
    return (
        <Grid columns="3" gap="3">
            { productos.map((producto, index) => (
                <Link to={`/detalle/${producto.id}`} style={{ color: "inherit", textDecoration: "none" }} >
                    <Card size="2" key={index} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Inset clip="padding-box" side="top" pb="current">
                            <img src={DataService.traerImagen(producto.url_imagen)} width="100%" />
                        </Inset>
                        <Flex direction="column" gap="2" align="start" style={{ flex: 1 }}>
                            <Text size="3" weight="bold">{producto.nombre}</Text>
                            <Text size="1" >{`${producto.detalle}`}</Text>
                            <Text size="5" weight="bold">${producto.precio}</Text>
                            <Expandir />
                            <Accion texto="Ver Producto" />
                        </Flex>
                    </Card>
                </Link>
            )) }
        </Grid>
    );
}
