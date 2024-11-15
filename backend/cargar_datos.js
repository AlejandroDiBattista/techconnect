import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Producto from './models/producto.js';
import Categoria from './models/categoria.js';
import Compra from './models/compra.js';


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/techconnect');
        console.log('MongoDB connected...\n');
        await cargarDatosIniciales();
        await mongoose.connection.close();
        console.log('\nMongoDB connection closed.');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

const cargarDatosIniciales = async (borrar=true) => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):\//, '$1:/'));
    
    if (borrar) {
        console.log('> Borrando datos existentes');
        await Categoria.deleteMany({});
        await Producto.deleteMany({});
        await Compra.deleteMany({});
    }
    
    const productoCount  = await Producto.cantidad();
    const categoriaCount = await Categoria.cantidad();
    const compraCount    = await Compra.cantidad(); 

    console.log(`  hay ${productoCount} productos, ${categoriaCount} categorias  y ${compraCount} compras en la base de datos`);

    if (categoriaCount === 0) {
        const categorias = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/categorias.json'), 'utf-8'));
        console.log(`> Cargando ${categorias.length} categorias`);

        await Categoria.insertMany(categorias);
    } else {
        console.log(`  Las categorias ya están cargadas, hay ${categoriaCount} categorias`);
    }

    if (productoCount === 0) {
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/productos.json'), 'utf-8'));
        console.log(`> Cargando ${productos.length} productos`);

        // Traer todas las categorias y crear un mapa de id a _id
        const categoriaMap = {};
        const categorias = await Categoria.find();
        categorias.forEach(categoria => {
            categoriaMap[categoria.id] = categoria._id;
        });

        // Reemplazar los id de categoria por _id
        for (let producto of productos) {
            if (categoriaMap[producto.categoria]) {
                producto.categoria_id = producto.categoria;
                producto.categoria = categoriaMap[producto.categoria];
            }
        }
        await Producto.insertMany(productos);
    } else {
        console.log(`  Los productos ya están cargados, hay ${productoCount} productos`);
    }
};


connectDB();