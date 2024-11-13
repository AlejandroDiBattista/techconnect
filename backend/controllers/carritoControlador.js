import Carrito from '../models/carrito.js';

// Agregar producto al carrito
export const agregarProducto = async (req, res) => {
  const { userId } = req.params;
  const { productoId, cantidad, variante } = req.body;

  const result = await Carrito.agregarProducto(userId, productoId, cantidad, variante);
  if (result.success) {
    res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

// ver el carrito
export const verCarrito = async (req, res) => {
  const { userId } = req.params;

  const result = await Carrito.verCarrito(userId);
  if (result.success) {
    res.status(200).json(result.data);
  } else {
    res.status(404).json({ message: result.error });
  }
};

// confirmar la compra
export const confirmarCompra = async (req, res) => {
  const { userId } = req.params;

  const result = await Carrito.confirmarCompra(userId);
  if (result.success) {
    res.status(200).json({ message: 'Compra confirmada', carrito: result.data });
  } else {
    res.status(404).json({ message: result.error });
  }
};

// eliminar un producto del carrito
export const eliminarProducto = async (req, res) => {
  const { userId } = req.params;
  const { productoId, cantidad, variante } = req.body;

  const result = await Carrito.eliminarProducto(userId, productoId, cantidad, variante);
  if (result.success) {
    res.status(200).json(result.data);
  } else {
    res.status(404).json({ message: result.error });
  }
};

// borrar el carrito completo
export const borrarCarrito = async (req, res) => {
  const { userId } = req.params;

  const result = await Carrito.borrarCarrito(userId);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.error });
  }
};