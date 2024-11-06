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

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;
