
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
  const producto = await Producto.findById(id);
  res.json(producto);
};

export const crearCompra = async (req, res) => {
  const compra = new Compra({ cliente_id: req.body.cliente_id });
  await compra.save();
  res.json({ compra_id: compra._id });
};


export const agregarDatosCliente = async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.json({ cliente_id: cliente._id });
};
