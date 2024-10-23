const categoria = {
    id: 1,
    nombre: 'tablet',
    url_imagen: 'img/0001.jpg',
};

const productos = [
    {
        id: 1,
        nombre: 'Samsung Galaxy Tab S8',
        precio: 1000,
        categoria_id: categoria.id, // Usar solo el id de la categoría
        url_imagen: 'img/0001.jpg',
        detalle: `Pantalla: 11 pulgadas, Super AMOLED, resolución 2560x1600.  Procesador: Qualcomm Snapdragon 88.  Memoria RAM: 6/8 GB.  Cámaras: 13 MP principal, 6 MP frontal. Batería: 8000 mAh. Sistema Operativo: Android 11`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 1000 },
                    { valor: '256GB', aumento: 1200 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro espacial', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                    { valor: 'oro rosado', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: 'Apple iPad Air (4ta generación)',
        precio: 1000,
        categoria_id: categoria.id, // Usar solo el id de la categoría
        url_imagen: 'img/0002.jpg', // Cambié la URL de la imagen
        detalle: `- Pantalla: 10,9 pulgadas, LCD, resolución 2224x1668.  Procesador: Apple A14 Bionic. Memoria RAM: 3/4 GB. Cámaras: 12 MP principal, 7 MP frontal. Batería: 7600 mAh. Sistema Operativo: iPadOS 14`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '64GB', aumento: 1000 },
                    { valor: '256GB', aumento: 1200 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'gris espacial', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                    { valor: 'oro rosado', aumento: 0 },
                    { valor: 'verde', aumento: 0 },
                    { valor: 'azul cielo', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: 'Lenovo Tab P11 Pro',
        precio: 1000,
        categoria_id: categoria.id, 
        url_imagen: 'img/0003.jpg', 
        detalle: `Pantalla: 11,5 pulgadas, OLED, resolución 2560x1600.  Procesador: MediaTek Helio P60T. Memoria RAM: 4/6 GB. Cámaras: 13 MP principal, 8 MP frontal.  Batería: 8600 mAh. Sistema Operativo: Android 10`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 1000 },
                    { valor: '256GB', aumento: 1200 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'gris', aumento: 0 }
                ]
            }
        ]
    }
];
