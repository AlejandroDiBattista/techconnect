// routes/api.js
const express = require('express');
const router = express.Router();
const { traerCategorias, traerProductos, traerProducto, crearCompra, agregarProductoCarrito, borrarCarrito, confirmarCompra, agregarDatosCliente } = require('../controllers/controlador');

// Rutas
router.get('/categoria', traerCategorias);
router.get('/producto', traerProductos);
router.get('/producto/:id', traerProducto);
router.post('/compra', crearCompra);
router.post('/compra/:id', agregarProductoCarrito);
router.delete('/carrito/:id', borrarCarrito);
router.post('/carrito/:id', confirmarCompra);
router.post('/cliente', agregarDatosCliente);

module.exports = router;
