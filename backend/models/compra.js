import mongoose from 'mongoose';
import Producto from './producto';
const { Schema } = mongoose;

const CompraSchema = new Schema({
    fecha: { type: Date, required: true, default: Date.now },
    items: [{
        productoId: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: Number, required: true },
        precio: { type: Number, required: true },
        variante: { type: Map, of: String },
    }],
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    estado: { type: String, enum: ['pendiente', 'pagado', 'enviado'], required: true },
}, { timestamps: true });

CompraSchema.methods.agregarProducto = async function(productoId, cantidad, variante) {
    const producto = await Producto.findById(productoId);
    if (!producto) {
        throw new Error('Producto no encontrado');
    }

    const item = {
        productoId: producto._id,
        cantidad: cantidad,
        precio: producto.precio,
        variante: variante
    };

    this.items.push(item);
    await this.save();
};
const Compra = mongoose.model('Compra', CompraSchema);

export default Compra;
