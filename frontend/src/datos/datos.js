import productos from './productos.json';

function traerCategoria(id) {
    return productos.filter(producto => producto.categoria === id);
}

export default { traerCategoria };