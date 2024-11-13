import {
  Typography,
  Button,
  Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
  
function addToCart() {
  alert("Producto añadido al carrito"); 
}

function imagen(url) {
  // Verifica si url es una cadena de texto válida antes de hacer split
  return typeof url === "string" && url
    ? url.split(",")[0]
    : "imagen-predeterminada.jpg";
}

async function traerProductos(id) {
  try {
    console.log(`Fetching productos... ${id ? `for category ${id}` : "(none)"}`);
    const response = await fetch(`http://localhost:3000/productos`);
    const data = await response.json();
    console.log("productos fetched:", data);
    return data.filter((producto) => id ? producto.categoria === id : true);
  } catch (error) {
    console.error("Error fetching productos:", error);
    return [];
  }
}


export function Elegir() {
  const { id } = useParams();

  console.log("Elegir > id:", id);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductos(id).then((data) => setProductos(data));
  }, []);

  if (productos === null) {
    return (
      <Typography variant="h4" style={{ margin: "20px" }}>
        Categoría no encontrada
      </Typography>
    );
  }

 
  return (
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
                  src={`/images/${imagen(producto.url_imagen)}`}
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
              <Button size="small" color="primary" onClick={addToCart}>
                Añadir al Carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
