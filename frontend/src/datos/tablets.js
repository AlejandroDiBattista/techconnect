const categoria = {
    id: 2,
    nombre: "tablet",
    url_imagen: "tablet.jpg",
};

const tablas = [
    // Tablets Gama Premium
    {
        id: 1,
        nombre: "Apple iPad Pro 12.9 (6ª generación)",
        precio: 1400,
        categoria_id: categoria.id,
        url_imagen: "ipad-pro-12-9.jpg",
        detalle: "Pantalla: 12.9 pulgadas, Liquid Retina XDR, 2732x2048. Procesador: Apple M2. Memoria RAM: 8/16 GB. Cámaras: 12 MP principal, 12 MP frontal. Batería: 10758 mAh. Sistema Operativo: iPadOS 16",
        cantidad: 5,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "128GB", aumento: 0 }, { valor: "512GB", aumento: 300 }, { valor: "1TB", aumento: 600 }] },
            { nombre: "Color", valores: [{ valor: "gris espacial", aumento: 0 }, { valor: "plata", aumento: 0 }] }
        ]
    },
    {
        id: 2,
        nombre: "Samsung Galaxy Tab S9 Ultra",
        precio: 1300,
        categoria_id: categoria.id,
        url_imagen: "galaxy-tab-s9-ultra.jpg",
        detalle: "Pantalla: 14.6 pulgadas, Dynamic AMOLED, 2960x1848. Procesador: Snapdragon 8 Gen 2. Memoria RAM: 12/16 GB. Cámaras: 13 MP principal, 12 MP frontal. Batería: 11200 mAh. Sistema Operativo: Android 13",
        cantidad: 5,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "256GB", aumento: 0 }, { valor: "512GB", aumento: 250 }, { valor: "1TB", aumento: 500 }] },
            { nombre: "Color", valores: [{ valor: "grafito", aumento: 0 }, { valor: "plata", aumento: 0 }] }
        ]
    },
    {
        id: 3,
        nombre: "Microsoft Surface Pro 9",
        precio: 1200,
        categoria_id: categoria.id,
        url_imagen: "surface-pro-9.jpg",
        detalle: "Pantalla: 13 pulgadas, PixelSense Flow, 2880x1920. Procesador: Intel Core i5/i7 de 12ª generación. Memoria RAM: 8/16 GB. Cámaras: 10 MP principal, 5 MP frontal. Batería: hasta 15.5 horas. Sistema Operativo: Windows 11",
        cantidad: 8,
        variantes: [
            { nombre: "Procesador", valores: [{ valor: "Intel Core i5", aumento: 0 }, { valor: "Intel Core i7", aumento: 200 }] },
            { nombre: "Almacenamiento", valores: [{ valor: "256GB", aumento: 0 }, { valor: "512GB", aumento: 300 }] },
            { nombre: "Color", valores: [{ valor: "platino", aumento: 0 }, { valor: "grafito", aumento: 0 }] }
        ]
    },

    // Tablets Gama Media
    {
        id: 4,
        nombre: "Apple iPad Air (5ª generación)",
        precio: 750,
        categoria_id: categoria.id,
        url_imagen: "ipad-air-5.jpg",
        detalle: "Pantalla: 10.9 pulgadas, Liquid Retina, 2360x1640. Procesador: Apple M1. Memoria RAM: 8 GB. Cámaras: 12 MP principal, 12 MP frontal. Batería: 7600 mAh. Sistema Operativo: iPadOS 15",
        cantidad: 12,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "64GB", aumento: 0 }, { valor: "256GB", aumento: 200 }] },
            { nombre: "Color", valores: [{ valor: "gris espacial", aumento: 0 }, { valor: "plata", aumento: 0 }, { valor: "rosa", aumento: 0 }] }
        ]
    },
    {
        id: 5,
        nombre: "Samsung Galaxy Tab S7 FE",
        precio: 700,
        categoria_id: categoria.id,
        url_imagen: "galaxy-tab-s7-fe.jpg",
        detalle: "Pantalla: 12.4 pulgadas, TFT LCD, 2560x1600. Procesador: Snapdragon 750G. Memoria RAM: 4/6 GB. Cámaras: 8 MP principal, 5 MP frontal. Batería: 10090 mAh. Sistema Operativo: Android 11",
        cantidad: 10,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "64GB", aumento: 0 }, { valor: "128GB", aumento: 100 }] },
            { nombre: "Color", valores: [{ valor: "negro", aumento: 0 }, { valor: "plata", aumento: 0 }, { valor: "verde", aumento: 0 }] }
        ]
    },
    {
        id: 6,
        nombre: "Lenovo Tab P11 Pro Gen 2",
        precio: 650,
        categoria_id: categoria.id,
        url_imagen: "lenovo-tab-p11-pro-2.jpg",
        detalle: "Pantalla: 11.2 pulgadas, OLED, 2560x1536. Procesador: MediaTek Kompanio 1300T. Memoria RAM: 6/8 GB. Cámaras: 13 MP principal, 8 MP frontal. Batería: 8000 mAh. Sistema Operativo: Android 12",
        cantidad: 8,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "128GB", aumento: 0 }, { valor: "256GB", aumento: 100 }] },
            { nombre: "Color", valores: [{ valor: "gris tormenta", aumento: 0 }] }
        ]
    },

    // Tablets Gama de Entrada
    {
        id: 7,
        nombre: "Samsung Galaxy Tab A8",
        precio: 250,
        categoria_id: categoria.id,
        url_imagen: "galaxy-tab-a8.jpg",
        detalle: "Pantalla: 10.5 pulgadas, TFT, 1920x1200. Procesador: Unisoc Tiger T618. Memoria RAM: 3/4 GB. Cámaras: 8 MP principal, 5 MP frontal. Batería: 7040 mAh. Sistema Operativo: Android 11",
        cantidad: 20,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "32GB", aumento: 0 }, { valor: "64GB", aumento: 50 }] },
            { nombre: "Color", valores: [{ valor: "gris oscuro", aumento: 0 }, { valor: "plata", aumento: 0 }] }
        ]
    },
    {
        id: 8,
        nombre: "Lenovo Tab M10 Plus (3ª generación)",
        precio: 230,
        categoria_id: categoria.id,
        url_imagen: "lenovo-tab-m10-plus.jpg",
        detalle: "Pantalla: 10.6 pulgadas, IPS, 2000x1200. Procesador: MediaTek Helio G80. Memoria RAM: 4 GB. Cámaras: 8 MP principal, 5 MP frontal. Batería: 7700 mAh. Sistema Operativo: Android 12",
        cantidad: 15,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "64GB", aumento: 0 }, { valor: "128GB", aumento: 40 }] },
            { nombre: "Color", valores: [{ valor: "gris", aumento: 0 }] }
        ]
    },
    {
        id: 9,
        nombre: "Huawei MatePad T10",
        precio: 200,
        categoria_id: categoria.id,
        url_imagen: "huawei-matepad-t10.jpg",
        detalle: "Pantalla: 9.7 pulgadas, IPS, 1280x800. Procesador: Kirin 710A. Memoria RAM: 2/3 GB. Cámaras: 5 MP principal, 2 MP frontal. Batería: 5100 mAh. Sistema Operativo: EMUI 10.1",
        cantidad: 18,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "16GB", aumento: 0 }, { valor: "32GB", aumento: 20 }] },
            { nombre: "Color", valores: [{ valor: "azul", aumento: 0 }] }
        ]
    },
    {
        id: 10,
        nombre: "Amazon Fire HD 10",
        precio: 150,
        categoria_id: categoria.id,
        url_imagen: "amazon-fire-hd-10.jpg",
        detalle: "Pantalla: 10.1 pulgadas, IPS, 1920x1200. Procesador: MediaTek MT8183. Memoria RAM: 3 GB. Cámaras: 5 MP principal, 2 MP frontal. Batería: hasta 12 horas de uso. Sistema Operativo: Fire OS",
        cantidad: 20,
        variantes: [
            { nombre: "Almacenamiento", valores: [{ valor: "32GB", aumento: 0 }, { valor: "64GB", aumento: 20 }] },
            { nombre: "Color", valores: [{ valor: "negro", aumento: 0 }, { valor: "blanco", aumento: 0 }] }
        ]
    },
];
