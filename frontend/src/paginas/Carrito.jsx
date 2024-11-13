import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, IconButton, Divider, Card, CardMedia, CardContent } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';

export function Carrito(){
  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const productos = [
    { id: 1, nombre: 'Producto 1', cantidad: 2 },
    { id: 2, nombre: 'Producto 2', cantidad: 1 },
    { id: 3, nombre: 'Producto 3', cantidad: 3 },
  ];

  const handleAgregar = (id) => {
    // Lógica para eliminar el producto del carrito
    console.log(`Eliminar producto con id: ${id}`);
  };
  const handleQuitar = (id) => {
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
                <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/001.jpg" // Aquí puedes colocar la URL de la imagen del producto
                    alt="Producto"
                 />
                 <CardContent>
                    <Typography variant="h6" component="div">
                      Descripción del producto
                   </Typography>
                   <Typography variant="h5" color="text.secondary">
                     $50,000
                   </Typography>
                   <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                     <Button variant="outlined" onClick={handleQuitar} sx={{ minWidth: 40 }}>
                       -
                     </Button>
                     <Typography variant="h6" sx={{ mx: 2 }}>
                       3
                     </Typography>
                     <Button variant="outlined" onClick={handleAgregar} sx={{ minWidth: 40 }}>
                       +
                     </Button>
                   </Box>
                 </CardContent>
               </Card>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${total}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleConfirmarCompra}>
            Continuar Compra
          </Button>
        </>
      )}
    </Box>
  );
}

export default Carrito;
