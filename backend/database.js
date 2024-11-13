import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Producto from './models/producto.js';
import Categoria from './models/categoria.js';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/techconnect');
        console.log('MongoDB connected');
        await cargarDatosIniciales();
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    } 
};

const cargarDatosIniciales = async () => {
    const productoCount  = await Producto.cantidad();
    const categoriaCount = await Categoria.cantidad();

    console.log(`hay ${productoCount} productos y ${categoriaCount} categorias en la base de datos`);
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    
    if (categoriaCount === 0) {
        const categorias = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/categorias.json'), 'utf-8'));
        console.log(`>> Cargando ${categorias.length} categorias`);

        await Categoria.insertMany(categorias);
    }
    
    if (productoCount === 0) {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/productos.json'), 'utf-8'));
        console.log(`>> Cargando ${productos.length} productos`);

        // Traer todas las categorias y crear un mapa de id a _id
        const categoriaMap = {};
        const categorias = await Categoria.find();
        categorias.forEach(categoria => {
            categoriaMap[categoria.id] = categoria._id;
        });

        // Reemplazar los id de categoria por _id
        for (let producto of productos) {
            if (categoriaMap[producto.categoria]) {
                producto.categoria = categoriaMap[producto.categoria];
            }
        }
        console.log(`hay ${productos.length} productos`);
        await Producto.insertMany(productos);
    }
};


connectDB();