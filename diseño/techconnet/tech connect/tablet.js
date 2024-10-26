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
        categoria_id: categoria.id,
        url_imagen: 'img/0001.jpg',
        detalle: `Pantalla: 11 pulgadas, Super AMOLED, resolución 2560x1600. Procesador: Qualcomm Snapdragon 88. Memoria RAM: 6/8 GB. Cámaras: 13 MP principal, 6 MP frontal. Batería: 8000 mAh. Sistema Operativo: Android 11`,
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
        categoria_id: categoria.id,
        url_imagen: 'img/0002.jpg',
        detalle: `Pantalla: 10,9 pulgadas, LCD, resolución 2224x1668. Procesador: Apple A14 Bionic. Memoria RAM: 3/4 GB. Cámaras: 12 MP principal, 7 MP frontal. Batería: 7600 mAh. Sistema Operativo: iPadOS 14`,
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
        detalle: `Pantalla: 11,5 pulgadas, OLED, resolución 2560x1600. Procesador: MediaTek Helio P60T. Memoria RAM: 4/6 GB. Cámaras: 13 MP principal, 8 MP frontal. Batería: 8600 mAh. Sistema Operativo: Android 10`,
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
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy Tab S7',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0004.jpg',
        detalle: `Pantalla: 11 pulgadas, LCD, 2560 x 1600 píxeles, Procesador: Snapdragon 865+, RAM: 6 GB, Almacenamiento: 128 GB (ampliable hasta 1 TB con microSD), Cámaras: Trasera de 13 MP, frontal de 8 MP. Batería: 8,000 mAh, carga rápida de 45W. Sistema Operativo: Android 10, actualizable`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'Mystic Black', aumento: 0 },
                    { valor: 'Mystic Silver', aumento: 0 },
                    { valor: 'Mystic Bronze', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 5,
        nombre: 'Microsoft Surface Go 3',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0005.jpg',
        detalle: `Pantalla: 10.5 pulgadas, PixelSense, 1920 x 1280 píxeles, Procesador: Intel Pentium Gold 6500Y / Intel Core i3, RAM: 4 GB / 8 GB. Cámaras: Trasera de 8 MP, frontal de 5 MP. Batería: Hasta 11 horas de uso. Sistema Operativo: Windows 11`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '64GB', aumento: 1000 },
                    { valor: '128GB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'gris', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 6,
        nombre: 'Dell Inspiron 15',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0006.jpg',
        detalle: `Pantalla 15.6” FHD, Intel Core i5 de 12.ª generación, 8 GB RAM. Ideal para: Productividad diaria y tareas multitarea`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '512GB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'plata', aumento: 0 },
                    { valor: 'negro', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 7,
        nombre: 'HP Pavilion x360 14',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0007.jpg',
        detalle: `Pantalla táctil 14” FHD, Intel Core i5 de 12.ª generación, 8 GB RAM. Ideal para: Trabajos de oficina, navegación y multimedia`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'dorado', aumento: 0 },
                    { valor: 'plata', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 8,
        nombre: 'Microsoft Surface Laptop Go 2',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0008.jpg',
        detalle: `Pantalla táctil 12.4” PixelSense, Intel Core i5 de 11.ª generación, 8 GB RAM. Ideal para: Portabilidad y productividad ligera`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'platino', aumento: 0 },
                    { valor: 'azul hielo', aumento: 0 },
                    { valor: 'arena', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 9,
        nombre: 'Razer Blade 15',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0009.jpg',
        detalle: `Pantalla 15.6” FHD/QHD, Intel Core i7 de 13.ª generación, 16 GB RAM, NVIDIA GeForce RTX 3070 Ti. Ideal para: Juegos de alto rendimiento y edición gráfica intensiva`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '1TB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro mate', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 10,
        nombre: 'Asus ROG Zephyrus Duo 16',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0010.jpg',
        detalle: `Pantalla Dual, 16” 4K/UHD, AMD Ryzen 9, 32 GB RAM, NVIDIA GeForce RTX 3080. Ideal para: Juegos avanzados, multitarea intensa y creatividad profesional`,
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '2TB', aumento: 1000 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro eclipse', aumento: 0 }
                ]
            }
        ]
    }
];


