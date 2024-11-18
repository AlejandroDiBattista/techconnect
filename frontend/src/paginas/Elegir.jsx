import {
  Typography,
  Button,
  Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
  Container,
  Box,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DataService from "../datos/datos.js";
import { BotonRegresar } from "../components/BotonRegresar";

function addToCart() {
}

export function Elegir() {
  const { id: idCategoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    DataService.traerProductosPorCategoria(idCategoria).then(setProductos);
  }, [idCategoria]);

  if (productos === null) {
    return (
      <Typography variant="h4" style={{ margin: "20px" }}>
        Categoría no encontrada
      </Typography>
    );
  }

 
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container>
        <BotonRegresar />
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          {productos.map((producto, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Card style={{ maxWidth: "300px", margin: "auto" }}>
                <Link
                  to={`/detalle/${producto.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardContent style={{ cursor: "pointer" }}>
                    <img
                      src={DataService.traerImagen(producto.url_imagen)}
                      alt={producto.nombre}
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <Typography variant="h5">{`${producto.nombre} [${producto.id}]`}</Typography>
                    <Typography color="textSecondary">{`${producto.detalle}`}</Typography>
                    <Typography variant="h6">${producto.precio}</Typography>
                  </CardContent>
                </Link>
                <CardActions>
                <Link
                  to={`/detalle/${producto.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}>
                  <Button size="small" color="primary">Ver producto</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
