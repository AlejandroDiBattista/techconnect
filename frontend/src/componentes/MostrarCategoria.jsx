import { Box, Typography } from "@mui/material";

export function MostrarCategoria({ imagen, texto }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
      }}
    >
      <Box
        component="img"
        src={imagen}
        alt="Imagen de categoría"
        sx={{
          width: "250px",
          height: "250px",
          borderRadius: "8px", // Esquinas redondeadas
          marginRight: "20px",
        }}
      />
      <Typography variant="body1">
        {texto}
      </Typography>
    </Box>
  );
}
