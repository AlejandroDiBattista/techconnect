import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  Container,
  Grid2 as Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

// import Datos from "../datos/datos.js";
import { useEffect, useState } from "react";

async function traerCategorias() {
  try {
    console.log("Fetching categories...");
    const response = await fetch("http://localhost:3000/categorias");
    const data = await response.json();
    console.log("Categories fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export function Inicio() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    traerCategorias().then((data) => setCategorias(data));
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={4}>
        {/* Encabezado */}
        <Grid item>
          <Typography variant="h3" gutterBottom align="center">
            Bienvenido a Techconnect
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            En Techconnect, nos dedicamos a ofrecerte los mejores celulares,
            notebooks y tablets para mantenerte conectado en todo momento.
            Descubre nuestra amplia gama de productos y disfruta de la
            tecnología al alcance de tu mano.
          </Typography>
        </Grid>

        {/* Sección de productos con fondo gris */}
        <Grid
          item
          xs={12}
          style={{ width: "100%", backgroundColor: "#f0f0f0", padding: "20px" }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Nuestros productos
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {categorias.map((categoria, index) => (
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  width="140"
                  image={"./public/images/" + categoria.url_imagen}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {categoria.nombre}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={RouterLink}
                    to={"/elegir/" + categoria._id}
                    style={{ marginTop: "10px" }}
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            ))}
           
          </Grid>
        </Grid>

        {/* Sección "Sobre nosotros" */}
        <Grid item xs={12} style={{ width: "100%", padding: "20px" }}>
          <Typography variant="h4" gutterBottom align="center">
            Sobre nosotros
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Techconnet es una tienda en línea dedicada a ofrecer una amplia gama
            de productos tecnológicos, incluyendo celulares, tablets y
            notebooks. Nuestro objetivo es proporcionar a nuestros clientes
            dispositivos de la mejor calidad con un excelente servicio al
            cliente. Nos enorgullecemos de contar con un equipo experto que está
            siempre dispuesto a ayudar en la elección del producto perfecto para
            cada necesidad. Además, ofrecemos opciones de entrega rápida y
            segura para que puedas disfrutar de tus compras sin demoras. En
            Techconnet, la satisfacción del cliente es nuestra prioridad, y
            trabajamos arduamente para superar tus expectativas.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Inicio;
