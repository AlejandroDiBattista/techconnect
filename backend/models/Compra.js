// models/Compra.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  variante: { type: String }
});

const CompraSchema = new mongoose.Schema({
  items: [ItemSchema],
  estado: { type: String, default: 'pendiente' }, // 'pendiente', 'confirmado'
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

// Crea una compra
CompraSchema.statics.crear = async function() {
  try {
    const compra = await this.create({ estado: 'pendiente' });
    return { success: true, data: compra };
  } catch (error) {
    return { success: false, error: 'Error al crear la compra' };
  }
};

// Trae la compra 
CompraSchema.statics.traer = async function(id) {
    const compra = await this.findById(id).populate('items.productoId');
    if (!compra) return { success: false, error: 'Compra no encontrada' };
    return { success: true, data: compra };
};

// Agregar un producto a la compra
CompraSchema.statics.agregar = async function (id, producto, cantidad, variante) {
    const compra = await this.findById(id).populate('items.productoId');

    if (!compra) return { success: false, error: 'Compra no encontrada' };

    const existe = compra.items.find(p => p.productoId.equals(producto) && p.variante === variante);
    if (existe) {
      existe.cantidad += cantidad;
    } else {
      compra.items.push({ productoId: producto, cantidad, variante });
    }

    await compra.save();
    return { success: true, data: compra };
};

// Quitar un producto de la compra
CompraSchema.statics.quitar = async function (id, producto, cantidad, variante) {
    const compra = await this.findById(id).populate('items.productoId');

    if (!compra) return { success: false, error: 'Compra no encontrada' };

    const existe = compra.items.find(p => p.productoId.equals(producto) && p.variante === variante);
    if (!existe) return { success: false, error: 'Producto no encontrado en la compra' };

    existe.cantidad -= cantidad;
    if (existe.cantidad <= 0) {
      compra.items = compra.items.filter(p => !(p.productoId.equals(producto) && p.variante === variante));
    }

    await compra.save();
    return { success: true, data: compra };
};


// Confirma la compra
CompraSchema.statics.confirmar = async function(id, cliente) {
  try {
    const compra = await this.findOne({ userId: id, estado: 'pendiente' });
    if (!compra) return { success: false, error: 'Compra no encontrada o ya confirmada' };
    
    compra.cliente = cliente;
    compra.estado = 'confirmado';
    await compra.save();
    return { success: true, data: compra };
  } catch (error) {
    return { success: false, error: 'Error al confirmar la compra' };
  }
};

// Cancelar la compra
CompraSchema.statics.cancelar = async function(id) {
  try {
    const compra = await this.findOneAndDelete({ userId: id, estado: 'pendiente' });
    if (!compra) return { success: false, error: 'Compra no encontrada' };
    return { success: true, message: 'Compra eliminada exitosamente' };
  } catch (error) {
    return { success: false, error: 'Error al borrar la compra' };
  }
};

// Cuenta la cantidad de compras
CompraSchema.statics.cantidad = async function() {
  return await this.countDocuments();
};

const Compra = mongoose.model('Compra', CompraSchema);
export default Compra;

