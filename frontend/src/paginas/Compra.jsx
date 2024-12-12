import DataService from '../datos/datos'; // Importar DataService

import { useState, useEffect } from 'react'; // Añadir useState y useEffect
import { useNavigate } from 'react-router-dom';

import { MostrarProducto } from '../components/MostrarProducto'; // Importar el nuevo componente
import { Accion } from '../components/Accion';
import { Text, Flex, Box } from '@radix-ui/themes';

export function Carrito() {
	const navigate = useNavigate(); // Inicializar el hook useNavigate

	const [productos, setProductos] = useState([]); // Estado para productos
	const [compraId, setCompraId] = useState(null); // Estado para compraId

	const [loading, setLoading] = useState(true); // Añadir estado de carga
	const [error, setError] = useState(null); // Agregar estado para errores

	useEffect(() => {
		async function manejarCompra() {
			try {
				const compraActiva = await DataService.traerCompraActiva();
				if (compraActiva && compraActiva.compraId) {
					setCompraId(compraActiva.compraId);
					setProductos(compraActiva.productos);
				} else {
					setError('No se pudo cargar la compra');
				}
			} catch {
				setError('Error al cargar el carrito');
			} finally {
				setLoading(false);
			}
		}

		manejarCompra();
	}, []);

	const onAgregar = async (id, variante = '') => {
		try {
			await DataService.agregarProducto(compraId, id, variante);
			const compraActualizada = await DataService.traerCompra(compraId);
			if (compraActualizada) {
				setProductos(compraActualizada.productos);
			}
		} catch (error) {
			console.error('Error al agregar producto:', error);
		}
	};

	const onQuitar = async (id, variante = '') => {
		try {
			await DataService.quitarProducto(compraId, id, variante);
			const compraActualizada = await DataService.traerCompra(compraId);
			if (compraActualizada) setProductos(compraActualizada.productos);
		} catch (error) {
			console.error('Error al quitar producto:', error);
		}
	};

	const onConfirmar = async () => {
		try {
			setLoading(true); // Mostrar estado de carga
			const resultado = await DataService.confirmarCompra(compraId);
			if (resultado) { // Asegurarse de que la confirmación fue exitosa
				navigate('/cliente');
			} else {
				setError('No se pudo confirmar la compra');
			}
		} catch (error) {
			console.error('Error al confirmar la compra:', error);
			setError('Error al confirmar la compra. Por favor, intente nuevamente.');
		} finally {
			setLoading(false);
		}
	};

	const onCancelar = async () => {
		await DataService.cancelarCompra(compraId);
		navigate('/');
	};

	const calcularTotal = () => productos.reduce((suma, producto) => suma + producto.cantidad * producto.precio, 0);

	if (loading)           return <Text>Cargando carrito...</Text>;
	if (error)             return <Text>{error}</Text>;
	if (!productos.length) return <Text>El carrito está vacío</Text>

	
	return (
		<>
			<Box style={{ margin: '0 auto', width: "800px" }}>
				<Text size="5" weight="bold">Changuito</Text>
				<Flex gap="3" direction="column">
					{productos.map((producto) =>
						<MostrarProducto key={`${producto.id}${producto.variante}`} 
							producto={producto}
						 	onAgregar={onAgregar} 
							onQuitar={onQuitar} />)
					}
				</Flex>
				<Box my="3"><Text size="6" align="right" weight="bold" >Total: ${calcularTotal()}</Text></Box>
				<Flex direction="row" gap="2" justify="between">
					<Accion texto="Cancelar Compra" onClick={onCancelar} />
					<Accion texto="Confirmar Compra" onClick={onConfirmar} />
				</Flex>
			</Box>
		</>
	);


}

export default Carrito;
