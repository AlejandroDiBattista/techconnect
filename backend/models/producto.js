import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    id: Number,
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    categoria_id: { type: Number, required: true },
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

// Obtener todos los productos o los de una categoría específica
ProductoSchema.statics.traerTodos = async function(categoria) {
    try {
        const productos = await this.find({ categoria_id: categoria })
            .populate('categoria');
        
        if(!productos.length) return { success: false, error: 'No hay productos disponibles' };

        return { success: true, data: productos };
    } catch (error) {
        console.error('Error al traer productos:', error);
        return { success: false, error: 'Error al obtener los productos' };
    }
};

// Obtener un producto específico
ProductoSchema.statics.traer = async function(id) {
    try {
        const producto = await this.findOne({ id }).populate('categoria');
        
        if (!producto) return { success: false, error: 'Producto no encontrado' };
        
        return { success: true, data: producto };
    } catch (error) {
        console.error('Error al traer producto:', error);
        return { success: false, error: 'Error al obtener el producto' };
    }
};

// Obtener la cantidad de productos en la base de datos
ProductoSchema.statics.cantidad = async function() {
    try {
        const count = await this.countDocuments();
        return { success: true, data: count };
    } catch (error) {
        console.error('Error al contar productos:', error);
        return { success: false, error: 'Error al contar los productos' };
    }
};

const Producto = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);

export default Producto;
