import Carrito from '../models/carrito.js';

// Agregar producto al carrito
export const agregarProducto = async (req, res) => {
  const { userId } = req.params;
  const { productoId, cantidad, variante } = req.body;

  try {
    let carrito = await Carrito.findOne({ userId, estado: 'pendiente' });

    if (!carrito) {
      carrito = new Carrito({ userId, productos: [] });
    }

    const productoExistente = carrito.productos.find(
      (prod) => prod.productoId.toString() === productoId && prod.variante === variante
    );

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      carrito.productos.push({ productoId, cantidad, variante });
    }

    await carrito.save();
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto' });
  }
};

// ver el carrito
export const verCarrito = async (req, res) => {
  const { userId } = req.params;

  try {
    const carrito = await Carrito.verCarrito(userId);
    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carrito', error });
  }
};

// confirmar la compra
export const confirmarCompra = async (req, res) => {
  const { userId } = req.params;

  try {
    const carrito = await Carrito.confirmarCompra(userId);
    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado o ya confirmado' });
    }
    res.status(200).json({ message: 'Compra confirmada', carrito });
  } catch (error) {
    res.status(500).json({ message: 'Error al confirmar la compra', error });
  }
};

// eliminar un producto del carrito
export const eliminarProducto = async (req, res) => {
  const { userId } = req.params;
  const { productoId } = req.body;

  try {
    const carrito = await Carrito.eliminarProducto(userId, productoId);
    if (!carrito) {
      return res.status(404).json({ message: 'Producto no encontrado en el carrito' });
    }
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto del carrito', error });
  }
};

// borrar el carrito completo
export const borrarCarrito = async (req, res) => {
  const { id } = req.params;

  try {
    const carrito = await Carrito.borrarCarrito(id);
    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    res.status(200).json({ message: 'Carrito eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar el carrito', error });
  }
};