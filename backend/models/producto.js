import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Clasificacion', required: true },
    url_imagen: { type: String, required: true },
    detalle: { type: String, required: true },
    cantidad: { type: Number, required: true },
    variantes: [{
        nombre: { type: String, required: true },
        valores: [{
            valor: { type: String, required: true },
            aumento: { type: Number, required: true },
        }],
    }],
}, { timestamps: true });

const Producto = mongoose.model('Producto', ProductoSchema);

export default Producto;
