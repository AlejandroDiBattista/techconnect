// routes/api.js
import express from 'express';
const router = express.Router();
import { traerCategorias, traerProducto, crearCompra, agregarDatosCliente } from '../controllers/controlador.js';
import { agregarProducto, verCarrito, borrarCarrito, confirmarCompra, eliminarProducto } from '../controllers/carritoControlador.js';
import Producto from "../models/producto.js"

router.get('/', (req,res) => {
    res.send('Servidor en Funcionamiento');
});

// Rutas
router.get('/categoria', traerCategorias);
router.get('/producto', async (req, res) => {
    try{
        const productos = await Producto.traerProductos();
        res.json(productos);
    }catch(error){
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});
router.get('/producto/:id', traerProducto);
router.post('/compra', crearCompra);

//rutas del carrito
router.post('/compra/:userId/producto', agregarProducto);
router.get('/carrito', verCarrito);
router.delete('/carrito/:userId/producto', eliminarProducto);
router.delete('/carrito/:userId', borrarCarrito);
router.post('/carrito/:userId/confirmar', confirmarCompra);
router.post('/cliente', agregarDatosCliente);

export default router;
