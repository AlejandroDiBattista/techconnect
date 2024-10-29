
import Categoria from '../models/clasificacion.js';
import Producto from '../models/producto.js';
import Cliente from '../models/cliente.js';
import Compra from '../models/compra.js';

export const traerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

export const traerProductos = async (req, res) => {
  const { categoria } = req.query;
  const productos = await Producto.find({ categoria: categoria });
  res.json(productos);
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

export const agregarProductoCarrito = async (req, res) => {
  // Lógica para agregar o quitar producto al carrito
};

export const borrarCarrito = async (req, res) => {
  // Lógica para eliminar el carrito
  const { id } = req.params;

  //Eliminar el carrito 
  const carritoEliminado = await Compra.findByIdAndDelete(id);
  if (!carritoEliminado) {
    return res.status(404).json({ message: 'No se encontro el carrito' });
  }
};

export const confirmarCompra = async (req, res) => {
  // Lógica para confirmar la compra
  const { id } = req.params;

  const carrito = await Compra.findById(id);
  if (!carrito) {
    return res.status(404).json({ message: 'No se encontro el carrito' });
  }
  //Cambio de estado 
  carrito.estado = 'enviado';
  await carrito.save();
  res.json(carrito);
};

export const agregarDatosCliente = async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.json({ cliente_id: cliente._id });
};
