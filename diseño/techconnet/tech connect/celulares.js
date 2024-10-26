const categoria = {
    id: 1,
    nombre: 'Celulares',
    url_imagen: '',
};

const productos = [
    {
        id: 1,
        nombre: 'IPhone 14 Pro Max',
        precio: 1200,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0001.jpg',
        detalle: 'El Apple iPhone 14 Pro Max es el iPhone más grande y poderoso de la serie 14. Potenciado por el nuevo procesador Apple A16 Bionic, cuenta con una pantalla OLED LTPO de 6.7 pulgadas, entre otras características.',
        cantidad: 10,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 1000 },
                    { valor: '256GB', aumento: 1200 },
                    { valor: '512GB', aumento: 1300 },
                    { valor: '1TB', aumento: 1500 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro espacial', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                    { valor: 'oro', aumento: 0 },
                    { valor: 'morado oscuro', aumento: 0 },
                    { valor: 'blanco', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: 'iPhone 15 Pro Max',
        precio: 900,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0002.jpg',
        detalle: 'El iPhone 15 Pro Max destaca por su sistema de cámaras Pro, con una principal de 48 MP, ultra gran angular de 12 MP y dos teleobjetivos de 12 MP, ofreciendo zoom óptico de hasta x5 y digital hasta x25, junto con tecnologías avanzadas como Photonic Engine y HDR Inteligente 5. Su pantalla Super Retina XDR OLED de 6.7" incluye Dynamic Island, tasa de refresco adaptativa de hasta 120 Hz y un brillo máximo de 2.000 nits en exteriores. La batería ofrece hasta 29 horas de reproducción de video, soporta carga rápida y MagSafe, logrando un 50% de carga en 30 minutos con un adaptador de 20 W.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB', aumento: 900 },
                    { valor: '512GB', aumento: 1100 },
                    { valor: '1TB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'titanio negro', aumento: 0 },
                    { valor: 'titanio blanco', aumento: 0 },
                    { valor: 'titanio azul', aumento: 0 },
                    { valor: 'titanio natural', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: 'Samsung S23 Ultra',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0003.jpg',
        detalle: 'El Galaxy S23 Ultra destaca por su batería de 5000 mAh con carga rápida de 45W y carga inalámbrica de 10W. En cuanto a cámaras, incluye un sensor posterior de 200 MP, dos teleobjetivos de 10 MP con zoom óptico de 10X y 3X, y una cámara frontal de 12 MP. Puede grabar videos en 8K a 30 FPS y en 4K a 60 FPS. Su pantalla es Dynamic AMOLED 2X de 6,8", protegida por Corning Gorilla Glass Victus 2, y cuenta con S-Pen integrado.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB', aumento: 900 },
                    { valor: '512GB', aumento: 1100 },
                    { valor: '1TB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'phantom negro', aumento: 0 },
                    { valor: 'verde', aumento: 0 },
                    { valor: 'crema', aumento: 0 },
                    { valor: 'lavanda', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 4,
        nombre: 'Samsung S24+',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0004.jpg',
        detalle: 'Batería: Soporta carga rápida por cable e inalámbrica, tiene parlantes estéreo Hi-Fi, lector de huellas, resistencia al agua y corre Android 14 con siete actualizaciones prometidas. Cámara: Frontal de 12 MP y trasera con ultra gran angular de 12 MP, teleobjetivo de 50 MP, otro de 10 MP con zoom 3x y cámara principal de 200 MP con estabilización óptica. Pantalla: Dynamic AMOLED 2X de 6.7 pulgadas con resolución QHD+ y tasa de refresco de 120Hz. Memoria: con 12 GB de RAM y procesador Exynos 2400.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB', aumento: 900 },
                    { valor: '512GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'cobalt violet', aumento: 0 },
                    { valor: 'amber yellow', aumento: 0 },
                    { valor: 'onyx black', aumento: 0 },
                    { valor: 'marble gray', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 5,
        nombre: 'Samsung Galaxy A55 5G',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0005.jpg',
        detalle: 'El Samsung Galaxy A55 5G tiene una batería de 5000 mAh con carga rápida de 25W. Cuenta con un sistema de cámaras que incluye una principal de 50 MP, una ultra ancha de 12 MP, una macro de 5 MP, y una frontal de 32 MP. Su pantalla Super AMOLED de 6.6 pulgadas ofrece resolución Full HD+ y tasa de refresco de 120Hz, con RAM de 6 GB, 8 GB o 12 GB.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 900 },
                    { valor: '256GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'awesome navi', aumento: 0 },
                    { valor: 'awesome iceblue', aumento: 0 },
                    { valor: 'awesome lilac', aumento: 0 },
                    { valor: 'awesome lemon', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 6,
        nombre: 'Samsung Galaxy Z Fold5',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0006.jpg',
        detalle: 'El dispositivo cuenta con un procesador Octa-Core (3.36GHz, 2.8GHz, 2GHz) y una cámara frontal de 10 MP, junto con una cámara trasera de 50 MP, 12 MP y 10 MP. Ofrece almacenamiento de 256 GB y 512 GB, y una pantalla de 7.6" (192.1 mm) en rectángulo completo. Tiene una batería de 4400 mAh con carga a través de USB Type-C. En la caja se incluyen un cable de datos, guía de inicio rápido y pin de extracción, además de contar con inteligencia artificial.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256 GB', aumento: 900 },
                    { valor: '512GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'phantom black', aumento: 0 },
                    { valor: 'cream', aumento: 0 },
                    { valor: 'icy blue', aumento: 0 },
                    { valor: 'gray', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 7,
        nombre: 'Xiaomi Note 13',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0007.jpg',
        detalle: 'El smartphone cuenta con una cámara principal de 108 MP, secundaria de 16 MP y flash LED, además de grabar video en 1080p a 30 fps. Tiene una pantalla FHD+ AMOLED de 6.67" con una frecuencia de actualización de 120 Hz. La batería es de 5000 mAh, permitiendo carga rápida de 67W. Los colores disponibles son negro, blanco y azul.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 900 },
                    { valor: '256GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'blanco', aumento: 0 },
                    { valor: 'azul', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 8,
        nombre: 'Motorola Edge 40',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0008.jpg',
        detalle: 'El Motorola Edge 40 presenta una pantalla OLED de 6.55" FHD+ con tasa de refresco de 144 Hz. Su cámara principal de 50 MP permite grabación en 4K, mientras que la cámara frontal es de 32 MP. Además, cuenta con una batería de 4400 mAh con carga rápida de 68W y es resistente al agua y polvo (IP68).',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 900 },
                    { valor: '256GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'eco black', aumento: 0 },
                    { valor: 'pura agua', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 9,
        nombre: 'Huawei P60',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0009.jpg',
        detalle: 'El Huawei P60 combina diseño elegante con tecnología avanzada, incluyendo cámara principal de 48 MP, ultra gran angular de 13 MP y teleobjetivo de 12 MP. Su pantalla OLED de 6.67" FHD+ ofrece una experiencia visual impresionante, y la batería de 4815 mAh soporta carga rápida de 66W.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '256GB', aumento: 900 },
                    { valor: '512GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'blanco', aumento: 0 },
                    { valor: 'negro', aumento: 0 },
                    { valor: 'azul', aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 10,
        nombre: 'Google Pixel 8 Pro',
        precio: 980,
        categoria_id: categoria.id,  // Cambié a categoría.id
        url_imagen: 'img/0010.jpg',
        detalle: 'El Google Pixel 8 Pro cuenta con un diseño premium, pantalla LTPO OLED de 6.7" con resolución QHD+, y una cámara principal de 50 MP, ultra gran angular de 48 MP y teleobjetivo de 48 MP, permitiendo grabación de video en 4K. La batería es de 5050 mAh y soporta carga rápida.',
        cantidad: 8,
        variantes: [
            {
                nombre: 'Memoria',
                valores: [
                    { valor: '128GB', aumento: 900 },
                    { valor: '256GB', aumento: 1100 }
                ]
            },
            {
                nombre: 'Color',
                valores: [
                    { valor: 'luz suave', aumento: 0 },
                    { valor: 'noche oscura', aumento: 0 },
                    { valor: 'azul de medianoche', aumento: 0 }
                ]
            }
        ]
    }
];

