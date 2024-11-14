// routes/api.js
import express from 'express';
const router = express.Router();
import {  
    traerCategorias,
    traerProducto,
    traerProductos,
} from '../controllers/ProductoControlador.js';

import { 
    crearCompra, traerCompra,
    agregarProducto, quitarProducto,
    confirmarCompra, cancelarCompra
  } from '../controllers/CompraControlador.js';

// Solo para verificar que el servidor esta en funcionamiento
router.get('/', (req,res) => res.send('Servidor en Funcionamiento'));

// Rutas de los productos 
router.get('/categorias',  traerCategorias);
router.get('/producto/:id', traerProducto);
router.get('/productos/:id', traerProductos);

// Rutas de la compra
router.post('/compra', crearCompra);
router.get('/compra/:id', traerCompra);
router.post('/compra/:id/:producto/:variante', agregarProducto);
router.delete('/compra/:id/:producto/:variante', quitarProducto);
router.put('/compra-confirmar/:id', confirmarCompra);
router.delete('/compra-cancelar/:id', cancelarCompra);

export default router;
