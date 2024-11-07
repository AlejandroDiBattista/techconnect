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
  let carrito = await this.findOne({ userId, estado: 'pendiente' });

  if (!carrito) {
    carrito = new this({ userId, productos: [] });
  }

  const productoExistente = carrito.productos.find( (prod) => prod.productoId.toString() === productoId && prod.variante === variante );

  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito.productos.push({ productoId, cantidad, variante });
  }
  
  await carrito.save();

  return carrito;
}
// Método para ver carrito
carritoSchema.statics.verCarrito = async function(userId) {
  return this.findOne({ userId, estado: 'pendiente' }).populate('productos.productoId');
};

// Método para confirmar compra
carritoSchema.statics.confirmarCompra = async function(userId) {
  const carrito = await this.findOne({ userId, estado: 'pendiente' });
  if (carrito) {
    carrito.estado = 'confirmado';
    await carrito.save();
  }
  return carrito;
};

// Método para eliminar producto
carritoSchema.statics.eliminarProducto = async function(userId, productoId) {
  const carrito = await this.findOne({ userId, estado: 'pendiente' });
  if (!carrito) return null;

  carrito.productos = carrito.productos.filter(
    (prod) => prod.productoId.toString() !== productoId
  );

  await carrito.save();
  return carrito;
};

// Método para borrar carrito
carritoSchema.statics.borrarCarrito = async function(id) {
  return this.findByIdAndDelete(id);
};

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;

