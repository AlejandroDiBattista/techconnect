import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export function Cliente(){
  const [formData, setFormData] = useState({
    domicilio: "",
    localidad: "",
    codigoPostal: "",
    gmail: "",
    telefono: "",
    tarjeta: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Aquí puedes agregar lógica para enviar los datos
  };
  console.log("Estoy en cliente")
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Ingrese sus datos
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Domicilio"
            name="domicilio"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={formData.domicilio}
            onChange={handleChange}
          />
          <TextField
            label="Localidad"
            name="localidad"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={formData.localidad}
            onChange={handleChange}
          />
          <TextField
            label="Código Postal"
            name="codigoPostal"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={formData.codigoPostal}
            onChange={handleChange}
          />
          <TextField
            label="Gmail"
            name="gmail"
            variant="outlined"
            type="email"
            fullWidth
            required
            margin="normal"
            value={formData.gmail}
            onChange={handleChange}
          />
          <TextField
            label="Teléfono"
            name="telefono"
            variant="outlined"
            type="tel"
            fullWidth
            required
            margin="normal"
            value={formData.telefono}
            onChange={handleChange}
          />
          <TextField
            label="Número de Tarjeta"
            name="tarjeta"
            variant="outlined"
            type="number"
            fullWidth
            required
            margin="normal"
            inputProps={{ maxLength: 16 }}
            value={formData.tarjeta}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Cliente;