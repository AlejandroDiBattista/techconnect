import mongoose from 'mongoose';
import Producto from './producto.js';

const ItemSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  variante: { type: String }
});

const CompraSchema = new mongoose.Schema({
  id: { type: Number },
  items: [ItemSchema],
  estado: { type: String, default: 'pendiente' }, // Estados: 'pendiente', 'confirmado'
  cliente: {
    domicilio: {
      calle: { type: String },
      localidad: { type: String },
      cp: { type: Number },
    },
    email: { type: String },
    telefono: { type: String },
    tarjeta: { type: String },
  }
});

// Crear una compra
CompraSchema.statics.crear = async function() {
  try {
    const ultimo = await this.findOne().sort('-id').select('id');
    const proximoId = ultimo ? ultimo.id + 1 : 1;
    const compra = await this.create({ id: proximoId, estado: 'pendiente' });
    return { success: true, data: compra };
  } catch (error) {
    return { success: false, error: 'Error al crear la compra' };
  }
};

// Obtener una compra específica
CompraSchema.statics.traer = async function(id) {
    const compra = await this.findOne({ id }).populate('items.productoId');
    if (!compra) return { success: false, error: 'Compra no encontrada' };
    return { success: true, data: compra };
};

// Agregar un producto a la compra
CompraSchema.statics.agregar = async function(id, productoId, cantidad, variante) {
  try {
    // Buscar el producto por su ID personalizado
    const producto = await Producto.findOne({ id: productoId });
    if (!producto) {
      return { success: false, error: 'Producto no encontrado' };
    }

    // Buscar la compra por su ID
    const compra = await this.findOne({ id }).populate('items.productoId');
    if (!compra) {
      return { success: false, error: 'Compra no encontrada' };
    }

    const items = compra.items;

    // Verificar si el producto y la variante ya existen en los ítems
    const existe = items.find(p => p.productoId.equals(producto._id) && p.variante === variante);

    if (existe) {
      // Incrementar la cantidad si el producto y variante existen
      existe.cantidad += cantidad;
    } else {
      // Agregar un nuevo ítem si no existe
      compra.items.push({ productoId: producto._id, cantidad, variante });
    }

    // Guardar la compra actualizada
    await compra.save();

    return { success: true, data: compra };
  } catch (error) {
    console.error('Error al agregar el producto a la compra:', error);
    return { success: false, error: 'Error al guardar la compra' };
  }
};

// Quitar un producto de la compra
CompraSchema.statics.quitar = async function(id, productoId, cantidad, variante) {
    try {
        // Buscar el producto por su ID personalizado
        const producto = await Producto.findOne({ id: productoId });
        if (!producto) {
            return { success: false, error: 'Producto no encontrado' };
        }

        // Buscar la compra por su ID
        const compra = await this.findOne({ id }).populate('items.productoId');
        if (!compra) {
            return { success: false, error: 'Compra no encontrada' };
        }

        // Verificar si el producto y la variante existen en los ítems
        const existe = compra.items.find(p => p.productoId.equals(producto._id) && p.variante === variante);
        if (!existe) {
            return { success: false, error: 'Producto no encontrado en la compra' };
        }

        // Reducir la cantidad
        existe.cantidad -= cantidad;
        if (existe.cantidad <= 0) {
            compra.items = compra.items.filter(p => !(p.productoId.equals(producto._id) && p.variante === variante));
        }

        // Guardar la compra actualizada
        await compra.save();

        return { success: true, data: compra };
    } catch (error) {
        console.error('Error al quitar el producto de la compra:', error);
        return { success: false, error: 'Error al quitar el producto de la compra' };
    }
};

// Confirmar la compra
CompraSchema.statics.confirmar = async function(id) {
  try {
    const compra = await this.findOneAndUpdate(
      { id: id },
      { $set: { estado: 'confirmado' } },
      { new: true }
    );

    if (!compra) {
      return { success: false, error: 'Compra no encontrada' };
    }

    return { success: true, data: compra };
  } catch (error) {
    console.error('Error en confirmar:', error);
    return { success: false, error: 'Error al confirmar la compra' };
  }
};

// Actualizar datos del cliente
CompraSchema.statics.actualizarCliente = async function(id, datosCliente) {
  try {
    // Buscar y actualizar en una sola operación
    const compra = await this.findOneAndUpdate(
      { id: id },
      {
        $set: {
          'cliente.domicilio.calle': datosCliente.domicilio,
          'cliente.domicilio.localidad': datosCliente.localidad,
          'cliente.domicilio.cp': datosCliente.codigoPostal,
          'cliente.email': datosCliente.gmail,
          'cliente.telefono': datosCliente.telefono,
          'cliente.tarjeta': datosCliente.tarjeta
        }
      },
      { new: true } // Retorna el documento actualizado
    );

    if (!compra) {
      return { success: false, error: 'Compra no encontrada' };
    }

    return { success: true, data: compra };
  } catch (error) {
    console.error('Error en actualizarCliente:', error);
    return { success: false, error: 'Error al actualizar los datos del cliente' };
  }
};

// Cancelar la compra
CompraSchema.statics.cancelar = async function(id) {
  try {
    const compra = await this.findOneAndDelete({ id, estado: 'pendiente' });
    if (!compra) return { success: false, error: 'Compra no encontrada' };
    return { success: true, message: 'Compra eliminada exitosamente' };
  } catch (error) {
    return { success: false, error: 'Error al borrar la compra' };
  }
};

// Obtener la cantidad total de compras
CompraSchema.statics.cantidad = async function() {
  return await this.countDocuments();
};

const Compra = mongoose.model('Compra', CompraSchema);

export default Compra;

