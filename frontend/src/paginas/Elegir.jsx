import {
  Box,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DataService from "../datos/datos.js";
import { BotonRegresar } from "../components/BotonRegresar";
import { Text, Button, Card, Flex, Inset, Container, Grid } from "@radix-ui/themes"
function addToCart() {
}

export function Elegir() {
  const { id: idCategoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => { DataService.traerProductosPorCategoria(idCategoria).then(setProductos); }, [idCategoria]);

  if (productos === null) {
    return (
      <Text size="3">Categoría no encontrada</Text>
    );
  }


  return (
    <>
      <BotonRegresar />
      <Grid columns="3" gap="3" width="auto" height="auto">
        {productos.map((producto, index) => (
          <Card size="2" key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%", // Se ajusta a la altura de la grilla
          }}>
              <Link to={`/detalle/${producto.id}`} style={{color: "inherit", textDecoration: "none"}} >
              <Inset clip="padding-box" side="top" pb="current">
                <img src={DataService.traerImagen(producto.url_imagen)} width="100%" />
              </Inset>
              <Flex direction="column" gap="2" align="start">
                <Text size="3" as="p" weight="bold">{`${producto.nombre} [${producto.id}]`}</Text>
                <Text size="1" as="p">{`${producto.detalle}`}</Text>
                <Text size="5" as="p" weight="bold">${producto.precio}</Text>
              </Flex>
              <Button size="2" variant="soft">Ver producto</Button>
          </Link>
            </Card>
        ))}
      </Grid>
    </>
  );
}
