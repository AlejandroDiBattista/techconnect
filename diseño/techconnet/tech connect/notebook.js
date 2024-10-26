const categoria = {
    id: 1,
    nombre: 'notebook',
    url_imagen: 'img/0000.jpg',
};

const productos = [
    {
        id: 1,
        nombre: 'Acer Aspire 5',
        precio: 500,
        categoria_id: categoria.id,
        url_imagen: 'img/0001.jpg',
        detalle: `Pantalla: 15.6" FHD, Procesador: Intel Core i3 de 10ma generación, RAM: 4GB, Almacenamiento: 128GB SSD. Ideal para: Navegación básica y trabajos de oficina.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB SSD', aumento: 0 },
                    { valor: '256GB SSD', aumento: 100 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'plata', aumento: 0 },
                    { valor: 'negro', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: 'HP 14-dk1032wm',
        precio: 550,
        categoria_id: categoria.id,
        url_imagen: 'img/0002.jpg',
        detalle: `Pantalla: 14" HD, Procesador: AMD Athlon Silver 3050U, RAM: 4GB, Almacenamiento: 128GB SSD. Ideal para: Estudios y trabajos ligeros.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB SSD', aumento: 0 },
                    { valor: '256GB SSD', aumento: 100 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: 'Lenovo IdeaPad 3',
        precio: 600,
        categoria_id: categoria.id,
        url_imagen: 'img/0003.jpg',
        detalle: `Pantalla: 15.6" FHD, Procesador: AMD Ryzen 3 3250U, RAM: 8GB, Almacenamiento: 256GB SSD. Ideal para: Uso académico y de oficina.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'azul', aumento: 0 },
                    { valor: 'gris', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 4,
        nombre: 'Dell Inspiron 15 3000',
        precio: 650,
        categoria_id: categoria.id,
        url_imagen: 'img/0004.jpg',
        detalle: `Pantalla: 15.6" FHD, Procesador: Intel Core i5 de 11ma generación, RAM: 8GB, Almacenamiento: 512GB SSD. Ideal para: Multitarea y productividad media.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '512GB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'plata', aumento: 0 },
                    { valor: 'negro', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 5,
        nombre: 'HP Pavilion x360',
        precio: 700,
        categoria_id: categoria.id,
        url_imagen: 'img/0005.jpg',
        detalle: `Pantalla: 14" táctil FHD, Procesador: Intel Core i5 de 11ma generación, RAM: 8GB, Almacenamiento: 256GB SSD. Ideal para: Flexibilidad y productividad.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'plata', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 6,
        nombre: 'ASUS VivoBook 15',
        precio: 750,
        categoria_id: categoria.id,
        url_imagen: 'img/0006.jpg',
        detalle: `Pantalla: 15.6" FHD, Procesador: AMD Ryzen 5 5500U, RAM: 8GB, Almacenamiento: 512GB SSD. Ideal para: Rendimiento medio y tareas de oficina.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '512GB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'gris', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 7,
        nombre: 'Acer Swift 3',
        precio: 800,
        categoria_id: categoria.id,
        url_imagen: 'img/0007.jpg',
        detalle: `Pantalla: 14" FHD, Procesador: Intel Core i5 de 11ma generación, RAM: 8GB, Almacenamiento: 512GB SSD. Ideal para: Portabilidad y productividad media.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '512GB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'plata', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 8,
        nombre: 'Apple MacBook Air M1',
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: 'img/0008.jpg',
        detalle: `Pantalla: 13.3" Retina, Procesador: Apple M1, RAM: 8GB, Almacenamiento: 256GB SSD. Ideal para: Productividad y ecosistema de Apple.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB SSD', aumento: 0 },
                    { valor: '512GB SSD', aumento: 200 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'oro', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                    { valor: 'gris espacial', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 9,
        nombre: 'Lenovo ThinkPad X1 Carbon Gen 9',
        precio: 1200,
        categoria_id: categoria.id,
        url_imagen: 'img/0009.jpg',
        detalle: `Pantalla: 14" FHD, Procesador: Intel Core i7 de 11ma generación, RAM: 16GB, Almacenamiento: 512GB SSD. Ideal para: Profesionales y multitarea.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '512GB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 10,
        nombre: 'Dell XPS 15',
        precio: 1500,
        categoria_id: categoria.id,
        url_imagen: 'img/0010.jpg',
        detalle: `Pantalla: 15.6" FHD, Procesador: Intel Core i7 de 12ma generación, RAM: 16GB, Almacenamiento: 1TB SSD. Ideal para: Creatividad avanzada y trabajo intensivo.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '1TB SSD', aumento: 0 },
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'plata', aumento: 0 },
                ]
            }
        ]
    }
];


