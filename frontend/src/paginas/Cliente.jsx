import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import DataService from "../datos/datos";
import { useNavigate } from "react-router-dom";

export function Cliente() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    domicilio: "",
    localidad: "",
    codigoPostal: "",
    gmail: "",
    telefono: "",
    tarjeta: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name=='domicilio'  && value === "*") {
      setFormData({
        domicilio: "Av Jujuy 337",
        localidad: "San Miguel de Tucuman",
        codigoPostal: "4000",
        gmail: "example@gmail.com",
        telefono: "(381) 555-1234",
        tarjeta: "4567 1234 5678 9012",
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
    // Limpiar error cuando el usuario empiece a escribir
    if (formErrors[name]) {
      setFormErrors({...formErrors, [name]: ""});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    let hasErrors = false;


    // Validar cada campo
    Object.keys(formData).forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = "Este campo es obligatorio";
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    try {
      const {compraId} = await DataService.traerCompraActiva();
      if (!compraId) throw new Error("No hay compra activa");

      await DataService.actualizarCliente(compraId, formData);
      await DataService.confirmarCompra(compraId);
      navigate('/');
    } catch (error) {
      console.error("Error al guardar los datos del cliente:", error);
      setFormErrors({ submit: "Error al enviar los datos. Por favor, intente nuevamente." });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Ingrese sus datos
        </Typography>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <TextField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={formData[field]}
              onChange={handleChange}
              error={!!formErrors[field]}
              helperText={formErrors[field] || ""}
              type={
                field === "gmail" ? "email" :
                field === "telefono" ? "tel" :
                field === "tarjeta" ? "number" : "text"
              }
              inputProps={field === "tarjeta" ? { maxLength: 16 } : {}}
            />
          ))}
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