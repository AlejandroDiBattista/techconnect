import DataService from '../datos/datos';

import { Card, Flex, Text, IconButton } from '@radix-ui/themes';
import { PlusCircledIcon, MinusCircledIcon, TrashIcon } from '@radix-ui/react-icons';

const nombre = (texto) => texto.replace(/\b\w/g, char => char.toUpperCase()); // Función para capitalizar texto

export function MostrarProducto({ producto, onAgregar, onQuitar }) {
    const size = '40px';

    const seleccion = producto.variante.split(',').map(s => +s);
    const variantes = producto.variantes.map((v, i) => [v.nombre, v.valores[seleccion[i]].valor]);
    
    return (
        <Card>
            <Flex gap="2">
                <img src={DataService.traerImagen(producto.url_imagen)} alt={producto.nombre} width="200" />
                <Flex direction="column" gap="2" justify="between">
                    <div></div>
                    <Text size="4" weight="bold">{producto.nombre}</Text>
                    {variantes.map(([opcion, valor], i) => <>
                        <Flex key={i}>
                            <Text size="3" >{`${opcion}: `}</Text>
                            <Text size="3" weight="bold">{nombre(valor)}</Text>
                        </Flex>
                    </>)}
                    <div></div>
                    <Text size="5" color="text.secondary">
                        {producto.cantidad} * ${producto.precio} = <b>${producto.cantidad * producto.precio}</b>
                    </Text>
                    <Flex align="center" gap="3">
                        <IconButton size="4" variant='ghost' onClick={() => onQuitar(producto.id, producto.variante)}>
                            {producto.cantidad === 1 ? <TrashIcon width={size} height={size} /> : <MinusCircledIcon width={size} height={size} />}
                        </IconButton>
                        <Text size="5" weight="bold">{producto.cantidad}</Text>
                        <IconButton size="4" variant='ghost' onClick={() => onAgregar(producto.id, producto.variante)}>
                            <PlusCircledIcon width={size} height={size} />
                        </IconButton>
                    </Flex>
                    <div></div>
                </Flex>
            </Flex>
        </Card>

    );
}

