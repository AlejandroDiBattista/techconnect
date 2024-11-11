import mongoose from 'mongoose';
import assert from 'assert';

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

ClienteSchema.statics.agregar = async function(datos) {
    const email = datos.email;
    assert(validarEmail(email), 'Email es requerido');
    
    // Verificar si ya existe el email
    const clienteExistente = await this.findOne({ email });
    if (clienteExistente) {
        throw new Error('El email ya está registrado');
    }
    
    const cliente = new this(datos);
    return cliente.save();
};

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const Cliente = mongoose.model('Cliente', ClienteSchema);
export default Cliente;