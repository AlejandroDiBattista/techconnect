// models/Carrito.js
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  variante: { type: String }
});

const carritoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productos: [productoSchema],
  estado: { type: String, default: 'pendiente' } // 'pendiente', 'confirmado'
});

//Metodo para agregar un producto al carrito
carritoSchema.statics.agregarProducto = async function (userId, productoId, cantidad, variante) {
  try {
    let carrito = await this.findOne({ userId, estado: 'pendiente' });

    if (!carrito) {
      carrito = new this({ userId, productos: [] });
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
    return { success: true, data: carrito };
  } catch (error) {
    return { success: false, error: 'Error al agregar producto' };
  }
};

// Método para ver carrito
carritoSchema.statics.verCarrito = async function(userId) {
  try {
    const carrito = await this.findOne({ userId, estado: 'pendiente' })
      .populate('productos.productoId');
    
    if (!carrito) {
      return { success: false, error: 'Carrito no encontrado' };
    }
    return { success: true, data: carrito };
  } catch (error) {
    return { success: false, error: 'Error al obtener el carrito' };
  }
};

// Método para confirmar compra
carritoSchema.statics.confirmarCompra = async function(userId) {
  try {
    const carrito = await this.findOne({ userId, estado: 'pendiente' });
    if (!carrito) {
      return { success: false, error: 'Carrito no encontrado o ya confirmado' };
    }
    
    carrito.estado = 'confirmado';
    await carrito.save();
    return { success: true, data: carrito };
  } catch (error) {
    return { success: false, error: 'Error al confirmar la compra' };
  }
};

// Método para eliminar producto
carritoSchema.statics.eliminarProducto = async function(userId, productoId, cantidad, variante) {
  try {
    const carrito = await this.findOne({ userId, estado: 'pendiente' });
    if (!carrito) {
      return { success: false, error: 'Carrito no encontrado' };
    }

    const productoExistente = carrito.productos.find(
      (prod) => prod.productoId.toString() === productoId && prod.variante === variante
    );

    if (!productoExistente) {
      return { success: false, error: 'Producto no encontrado en el carrito' };
    }

    productoExistente.cantidad -= cantidad;

    if (productoExistente.cantidad <= 0) {
      // Si la cantidad llega a 0 o menos, eliminamos el producto
      carrito.productos = carrito.productos.filter(
        (prod) => !(prod.productoId.toString() === productoId && prod.variante === variante)
      );
    }

    await carrito.save();
    return { success: true, data: carrito };
  } catch (error) {
    return { success: false, error: 'Error al eliminar el producto del carrito' };
  }
};

// Método para borrar carrito
carritoSchema.statics.borrarCarrito = async function(id) {
  try {
    const carrito = await this.findByIdAndDelete(id);
    if (!carrito) {
      return { success: false, error: 'Carrito no encontrado' };
    }
    return { success: true, message: 'Carrito eliminado exitosamente' };
  } catch (error) {
    return { success: false, error: 'Error al borrar el carrito' };
  }
};

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;

