
import Categoria from '../models/clasificacion.js';
import Producto from '../models/producto.js';
import Cliente from '../models/cliente.js';
import Compra from '../models/compra.js';

export const traerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

export const traerProductos = async (req, res) => {
  try {
      const { categoria } = req.query;

      const productos = await Producto.traerProductos(categoria);

      res.json(productos);
  } catch (error) {
      console.error('Error al traer los productos:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export const traerProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await Producto.traerProducto(id);
  res.json(producto);
};

export const crearCompra = async (req, res) => {
  const id = req.body.cliente_id;
  const compra = await Compra.crear(id);
  res.json({ compra_id: compra._id });
};

export const agregarDatosCliente = async (req, res) => {
  const datos = req.body;
  try {
    const cliente = await Cliente.agregar(datos);
    res.json({ cliente_id: cliente._id });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
