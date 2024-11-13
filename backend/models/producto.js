import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const ProductoSchema = new Schema({
    id: Number,
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

// // Crear un producto (no implementado aun)
// ProductoSchema.statics.crear = async function(datos) {
//     const producto = new this(datos);
//     await producto.save();
//     return { success: true, data: producto };
// };

// Traer todos los productos o los de una categoría específica
ProductoSchema.statics.traerTodos = async function(categoria) {
    const productos = await this.find({ categoria: ObjectId(categoria) })
    
    if(!productos.length) return { success: false, error: 'No hay productos disponibles' };

    return { success: true, data: productos };
};

// Traer un producto específico
ProductoSchema.statics.traer = async function(id) {
    const producto = await this.findById(id)
    
    if (!producto) return { success: false, error: 'Producto no encontrado' };
    
    return { success: true, data: producto };
};


// Me dice cuantos productos hay en la tabla 
ProductoSchema.statics.cantidad = async function() {
    return await this.countDocuments();
};

const Producto = mongoose.model('Producto', ProductoSchema);

export default Producto;
