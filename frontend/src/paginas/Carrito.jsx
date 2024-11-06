import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Carrito = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1', cantidad: 2 },
    { id: 2, nombre: 'Producto 2', cantidad: 1 },
    { id: 3, nombre: 'Producto 3', cantidad: 3 },
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Carrito de Compras
      </Typography>

      {productos.length === 0 ? (
        <Typography>No hay productos en el carrito</Typography>
      ) : (
        <List>
          {productos.map((producto) => (
            <React.Fragment key={producto.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={producto.nombre}
                  secondary={`Cantidad: ${producto.cantidad}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}

      {productos.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Confirmar Compra
        </Button>
      )}
    </Box>
  );//hola aca estoy
};

export default Carrito; // Asegúrate de tener esta línea para exportar el componente
