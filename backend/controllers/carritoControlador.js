import Carrito from '../models/Carrito.js';

// Agregar producto al carrito
exports.agregarProducto = async (req, res) => {
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

// Ver carrito
exports.verCarrito = async (req, res) => {
  const { userId } = req.params;

  try {
    const carrito = await Carrito.findOne({ userId, estado: 'pendiente' }).populate('productos.productoId');
    if (!carrito) return res.status(404).json({ error: 'Carrito no encontrado' });

    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener carrito' });
  }
};

// Confirmar compra
exports.confirmarCompra = async (req, res) => {
  const { userId } = req.params;

  try {
    const carrito = await Carrito.findOne({ userId, estado: 'pendiente' });
    if (!carrito) return res.status(404).json({ error: 'Carrito no encontrado' });

    carrito.estado = 'confirmado';
    await carrito.save();

    res.status(200).json({ message: 'Compra confirmada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al confirmar compra' });
  }
};

// Eliminar producto del carrito
exports.eliminarProducto = async (req, res) => {
  const { userId } = req.params;
  const { productoId } = req.body;

  try {
    const carrito = await Carrito.findOne({ userId, estado: 'pendiente' });
    if (!carrito) return res.status(404).json({ error: 'Carrito no encontrado' });

    carrito.productos = carrito.productos.filter(
      (prod) => prod.productoId.toString() !== productoId
    );

    await carrito.save();
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};