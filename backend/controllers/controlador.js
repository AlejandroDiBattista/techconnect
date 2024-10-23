
const Categoria = require('../models/Categoria');
const Producto = require('../models/Producto');
const Cliente = require('../models/Cliente');
const Compra = require('../models/Compra');

exports.traerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

exports.traerProductos = async (req, res) => {
  const { categoria } = req.query;
  const productos = await Producto.find({ categoria_id: categoria });
  res.json(productos);
};

exports.traerProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await Producto.findById(id);
  res.json(producto);
};

exports.crearCompra = async (req, res) => {
  const compra = new Compra({ cliente_id: req.body.cliente_id });
  await compra.save();
  res.json({ compra_id: compra._id });
};

exports.agregarProductoCarrito = async (req, res) => {
  // Lógica para agregar o quitar producto al carrito
};

exports.borrarCarrito = async (req, res) => {
  // Lógica para eliminar el carrito
};

exports.confirmarCompra = async (req, res) => {
  // Lógica para confirmar la compra
};

exports.agregarDatosCliente = async (req, res) => {
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.json({ cliente_id: cliente._id });
};
