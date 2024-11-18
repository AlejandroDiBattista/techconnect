import Compra from '../models/Compra.js';
import decodeURIComponent from 'decode-uri-component';

// Crear una nueva compra
async function crearCompra(req, res) {
  const { usuario } = req.params;

  try {
    const result = await Compra.crear(usuario);
    if (result.success) {
      res.status(201).json(result.data);
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// Ver la compra
async function traerCompra(req, res) {
  const { id } = req.params;

  try {
    const result = await Compra.traer(id);
    if (result.success) {
      res.status(200).json(result.data); // result.data es el objeto compra
    } else {
      res.status(404).json({ message: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// Agregar producto a la compra
async function agregarProducto(req, res) {
  const { id, producto, variante } = req.params;
  try {
    const varianteDecodificada = decodeURIComponent(variante);
    const result = await Compra.agregar(id, producto, 1, varianteDecodificada);
    if (result.success) {
      res.status(200).json(result.data);
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// Quitar un producto de la compra
async function quitarProducto(req, res) {
  const { id, producto, variante } = req.params;
  try {
    const varianteDecodificada = decodeURIComponent(variante);
    const result = await Compra.quitar(id, producto, 1, varianteDecodificada);
    if (result.success) {
      res.status(200).json(result.data);
    } else {
      res.status(404).json({ message: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// Confirmar la compra
async function confirmarCompra(req, res) {
  const { id } = req.params;

  try {
    // Primero verificamos que la compra exista y tenga datos de cliente
    const compra = await Compra.findOne({ id });
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    
    if (!compra.cliente || !compra.cliente.email) {
      return res.status(400).json({ error: 'La compra debe tener datos del cliente antes de confirmar' });
    }

    const result = await Compra.confirmar(id);
    if (result.success) {
      res.status(200).json({ message: 'Compra confirmada', compra: result.data });
    } else {
      res.status(400).json({ message: result.error });
    }
  } catch (error) {
    console.error('Error al confirmar compra:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Borrar la compra
async function cancelarCompra(req, res) {
  const { id } = req.params;

  const result = await Compra.cancelar(id);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.error });
  }
}

// Actualizar datos del cliente
async function actualizarCliente(req, res) {
  console.log('------------------------------------------------------------')
  console.debug('CompraControlador.actualizarCliente',req.params,  req.body);
  const { id } = req.params;
  const datosCliente = req.body;

  try {
    // Verificar que tengamos todos los datos necesarios
    if (!datosCliente.domicilio || !datosCliente.localidad || 
        !datosCliente.codigoPostal || !datosCliente.gmail || 
        !datosCliente.telefono || !datosCliente.tarjeta) {
      return res.status(400).json({ error: 'Faltan datos del cliente' });
    }

    // Llamar al método del modelo
    const result = await Compra.actualizarCliente(id, datosCliente);
    
    if (result.success) {
      res.status(200).json(result.data);
    } else {
      res.status(404).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error en actualizarCliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export {
  crearCompra,
  traerCompra,
  agregarProducto,
  quitarProducto,
  confirmarCompra,
  cancelarCompra,
  actualizarCliente  // Exportar la nueva función
};
