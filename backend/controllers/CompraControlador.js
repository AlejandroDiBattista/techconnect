import Compra from '../models/Compra.js';
import decodeURIComponent from 'decode-uri-component';

// Crear una nueva compra
async function crearCompra(req, res) {
  try {
    const { usuario } = req.params;
    const result = await Compra.crear(usuario);
    
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    res.status(201).json({ success: true, data: result.data });
    
  } catch (error) {
    console.error('Error al crear compra:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Ver la compra
async function traerCompra(req, res) {
  try {
    const { id } = req.params;
    const result = await Compra.traer(id);
    
    if (!result.success) {
      return res.status(404).json({ error: result.error });
    }
    res.status(200).json({ success: true, data: result.data });
    
  } catch (error) {
    console.error('Error al traer compra:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Agregar producto a la compra
async function agregarProducto(req, res) {
  try {
    const { id, producto, variante } = req.params;
    const varianteDecodificada = decodeURIComponent(variante);
    const result = await Compra.agregar(id, producto, 1, varianteDecodificada);
    
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    res.status(200).json({ success: true, data: result.data });
    
  } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Quitar un producto de la compra
async function quitarProducto(req, res) {
  try {
    const { id, producto, variante } = req.params;
    const varianteDecodificada = decodeURIComponent(variante);
    const result = await Compra.quitar(id, producto, 1, varianteDecodificada);
    
    if (!result.success) {
      return res.status(404).json({ error: result.error });
    }
    res.status(200).json({ success: true, data: result.data });
    
  } catch (error) {
    console.error('Error al quitar producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Confirmar la compra
async function confirmarCompra(req, res) {
  try {
    const { id } = req.params;
    const compra = await Compra.findOne({ id });
    
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    
    if (!compra.cliente || !compra.cliente.email) {
      return res.status(400).json({ error: 'La compra debe tener datos del cliente antes de confirmar' });
    }

    const result = await Compra.confirmar(id);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    
    res.status(200).json({ success: true, data: result.data });
    
  } catch (error) {
    console.error('Error al confirmar compra:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Borrar la compra
async function cancelarCompra(req, res) {
  try {
    const { id } = req.params;
    const result = await Compra.cancelar(id);
    
    if (!result.success) {
      return res.status(404).json({ error: result.error });
    }
    res.status(200).json({ success: true, message: result.message });
    
  } catch (error) {
    console.error('Error al cancelar compra:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Actualizar datos del cliente
async function actualizarCliente(req, res) {
  console.log('CompraControlador.actualizarCliente', req.params, req.body);
  const { id } = req.params;
  const datosCliente = {
    ...req.body,
    email:  req.body.email // Aceptar cualquiera de los dos campos
  };

  try {
    // Verificar que tengamos todos los datos necesarios
    if (!datosCliente.domicilio || !datosCliente.localidad || 
        !datosCliente.codigoPostal || !datosCliente.email || 
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
