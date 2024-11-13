// routes/api.js
import express from 'express';
const router = express.Router();
import {  
    traerCategorias,
    traerProductos,
    traerProducto,
    agregarDatosCliente 
} from '../controllers/ProductoControlador.js';

import { 
    crearCompra,
    traerCompra,
    agregarProducto,
    quitarProducto,
    confirmarCompra,
    cancelarCompra
  } from '../controllers/CompraControlador.js';

router.get('/', (req,res) => {
    res.send('Servidor en Funcionamiento');
});

// Rutas
router.get('/categorias', traerCategorias);
router.get('/productos', traerProductos);
router.get('/producto/:id', traerProducto);

//rutas del carrito
router.post('/compra/:usuario', crearCompra);
router.get('/compra/:usuario', traerCompra);
router.post('/compra/:usuario/:producto/:variante', agregarProducto);
router.delete('/compra/:usuario/:producto/:variante', quitarProducto);
router.put('/compra/:usuario', confirmarCompra);
router.delete('/compra/:usuario', cancelarCompra);

//rutas del cliente
router.post('/clientes', agregarDatosCliente);

export default router;
