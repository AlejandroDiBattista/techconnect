import { Container, Typography, Box } from "@mui/material";
import Menu from "../componentes/Menu";

export function Layout({ children }) {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          paddingTop: "20px",
          backgroundColor: "#d3d3d3", // Fondo gris claro
          maxWidth: "800px", // Ancho máximo de 800px
        }}
      >
        <Menu />
        {children}

        <Box
          component="footer"
          sx={{
            width: "100%",
            backgroundColor: "#1976d2", // Color azul
            padding: "20px",
            marginTop: "auto", // Mueve el footer hacia abajo
          }}
        >
          <Typography variant="body1" align="center" style={{ color: "white" }}>
            este es el footer
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
