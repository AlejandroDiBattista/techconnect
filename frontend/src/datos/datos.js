const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class DataService {

    static async get(url) {
        salida = null;
        try {
            const response = await fetch(`${BASE_URL}${url}`);
            if (response.ok) salida = await response.json();
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
        }
        return salida;
    }   

  static async traerCategorias() {
    return await DataService.get('/categorias');
  }

  static async traerProducto(producto) {
    const data = await DataService.get(`/productos`);
    return data.find(producto => producto._id == producto);
  }

  static async traerProductosPorCategoria(categoria) {
    return await DataService.get(`/productos/${categoria}`) || [];
  }

  static async traerCompra(usuario) {
    return await DataService.get(`/compra/${usuario}`);
  }
  
  static traerImagen(url) {
    return DataService.traerImagenes(url)[0] ;
  }

  static traerImagenes(urls) {
    return urls.split(",").map(url => `/images/${url.trim()}`);
  }
}

export default DataService;