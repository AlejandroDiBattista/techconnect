const categoria = {
    id: 3,
    nombre: "notebook",
    url_imagen: "notebook.jpg",
};

const notebooks = [
    // Premium
    {
        id: 1,
        nombre: "MacBook Pro 16\" M1 Max",
        precio: 3000,
        categoria_id: categoria.id,
        url_imagen: "021.jpg, 022.jpg",
        detalle: "Pantalla: 16 pulgadas, Liquid Retina XDR, resolución 3456x2234. Procesador: Apple M1 Max. Memoria RAM: 32/64 GB. Almacenamiento: 1TB. Sistema Operativo: macOS",
        cantidad: 5,
        variantes: [
            {
                nombre: "RAM",
                valores: [
                    { valor: "32GB", aumento: 500 },
                    { valor: "64GB", aumento: 1000 }
                ]
            },
            {
                nombre: "Almacenamiento",
                valores: [
                    { valor: "1TB", aumento: 0 },
                    { valor: "2TB", aumento: 400 }
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: "Dell XPS 15",
        precio: 2500,
        categoria_id: categoria.id,
        url_imagen: "023.jpg, 024.jpg",
        detalle: "Pantalla: 15.6 pulgadas, OLED, resolución 3456x2160. Procesador: Intel Core i9-11900H. Memoria RAM: 16/32 GB. Almacenamiento: 512GB/1TB SSD. Sistema Operativo: Windows 11",
        cantidad: 5,
        variantes: [
            {
                nombre: "RAM",
                valores: [
                    { valor: "16GB", aumento: 0 },
                    { valor: "32GB", aumento: 300 }
                ]
            },
            {
                nombre: "Almacenamiento",
                valores: [
                    { valor: "512GB", aumento: 0 },
                    { valor: "1TB", aumento: 200 }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: "HP Spectre x360 14",
        precio: 2200,
        categoria_id: categoria.id,
        url_imagen: "025.jpg, 026.jpg",
        detalle: "Pantalla: 13.5 pulgadas, OLED, resolución 3000x2000. Procesador: Intel Core i7-1165G7. Memoria RAM: 16 GB. Almacenamiento: 512GB SSD. Sistema Operativo: Windows 11",
        cantidad: 7,
        variantes: [
            {
                nombre: "Color",
                valores: [
                    { valor: "negro", aumento: 0 },
                    { valor: "plata", aumento: 0 }
                ]
            }
        ]
    },

    // Gama Media
    {
        id: 4,
        nombre: "Acer Swift 3",
        precio: 1100,
        categoria_id: categoria.id,
        url_imagen: "027.jpg, 028.jpg",
        detalle: "Pantalla: 14 pulgadas, IPS, resolución 1920x1080. Procesador: AMD Ryzen 7 5700U. Memoria RAM: 8 GB. Almacenamiento: 512GB SSD. Sistema Operativo: Windows 10",
        cantidad: 10,
        variantes: [
            {
                nombre: "Almacenamiento",
                valores: [
                    { valor: "512GB", aumento: 0 },
                    { valor: "1TB", aumento: 150 }
                ]
            }
        ]
    },
    {
        id: 5,
        nombre: "Lenovo IdeaPad 5",
        precio: 1000,
        categoria_id: categoria.id,
        url_imagen: "029.jpg, 030.jpg",
        detalle: "Pantalla: 15.6 pulgadas, IPS, resolución 1920x1080. Procesador: Intel Core i5-1135G7. Memoria RAM: 8 GB. Almacenamiento: 256GB SSD. Sistema Operativo: Windows 10",
        cantidad: 10,
        variantes: [
            {
                nombre: "Procesador",
                valores: [
                    { valor: "Intel Core i5-1135G7", aumento: 0 },
                    { valor: "AMD Ryzen 5 5500U", aumento: 50 }
                ]
            },
            {
                nombre: "Color",
                valores: [
                    { valor: "gris", aumento: 0 },
                    { valor: "plata", aumento: 0 }
                ]
            }
        ]
    },
    {
        id: 6,
        nombre: "ASUS VivoBook 14",
        precio: 950,
        categoria_id: categoria.id,
        url_imagen: "031.jpg, 032.jpg",
        detalle: "Pantalla: 14 pulgadas, IPS, resolución 1920x1080. Procesador: AMD Ryzen 5 4500U. Memoria RAM: 8 GB. Almacenamiento: 512GB SSD. Sistema Operativo: Windows 10",
        cantidad: 8,
        variantes: [
            {
                nombre: "Color",
                valores: [
                    { valor: "negro", aumento: 0 },
                    { valor: "plata", aumento: 0 }
                ]
            }
        ]
    },

    // Entrada
    {
        id: 7,
        nombre: "HP 14z",
        precio: 500,
        categoria_id: categoria.id,
        url_imagen: "033.jpg, 034.jpg",
        detalle: "Pantalla: 14 pulgadas, IPS, resolución 1366x768. Procesador: AMD Ryzen 3 3250U. Memoria RAM: 4 GB. Almacenamiento: 128GB SSD. Sistema Operativo: Windows 10",
        cantidad: 15,
        variantes: []
    },
    {
        id: 8,
        nombre: "Lenovo IdeaPad 3",
        precio: 550,
        categoria_id: categoria.id,
        url_imagen: "035.jpg, 036.jpg",
        detalle: "Pantalla: 15.6 pulgadas, TN, resolución 1366x768. Procesador: Intel Core i3-1005G1. Memoria RAM: 4 GB. Almacenamiento: 256GB SSD. Sistema Operativo: Windows 10",
        cantidad: 15,
        variantes: []
    },
    {
        id: 9,
        nombre: "Acer Aspire 5",
        precio: 600,
        categoria_id: categoria.id,
        url_imagen: "037.jpg, 038.jpg",
        detalle: "Pantalla: 15.6 pulgadas, IPS, resolución 1920x1080. Procesador: Intel Pentium Gold 7505. Memoria RAM: 4 GB. Almacenamiento: 128GB SSD. Sistema Operativo: Windows 10",
        cantidad: 10,
        variantes: []
    },
    {
        id: 10,
        nombre: "Dell Inspiron 3000",
        precio: 650,
        categoria_id: categoria.id,
        url_imagen: "039.jpg, 040.jpg",
        detalle: "Pantalla: 15.6 pulgadas, TN, resolución 1366x768. Procesador: Intel Core i3-1115G4. Memoria RAM: 4 GB. Almacenamiento: 128GB SSD. Sistema Operativo: Windows 10",
        cantidad: 10,
        variantes: []
    }
];

export { notebooks };
