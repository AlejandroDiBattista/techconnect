// routes/api.js
import express from 'express';
const router = express.Router();
import { 
    traerCategorias, 
    traerProductos, 
    traerProducto,  
    agregarDatosCliente 
} from '../controllers/controlador.js';
import { 
    agregarProducto, 
    verCarrito, 
    borrarCarrito, 
    confirmarCompra, 
    eliminarProducto 
} from '../controllers/carritoControlador.js';

router.get('/', (req,res) => {
    res.send('Servidor en Funcionamiento');
});

// Rutas
router.get('/categoria', traerCategorias);
router.get('/producto', traerProductos);
router.get('/producto/:id', traerProducto);


//rutas del carrito
router.post('/compra/:userId/producto', agregarProducto);
router.get('/carrito', verCarrito);
router.delete('/carrito/:userId/producto', eliminarProducto);
router.delete('/carrito/:userId', borrarCarrito);
router.post('/carrito/:userId/confirmar', confirmarCompra);
router.post('/cliente', agregarDatosCliente);

export default router;
