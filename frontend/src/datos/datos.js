const BASE_URL = 'http://localhost:3001';

/**
 * Cliente HTTP para realizar peticiones al servidor
 * @class HttpClient
 */
class HttpClient {
    /**
     * Realiza una petición HTTP al servidor
     * @param {string} method - Método HTTP (GET, POST, DELETE, etc)
     * @param {string} path - Ruta de la API
     * @param {object} [data=null] - Datos a enviar en el cuerpo de la petición
     * @returns {Promise<any>} Respuesta del servidor
     */
    static async request(method, path, data = null) {
        const requestOptions = {
            method,
            headers: { 'Content-Type': 'application/json' },
            ...(data && { body: JSON.stringify(data) })
        };

        try {
            const response = await fetch(`${BASE_URL}${path}`, requestOptions);
            const responseData = await response.json();

            // Manejar errores HTTP
            if (!response.ok) {
                throw new Error(responseData.error || `Error ${response.status}: ${response.statusText}`);
            }

            // Manejar respuesta del backend
            if (!responseData.success) {
                throw new Error(responseData.error || 'Error en la operación');
            }

            this.logSuccess(method, path, data, responseData);
            
            // Devolver solo los datos, manteniendo compatibilidad con código existente
            return responseData.data || [];
        } catch (error) {
            this.logError(method, path, error);
            if (method === 'GET') return []; // Para mantener compatibilidad con código existente
            throw error;
        }
    }

    static logSuccess(method, path, request, response) {
        console.info(`✓ [${method}] ${path}`, { request, response });
    }

    static logError(method, path, error) {
        console.error(`✗ [${method}] ${path}:`, error.message);
    }
}

/**
 * Gestiona el almacenamiento local de la sesión de compra
 * @class SessionManager
 */
class SessionManager {
    static COMPRA_KEY = 'compraId';

    static setCompraId(compraId) {
        localStorage.setItem(this.COMPRA_KEY, compraId);
    }

    static getCompraId() {
        return localStorage.getItem(this.COMPRA_KEY);
    }

    static removeCompraId() {
        localStorage.removeItem(this.COMPRA_KEY);
    }
}

/**
 * Servicio principal para gestionar las operaciones de datos con el backend
 * @class DataService
 */
class DataService {
    /**
     * Obtiene todas las categorías disponibles
     * @returns {Promise<Array>} Lista de categorías
     */
    static async traerCategorias() {
        return await HttpClient.request('GET', '/categorias');
    }

    /**
     * Obtiene los detalles de un producto específico
     * @param {string|number} productoId - ID del producto
     * @returns {Promise<object>} Detalles del producto
     */
    static async traerProducto(productoId) {
        return await HttpClient.request('GET', `/producto/${productoId}`);
    }

    /**
     * Obtiene una lista de productos por categoría
     * @param {string|number} categoriaId - ID de la categoría
     * @returns {Promise<Array>} Lista de productos
     */
    static async traerProductosPorCategoria(categoriaId) {
        return await HttpClient.request('GET', `/productos/${categoriaId}`) || [];
    }

    /**
     * Obtiene o crea una compra activa
     * @returns {Promise<object>} Detalles de la compra activa
     */
    static async traerCompraActiva() {
        let compraId = SessionManager.getCompraId();

        if (compraId) {
            const compra = await this.traerCompra(compraId);
            if (compra) return compra;
            SessionManager.removeCompraId();
        }

        return await this.iniciarNuevaCompra();
    }

    static async iniciarNuevaCompra() {
        const nuevaCompra = await this.crearCompra();
        if (!nuevaCompra?.id) {
            throw new Error('No se pudo crear una nueva compra');
        }

        SessionManager.setCompraId(nuevaCompra.id);
        return { compraId: nuevaCompra.id, productos: [] };
    }

    static async crearCompra() {
        return await HttpClient.request('POST', '/compra');
    }

    static async traerCompra(compraId) {
        try {
            const compra = await HttpClient.request('GET', `/compra/${compraId}`);
            return this.formatearCompra(compra);
        } catch {
            return null;
        }
    }

    static formatearCompra(compra) {
        if (!compra?.id) return null;
        return {
            compraId: compra.id,
            productos: compra.items?.map(item => ({
                id: item.productoId.id,
                nombre: item.productoId.nombre,
                precio: item.productoId.precio,
                url_imagen: item.productoId.url_imagen,
                cantidad: item.cantidad,
                variante: item.variante,
                variantes: item.productoId.variantes
            })) || []
        };
    }

    // Métodos de gestión de compra
    static async confirmarCompra(compraId) {
        SessionManager.removeCompraId();
        return await HttpClient.request('POST', `/compra/${compraId}/confirmar`);
    }
    
    static async cancelarCompra(compraId) {
        SessionManager.removeCompraId();
        return await HttpClient.request('DELETE', `/compra/${compraId}/cancelar`);
    }

    /**
     * Agrega un producto a una compra
     * @param {string|number} compraId - ID de la compra
     * @param {string|number} productoId - ID del producto
     * @param {string} [variante=''] - Variante del producto
     * @returns {Promise<object>} Compra actualizada
     */
    static async agregarProducto(compraId, productoId, variante = '') {
        const encodedVariante = encodeURIComponent(variante);
        return await HttpClient.request('POST', `/compra/${compraId}/${productoId}/${encodedVariante}`);
    }

    static async quitarProducto(compraId, productoId, variante = '') {
        const encodedVariante = encodeURIComponent(variante);
        return await HttpClient.request('DELETE', `/compra/${compraId}/${productoId}/${encodedVariante}`);
    }

    /**
     * Actualiza los datos del cliente en una compra
     * @param {string|number} compraId - ID de la compra
     * @param {object} datosCliente - Datos del cliente
     * @returns {Promise<object>} Compra actualizada
     */
    static async actualizarCliente(compraId, datosCliente) {
        return await HttpClient.request('POST', `/compra/${compraId}/cliente`, datosCliente);
    }

    // Métodos de utilidad
    static traerImagen(urls) {
        return this.traerImagenes(urls)[0];
    }   

    static traerImagenes(urls) {
        return urls.split(",").map(url => `/images/${url.trim()}`);
    }
}

export default DataService;
