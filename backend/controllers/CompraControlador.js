import Carrito from '../models/Compra.js';

// Crear un carrito nuevo
async function crearCompra(req, res) {
  const { usuario } = req.params;

  try {
    const result = await Carrito.crear(usuario);
    if (result.success) {
      res.status(201).json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// Ver el carrito
async function traerCompra(req, res) {
  const { usuario } = req.params;

  try {
    const result = await Carrito.traer(usuario);
    if (result.success) {
      res.status(200).json(result.data);
    } else {
      res.status(404).json({ message: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// Agregar producto al carrito
async function agregarProducto(req, res) {
  const { usuario, producto, variante } = req.params;
  const { cantidad } = req.body;

  try {
    const result = await Carrito.agregar(usuario, producto, cantidad, variante);
    if (result.success) {
      res.status(200).json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// eliminar un producto del carrito
const quitarProducto = async (req, res) => {
  const { usuario, producto, variante } = req.params;
  const { cantidad } = req.body;

  const result = await Carrito.quitar(usuario, producto, cantidad, variante);
  if (result.success) {
    res.status(200).json(result.data);
  } else {
    res.status(404).json({ message: result.error });
  }
};


// confirmar la compra
const confirmarCompra = async (req, res) => {
  const { usuario } = req.params;

  const result = await Carrito.confirmar(usuario);
  if (result.success) {
    res.status(200).json({ message: 'Compra confirmada', carrito: result.data });
  } else {
    res.status(404).json({ message: result.error });
  }
};


// borrar el carrito completo
const cancelarCompra = async (req, res) => {
  const { usuario } = req.params;

  const result = await Carrito.cancelar(usuario);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.error });
  }
};

export {
  crearCompra,
  traerCompra,
  agregarProducto,
  quitarProducto,
  confirmarCompra,
  cancelarCompra
};