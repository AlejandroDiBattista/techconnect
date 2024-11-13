import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export function Carrito(){
  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const productos = [
    { id: 1, nombre: 'Producto 1', cantidad: 2 },
    { id: 2, nombre: 'Producto 2', cantidad: 1 },
    { id: 3, nombre: 'Producto 3', cantidad: 3 },
  ];

  const handleEliminar = (id) => {
    // Lógica para eliminar el producto del carrito
    console.log(`Eliminar producto con id: ${id}`);
  };

  const handleConfirmarCompra = () => {
    navigate('/cliente'); // Navegar a la página /cliente
  };

  const total = productos.reduce((acc, producto) => acc + producto.cantidad * 100, 0); // Ejemplo de cálculo de total

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Carrito de Compras
      </Typography>

      {productos.length === 0 ? (
        <Typography>No hay productos en el carrito</Typography>
      ) : (
        <>
          <List>
            {productos.map((producto) => (
              <ListItem key={producto.id} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleEliminar(producto.id)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText
                  primary={producto.nombre}
                  secondary={`Cantidad: ${producto.cantidad}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${total}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleConfirmarCompra}
          >
            Continuar Compra
          </Button>
        </>
      )}
    </Box>
  );
}

export default Carrito;
