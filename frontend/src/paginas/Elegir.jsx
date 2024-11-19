import DataService from "../datos/datos.js";

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Text, Card, Flex, Inset, Grid} from "@radix-ui/themes"
import { Accion } from "../components/Accion";
import { Expandir } from "../components/Expandir.jsx";

export function Elegir() {
  const { id: idCategoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => { DataService.traerProductosPorCategoria(idCategoria).then(setProductos); }, [idCategoria]);

  if (productos === null) return <Text size="3">Categoría no encontrada</Text>;


  return (
    <>
      <Grid columns="3" gap="3">
        {productos.map((producto, index) => (
          <Card size="2" key={index} style={{height: '100%'}}>
            <Link to={`/detalle/${producto.id}`} style={{ color: "inherit", textDecoration: "none" }} >
              <Inset clip="padding-box" side="top" pb="current">
                <img src={DataService.traerImagen(producto.url_imagen)} width="100%" />
              </Inset>
              <Flex direction="column" gap="2" align="start">
                <Text size="3" as="p" weight="bold">{producto.nombre}</Text>
                <Text size="1" as="p">{`${producto.detalle}`}</Text>
                <Text size="5" as="p" weight="bold">${producto.precio}</Text>
              </Flex>
              <Expandir />
              <Accion texto="Ver Producto"/>
            </Link>
          </Card>
        ))}
      </Grid>
    </>
  );
}
