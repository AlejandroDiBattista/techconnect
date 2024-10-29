// routes/api.js
import express from 'express';
const router = express.Router();
import { traerCategorias, traerProductos, traerProducto, crearCompra, agregarProductoCarrito, borrarCarrito, confirmarCompra, agregarDatosCliente } from '../controllers/controlador.js';

router.get('/', (req,res) => {
    res.send('Servidor en Funcionamiento');
});

// Rutas
router.get('/categoria', traerCategorias);
router.get('/producto', traerProductos);
router.get('/producto/:id', traerProducto);
router.post('/compra', crearCompra);
router.post('/compra/:id', agregarProductoCarrito);
router.delete('/carrito/:id', borrarCarrito);
router.post('/carrito/:id', confirmarCompra);
router.post('/cliente', agregarDatosCliente);

export default router;
