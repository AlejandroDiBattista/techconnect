import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión
const ConectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Techconnect');
        console.log("Se conecto a la Base de datos");
        app.listen(PORT, () => { console.log(`Servidor escuchando en el puerto ${PORT}`); });
    } catch (error) {
        console.error("Fallo la conexion", error);
    }
};

ConectarDB();