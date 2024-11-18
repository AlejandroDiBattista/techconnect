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
import { useEffect, useState } from "react";
import DataService from "../datos/datos.js";

function MostrarCategoria({ categoria }) {
  return (
    <Grid item xs={12} md={4}>
      <Card component={RouterLink} to={`/elegir/${categoria.id}`} >
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={`./public/images/${categoria.url_imagen}`}
        />
        <CardContent>
          <Typography variant="h6">{categoria.nombre}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export function Inicio() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => { DataService.traerCategorias().then(setCategorias);}, []);

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center" spacing={4}>
        {/* Encabezado */}
        <Grid item>
          <Typography variant="h3" gutterBottom align="center">Bienvenido a Techconnect</Typography>
          <Typography variant="subtitle1" align="center" style={{ maxWidth: "600px" }}>
            En Techconnect, nos dedicamos a ofrecerte los mejores celulares,
            notebooks y tablets para mantenerte conectado en todo momento.
            Descubre nuestra amplia gama de productos y disfruta de la
            tecnología al alcance de tu mano.
          </Typography>
        </Grid>

        {/* Sección de productos con fondo gris */}
        <Grid item xs={12} >
          <Typography variant="h4" gutterBottom align="center">Nuestros productos</Typography>
          <Grid container spacing={4} justifyContent="center">
            {categorias.map((categoria) => (
              <MostrarCategoria key={categoria.id} categoria={categoria} />
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
