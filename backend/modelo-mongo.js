// Definición de los esquemas para MongoDB usando Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para la clasificacion
const CategoriaSchema = new Schema({
    nombre: { type: String, required: true },
    url_imagen: { type: String, required: true },
}, { timestamps: true });

const Clasificacion = mongoose.model('Clasificacion', CategoriaSchema);

// Esquema para el producto
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

// Esquema para la compra
const CompraSchema = new Schema({
    fecha: { type: Date, required: true, default: Date.now },
    items: [{
        productoId: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: Number, required: true },
        precio: { type: Number, required: true },
        variante: { type: Map, of: String },
    }],
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    estado: { type: String, enum: ['pendiente', 'pagado', 'enviado'], required: true },
}, { timestamps: true });

CompraSchema.methods.agregarProducto = async function(productoId, cantidad, variante) {
    const producto = await Producto.findById(productoId);
    if (!producto) {
        throw new Error('Producto no encontrado');
    }

    const item = {
        productoId: producto._id,
        cantidad: cantidad,
        precio: producto.precio,
        variante: variante
    };

    this.items.push(item);
    await this.save();
};
const Compra = mongoose.model('Compra', CompraSchema);

// Esquema para el cliente
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

// Exportando los modelos
module.exports = {
    Clasificacion,
    Producto,
    Compra,
    Cliente
};