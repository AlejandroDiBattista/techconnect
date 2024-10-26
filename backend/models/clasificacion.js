// Definición de los esquemas para MongoDB usando Mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Esquema para la clasificacion
const ClasificacionSchema = new Schema({
    nombre: { type: String, required: true },
    url_imagen: { type: String, required: true },
}, { timestamps: true });

const Clasificacion = mongoose.model('Clasificacion', ClasificacionSchema);
export default Clasificacion;