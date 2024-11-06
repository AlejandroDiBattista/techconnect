import productos  from './productos.json';
import categorias from './categorias.json';

function traerProductos(id) {
    console.log(">> traerProductos", id);
    console.log(productos.filter(producto => producto.categoria_id == id));
    return productos.filter(producto => producto.categoria_id == id);
}

function traerCaterorias() {
    return categorias;
}

export default { traerProductos, traerCaterorias};