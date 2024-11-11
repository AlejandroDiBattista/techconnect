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


// Métodos estáticos para el modelo de producto
ProductoSchema.statics.traerProductos = async function(categoria) {
    const filtro = categoria ? { categoria } : {};
    return this.find(filtro)
               .populate('categoria')
               .sort({ nombre: 1 });
};

ProductoSchema.statics.traerProducto = async function(id) {
    const producto = await this.findById(id)
                              .populate('categoria');
    if (!producto) {
        throw new Error('Producto no encontrado');
    }
    return producto;
};

const Producto = mongoose.model('Producto', ProductoSchema);

export default Producto;
