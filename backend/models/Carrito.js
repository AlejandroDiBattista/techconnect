// models/Carrito.js
import mongoose from 'mongoose';

const ProductoSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  variante: { type: String }
});

const CarritoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, //userId: { type: String, required: true } (prueba)
  productos: [ProductoSchema],
  estado: { type: String, default: 'pendiente' } // 'pendiente', 'confirmado'
});

// Crea un carrito nuevo 
CarritoSchema.statics.crear = async function(userId) {
  try {
    const carrito = await this.create({ userId , estado: 'pendiente' });
    return { success: true, data: carrito };
  } catch (error) {
    return { success: false, error: 'Error al crear el carrito' };
  }
};
// Método para ver carrito
CarritoSchema.statics.traer = async function(userId) {
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

//Metodo para agregar un producto al carrito
CarritoSchema.statics.agregar = async function (userId, productoId, cantidad, variante) {
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

// Método para eliminar producto
CarritoSchema.statics.quitar = async function(userId, productoId, cantidad, variante) {
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


// Método para confirmar compra
CarritoSchema.statics.confirmar = async function(userId) {
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

// Método para borrar carrito
CarritoSchema.statics.cancelar = async function(userId) {
  try {
    const carrito = await this.findOneAndDelete({ userId, estado: 'pendiente' });
    if (!carrito) {
      return { success: false, error: 'Carrito no encontrado' };
    }
    return { success: true, message: 'Carrito eliminado exitosamente' };
  } catch (error) {
    return { success: false, error: 'Error al borrar el carrito' };
  }
};

// Cuenta la cantidad de carritos
CarritoSchema.statics.cantidad = async function() {
  return await this.countDocuments();
};

const Carrito = mongoose.model('Carrito', CarritoSchema);
export default Carrito;

