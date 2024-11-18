import React, { useState, useEffect } from 'react'; // Añadir useState y useEffect
import { Box, Typography, List, ListItem, ListItemText, Button, IconButton, Divider, Card, CardMedia, CardContent } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';
import DataService from '../datos/datos'; // Importar DataService
import BotonRegresar from '../components/BotonRegresar';
import MostrarProducto from '../components/MostrarProducto'; // Importar el nuevo componente

export function Carrito(){
  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const [productos, setProductos] = useState([]); // Estado para productos
  const [compraId, setCompraId] = useState(null); // Estado para compraId
  const [loading, setLoading] = useState(true); // Añadir estado de carga
  const [error, setError] = useState(null); // Agregar estado para errores

  useEffect(() => {
    const manejarCompra = async () => {
      try {
        const compraActiva = await DataService.traerCompraActiva();
        if (compraActiva && compraActiva.compraId) {
          setCompraId(compraActiva.compraId);
          setProductos(compraActiva.productos);
        } else {
          setError('No se pudo cargar la compra');
        }
      } catch (error) {
        console.error('Error al manejar la compra:', error);
        setError('Error al cargar el carrito');
      } finally {
        setLoading(false); // Finalizar estado de carga
      }
    };

    manejarCompra();
  }, []);

  const onAgregar = async (id, variante = '') => {
    try {
      await DataService.agregarProducto(compraId, id, variante);
      const compraActualizada = await DataService.traerCompra(compraId);
      if (compraActualizada) {
        setProductos(compraActualizada.productos);
      }
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const onQuitar = async (id, variante = '') => {
    try {
      await DataService.quitarProducto(compraId, id, variante);
      const compraActualizada = await DataService.traerCompra(compraId);
      if (compraActualizada) {
        setProductos(compraActualizada.productos);
      }
    } catch (error) {
      console.error('Error al quitar producto:', error);
    }
  };

  const handleConfirmarCompra = async () => {
    try {
      navigate('/cliente'); // Navegar a la página /cliente
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
    }
  };

  const handlerCancelarCompra = async () => {
    try {
      await DataService.cancelarCompra(compraId);
    } catch (error) {
      console.error('Error al cancelar la compra:', error);
    } finally {
      navigate('/'); // Navegar a la página de inicio
    }
  };

  const calcularTotal = () => {
    return productos.reduce((suma, producto) => suma + producto.cantidad * producto.precio, 0);
  };

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Cargando carrito...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (productos.length === 0) {
    
    return (<>
      <BotonRegresar />
      <Typography>El carrito está vacío</Typography>
    </>)
  }

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <BotonRegresar />
      <Typography variant="h5" gutterBottom>Carrito de Compras</Typography>

      <List>
        {productos.map((producto) => (
            <MostrarProducto
              key={producto.id + producto.variante} sx={{ mb: '20px' }}
              producto={producto}
              onAgregar={onAgregar}
              onQuitar={onQuitar}
            />
        ))}
      </List>
      <Divider />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: ${calcularTotal()}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2}} onClick={handleConfirmarCompra}>
        Confirmar Compra
      </Button>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}  onClick={handlerCancelarCompra}>
        Cancelar Compra
      </Button>
    </Box>
  );
}

export default Carrito;
