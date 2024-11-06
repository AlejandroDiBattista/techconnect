import productos  from './productos.json';
import categorias from './categorias.json';

function traerProducto(id_producto) {
    return productos.find(producto => producto.id == id_producto);
}

function traerProductos(id_categoria) {
    return productos.filter(producto => producto.categoria_id == id_categoria);
}

function traerCaterorias() {
    return categorias;
}

export default { traerProductos, traerProducto, traerCaterorias};