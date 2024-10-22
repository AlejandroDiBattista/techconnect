const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//posibles imports 
const categoriaRutas = require('./routes/categoria');   
const clienteRutas = require('./routes/cliente');
const compraRutas = require('./routes/compra');
const productoRutas = require('./routes/producto');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

//Conexión 
mongoose.connect('mongodb://localhost:27017/techconnet')

.then(() => {
    console.log('Conectado a MongoDB');
})
.catch (err => console.error('Error al conectar a MongoDB', err));

//posibles rutas
app.use('/categoria', categoriaRutas);
app.use('/producto', productoRutas);
app.use('/compra', compraRutas);
app.use('/cliente', clienteRutas);

//iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});