import express from 'express';
import connectDB from './database.js';
import rutas from './routes/rutas.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', rutas);

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
