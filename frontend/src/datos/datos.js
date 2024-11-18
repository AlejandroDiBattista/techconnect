const BASE_URL = typeof process !== 'undefined' && process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:3000';

async function pedir(url, data = null) {
  const [method, camino] = url.split(' ');
  let salida = null;
  try {
    const options = { method, headers: { 'Content-Type': 'application/json' }};
    if (data) options.body = JSON.stringify(data);
    const response = await fetch(`${BASE_URL}${camino}`, options);
    salida = await response.json();
    if (!response.ok) {
      throw new Error(salida.error || 'Error en la solicitud');
    }
  } catch (error) {
    console.error(`Error ${method} ${camino}:`, error);
    throw error;
  }
  console.info(`[${url}]`, data ?? '', `-> ${JSON.stringify(salida, null, '')}`);
  return salida;
}

class DataService {
  
    static async traerCategorias() {
        console.log('DataService.traerCategorias');
        return await pedir('GET /categorias');
    }

    static async traerProducto(productoId) {
        console.log('DataService.traerProducto', productoId);
        return await pedir(`GET /producto/${productoId}`);
    }

    static async traerProductosPorCategoria(categoriaId) {
        console.log('DataService.traerProductosPorCategoria', categoriaId);
        return await pedir(`GET /productos/${categoriaId}`) || [];
    }

    static setCompraId(compraId) {
        localStorage.setItem('compraId', compraId);
    }

    static getCompraId() {
        return localStorage.getItem('compraId');
    }

    static removeCompraId() {
        localStorage.removeItem('compraId');
    }

    static async traerCompraActiva() {
        console.log('DataService.traerCompraActiva');

        let compraId = DataService.getCompraId(); // Usar getCompraId()

        console.log('CompraId en localStorage:', compraId);

        if (compraId) {
            const compra = await DataService.traerCompra(compraId);
            if (compra) {
                console.log('Compra encontrada:', compra);
                return { compraId, productos: compra.productos };
            } else {
                console.log('No se encontró la compra, eliminando compraId de localStorage.');
                DataService.removeCompraId(); // Usar removeCompraId()
            }
        }

        // Crear una nueva compra si no existe
        console.log('Creando nueva compra');
        const nuevaCompra = await DataService.crearCompra();
        if (nuevaCompra && nuevaCompra.id) {
            compraId = nuevaCompra.id;
            DataService.setCompraId(compraId); // Usar setCompraId()
            return { compraId, productos: [] };
        }

        throw new Error('No se pudo obtener o crear una compra activa');
    }

    static async crearCompra() {
        console.log('DataService.crearCompra');
        return await pedir('POST /compra');
    }

    static async traerCompra(compraId) {
        try {
            const compra = await pedir(`GET /compra/${compraId}`);
            if (!compra || !compra.id) {
                return null;
            }
            return {
                compraId: compra.id,
                productos: compra.items?.map(item => ({
                    id: item.productoId.id,
                    nombre: item.productoId.nombre,
                    precio: item.productoId.precio,
                    url_imagen: item.productoId.url_imagen,
                    cantidad: item.cantidad,
                    variante: item.variante
                })) || []
            };
        } catch (error) {
            console.error('Error en traerCompra:', error);
            return null;
        }
    }

    static async confirmarCompra(compraId) {
        console.log('DataService.confirmarCompra', compraId);
        DataService.removeCompraId(); // Mover gestión de localStorage aquí
        return await pedir(`POST /compra/${compraId}/confirmar`);
    }
    
    static async cancelarCompra(compraId) {
        console.log('DataService.cancelarCompra', compraId);
        DataService.removeCompraId(); // Mover gestión de localStorage aquí
        return await pedir(`DELETE /compra/${compraId}/cancelar`);
    }

    static async agregarProducto(compraId, productoId, variante = '') {
        console.log('DataService.agregarProducto', { compraId, productoId, variante });
        const encodedVariante = encodeURIComponent(variante);
        return await pedir(`POST /compra/${compraId}/${productoId}/${encodedVariante}`);
    }

    static async quitarProducto(compraId, productoId, variante = '') {
        console.log('DataService.quitarProducto', { compraId, productoId, variante });
        const encodedVariante = encodeURIComponent(variante);

        return await pedir(`DELETE /compra/${compraId}/${productoId}/${encodedVariante}`);
    }

    static async actualizarCliente(compraId, datosCliente) {
        console.log('DataService.actualizarDatosCliente', { compraId, datosCliente });
        // Log adicional para depuración
        console.log('Datos enviados al servidor:', JSON.stringify(datosCliente, null, 2));
        return await pedir(`POST /compra/${compraId}/cliente`, datosCliente);
    }

    static traerImagen(urls) {
        return DataService.traerImagenes(urls)[0];
    }   

    static traerImagenes(urls) {
        return urls.split(",").map(url => `/images/${url.trim()}`);
    }
}

export default DataService;
