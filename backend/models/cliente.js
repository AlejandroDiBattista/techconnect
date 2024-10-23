import mongoose from 'mongoose';
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    domicilio: {
        calle: { type: String, required: true },
        localidad: { type: String, required: true },
        cp: { type: Number, required: true },
    },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    tarjeta: { type: String, required: true },
}, { timestamps: true });

const Cliente = mongoose.model('Cliente', ClienteSchema);
export default Cliente;