import { celulares } from './celulares.js';
import { tablas } from './tablas.js';

function cargar() {
    if (!localStorage.getItem('celulares')) {
        localStorage.setItem('celulares', JSON.stringify(celulares));
    }
    if (!localStorage.getItem('tablas')) {
        localStorage.setItem('tablas', JSON.stringify(tablas));
    }
}

cargar();
function traerCategoria(categoria) {
    let salida = null;
    
    categoria = parseInt(categoria);
    if (+categoria == 1) {
        salida = celulares;
    } else if (+categoria == 2) {
        salida = tablas;
    }
    console.log(`> traerCategoria: ${+categoria}`, salida);
    return salida;
}

function traerProducto(id) {
    let salida = null;
    id = +id;

    for (let producto of celulares) {
        if (+producto.id == id) {
            salida = producto;
            break;
        }
    }
    
    for (let producto of tablas) {
        if (+producto.id == id) {
            salida = producto;
            break;
        }
    }
    if(salida != null) {
        console.log(`> traerProducto: ${id}`, salida);
    } else {
        console.log(`> traerProducto: ${id} <Nada>`);
    }
    return salida;
}

const Datos = { traerCategoria, traerProducto };

export default Datos;
