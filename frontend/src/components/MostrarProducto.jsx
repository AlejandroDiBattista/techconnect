import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import DataService from '../datos/datos';

function MostrarProducto({ producto, onAgregar, onQuitar }) {
  return (
    <Card sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', padding: 2, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150, objectFit: 'cover' }} // Estilo para cuadrado de 150px
          image={DataService.traerImagen(producto.url_imagen)}
          alt={producto.nombre}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" component="div">
            {producto.nombre}
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <Box>
          <Typography variant="h5" color="text.secondary">
            {producto.cantidad} * ${producto.precio} = <b>${producto.cantidad * producto.precio}</b>
          </Typography>
        </Box>
        {/* Contenedor con borde redondeado al 100% */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '2px solid blue',
            borderRadius: '50px', // Border redondeado al 100%
            padding: '4px 8px',
          }}
        >
          <IconButton
            onClick={() => onQuitar(producto.id, producto.variante)}
            sx={{ transform: 'scale(1.5)', padding: 0 }}
          >
            {producto.cantidad === 1 ? <DeleteIcon /> : <RemoveCircleOutlineIcon />}
          </IconButton>
          <Typography variant="h6" sx={{ mx: 2 }}>
            {producto.cantidad}
          </Typography>
          <IconButton
            onClick={() => onAgregar(producto.id, producto.variante)}
            sx={{ transform: 'scale(1.5)', padding: 0 }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>

  );
}

export default MostrarProducto;
