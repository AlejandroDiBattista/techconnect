// Definición de los esquemas para MongoDB usando Mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Esquema para la clasificacion
const CategoriaSchema = new Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    url_imagen: { type: String, required: true },
}, { timestamps: true });

// Trae todas las categorias
CategoriaSchema.statics.traer = async function() {
    const categorias = await this.find().sort({ nombre: 1 });

    if (!categorias.length) return { success: false, error: `No hay categorias disponibles ${categorias.length}` };
    
    return { success: true, data: categorias };
};

// Cuanta la cantidad de categorias
CategoriaSchema.statics.cantidad = async function() {
    return await this.countDocuments();
};

const Categoria = mongoose.model('Categoria', CategoriaSchema);
export default Categoria;