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

// Agregar un cliente
ClienteSchema.statics.crear = async function(datos) {
    const email = datos.email;
    if (!email || !validarEmail(email)) {
        return { success: false, error: 'Email es requerido' };
    }
    
    const clienteExistente = await this.findOne({ email });
    if (clienteExistente) {
        return { success: false, error: 'El email ya está registrado' };
    }
    
    const cliente = new this(datos);
    await cliente.save();
    return { success: true, data: cliente };
};

// Trae un cliente especifico
ClienteSchema.statics.traer = async function(id) {
    const cliente = await this.findById(id);
    if (!cliente) {
        return { success: false, error: 'Cliente no encontrado' };
    }
    return { success: true, data: cliente };
}

// Cuenta la cantidad de clientes 
ClienteSchema.statics.cantidad = async function() {
    return await this.countDocuments();
};

// Validar email
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const Cliente = mongoose.model('Cliente', ClienteSchema);
export default Cliente;