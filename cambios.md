# Cambios introducidos al modelo.

1. Unificamos la clase compra y cliente.

    Asumimos que cada compra es espontanea asi que la informacion del clientes se guarda en la compra.

2. Cambiamos a que el acceso se haga mediante id (en vez de _id)
    
    Esto es para que sea mas facil de entender y probar. Aprovechamos que no estamos haciendo altas de clasificacion ni de productos.

    Cuando usamos _id al cargar nuevos productos cambia lo que hace dificil probar el sistema.

3. Se automatiza la carga de datos.

    Ahora para cargar los datos se debe usar 'npm run cargar'. 
    Esto carga los datos de prueba que estan en data/categoria y data/producto mediante el ar
    archivo 'cargar_datos.js' (antes database.js)
    

   