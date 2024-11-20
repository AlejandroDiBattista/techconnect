# Cambios realizados al proyecto


### 1. Unificamos la clase compra y cliente.

    Asumimos que cada compra es espontanea asi que la informacion del clientes se guarda en la compra.

### 2. Uso de `id` en vez de `_id`

    Esto se hace para que sea más fácil de entender y probar. Aprovechamos que no estamos realizando altas de clasificación ni de productos.

    Cuando usamos `_id`, al cargar nuevos productos, cambia lo que dificulta probar el sistema.

### 3. Automatización de la carga de datos

    Ahora, para cargar los datos se debe usar `npm run cargar`.  
    Esto carga los datos de prueba que están en `data/categoria` y `data/producto` mediante el archivo `cargar_datos.js` (antes `database.js`).

### 4. Implementación de las funciones agregar y quitar

    Ahora se pueden agregar y quitar productos de la compra. 
    Esto se hace mediante los metodos agregarProducto y quitarProducto de la clase Compra.

### 5. Agregamos pruebas para el api 

    En Probar.http se puede verificiar que el api funciona correctamente.

### 6. Agregamos la registracion de los clientes

    Ahora se pueden registrar clientes mediante el metodo `actualizarCliente` de la clase Compra.

### 7. Cambiamos el estilo de Material-UI a Radix-Ui

    Cambiamos el estilo de Material-UI a Radix-Ui para que sea mas facil de personalizar.
    