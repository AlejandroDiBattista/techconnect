import mongoose from 'mongoose';
import Producto from '../models/producto.js';
import Cliente from '../models/cliente.js';
import Categoria from '../models/categoria.js';
import e from 'express';

// Traer categorías
async function traerCategorias(req, res) {
    try {
        const categorias = await Categoria.traer();
        if(!categorias.success) {
            res.status(404).json({ mensaje: 'No hay categorías disponibles' });
        } else {
            res.status(200).json(categorias.data);
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al traer las categorías' });
    }
}

// Traer productos
async function traerProductos(req, res) {
    try {
        const { id } = req.params;
        const productos = await Producto.traerTodos(id);
        if (!productos.success) {
            res.status(404).json({ mensaje: 'No hay productos disponibles' });
        } else {
            res.status(200).json(productos.data);
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al traer los productos' });
    }
}

// Traer un producto específico
async function traerProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.traer(id);
        if (!producto.success) {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        } else {
            res.status(200).json(producto.data);
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' });
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
    const categoriaObjectId = mongoose.Types.ObjectId(categoria);
    const producto = Producto.crear({
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
    res.status(400).json({ success: false, error: error.message });
  }
};

export {
    traerCategorias,
    traerProductos,
    traerProducto,
    agregarDatosCliente
};

