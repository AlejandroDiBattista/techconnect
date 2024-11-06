import productos from './productos.json';
import categorias from './categorias.json';

function traerProductos(id) {
    return productos.filter(producto => producto.categoria === id);
}

function traerCaterorias() {
    return categorias;
}

export default { traerProductos, traerCaterorias};