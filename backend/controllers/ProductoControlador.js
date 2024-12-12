import mongoose from 'mongoose';

import Producto  from '../models/producto.js';
import Categoria from '../models/Categoria.js';

// Traer categorías
async function traerCategorias(req, res) {
    try {
        const result = await Categoria.traer();
        if (!result.success) {
            return res.status(404).json({ error: result.error });
        }
        res.status(200).json({ success: true, data: result.data });
    } catch (error) {
        console.error('Error al traer categorías:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Traer productos
async function traerProductos(req, res) {
    try {
        const { id } = req.params;

        const result = await Producto.traerTodos(id);
        
        if (!result.success) {
            return res.status(404).json({ error: result.error });
        }
        res.status(200).json({ success: true, data: result.data });
    } catch (error) {
        console.error('Error al traer productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Traer un producto específico
async function traerProducto(req, res) {
    try {
        const { id } = req.params;
        const result = await Producto.traer(id);
        
        if (!result.success) {
            return res.status(404).json({ error: result.error });
        }
        res.status(200).json({ success: true, data: result.data });
    } catch (error) {
        console.error('Error al traer producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Agregar datos del cliente
async function agregarDatosCliente(req, res) {
    try {
        const datos = req.body;
        const cliente = await Cliente.crear(datos);
        if(!cliente.success) {
            res.status(400).json({ mensaje: cliente.error });
        } else {
            res.status(201).json({ cliente_id: cliente.data._id });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar el cliente' });
    }
}

export const agregarProducto = async (req, res) => {
    try {
        const { nombre, precio, categoria, url_imagen, detalle, cantidad, variantes } = req.body;
        
        if (!nombre || !precio || !categoria || !url_imagen || !detalle || !cantidad) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const categoriaObjectId = mongoose.Types.ObjectId(categoria);
        const producto = await Producto.crear({
            nombre,
            precio,
            categoria: categoriaObjectId,
            url_imagen,
            detalle,
            cantidad,
            variantes
        });

        res.status(201).json({ success: true, data: producto });
    } catch (error) {
        console.error('Error al agregar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export {
    traerCategorias,
    traerProductos,
    traerProducto,
    agregarDatosCliente
};

