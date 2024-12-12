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
    try {
        const categorias = await this.find().sort({ nombre: 1 });

        if (!categorias.length) return { success: false, error: 'No hay categorías disponibles' };
        
        return { success: true, data: categorias };
    } catch (error) {
        console.error('Error al traer categorías:', error);
        return { success: false, error: 'Error al obtener las categorías' };
    }
};

// Cuanta la cantidad de categorias
CategoriaSchema.statics.cantidad = async function() {
    try {
        const count = await this.countDocuments();
        return { success: true, data: count };
    } catch (error) {
        console.error('Error al contar categorías:', error);
        return { success: false, error: 'Error al contar las categorías' };
    }
};

const Categoria = mongoose.model('Categoria', CategoriaSchema);
export default Categoria;

