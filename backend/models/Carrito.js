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

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;
