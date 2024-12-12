import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import rutas from './routes/rutas.js';

// import productos  from './data/productos.json';
// import categorias from './data/categorias.json';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

//Utilizacion de rutas
app.use('', rutas);

await mongoose.connect('mongodb://localhost:27017/techconnect');
// Conexión
const ConectarDB = async () => {
    app.listen(PORT, () => { console.log(`Servidor escuchando en el puerto ${PORT}`); });
    try {
        console.log("Se conecto a la Base de datos");
    } catch (error) {
        console.error("Fallo la conexion", error);
    }
};

ConectarDB();