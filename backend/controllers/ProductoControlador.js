import mongoose from 'mongoose';
import Producto from '../models/producto.js';
import Cliente from '../models/cliente.js';
import Categoria from '../models/categoria.js';

// Traer categorías
async function traerCategorias(req, res) {
    try {
        const categorias = await Categoria.traer();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al traer las categorías' });
    }
}

// Traer productos
async function traerProductos(req, res) {
    try {
        const productos = await Producto.traerTodos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al traer los productos' });
    }
}

// Traer un producto específico
async function traerProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.traer(id);
        res.json(producto);
    } catch (error) {
        if (error.message === 'Producto no encontrado') {
            res.status(404).json({ mensaje: error.message });
        } else {
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }
}

// Agregar datos del cliente
async function agregarDatosCliente(req, res) {
    try {
        const datos = req.body;
        const cliente = await Cliente.crear(datos);
        res.status(201).json({ cliente_id: cliente.data._id });
    } catch (error) {
        if (error.message === 'El email ya está registrado') {
            res.status(400).json({ mensaje: error.message });
        } else {
            res.status(500).json({ mensaje: 'Error al agregar el cliente' });
        }
    }
}

export const agregarProducto = async (req, res) => {
  try {
    const { nombre, precio, categoria, url_imagen, detalle, cantidad, variantes } = req.body;
    const categoriaObjectId = mongoose.Types.ObjectId(categoria);
    const nuevoProducto = new Producto({
      nombre,
      precio,
      categoria: categoriaObjectId,
      url_imagen,
      detalle,
      cantidad,
      variantes
    });
    await nuevoProducto.save();
    res.status(201).json({ success: true, data: nuevoProducto });
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

