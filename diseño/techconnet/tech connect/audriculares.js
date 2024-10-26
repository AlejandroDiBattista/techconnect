const categoria = {
    id: 2,
    nombre: 'auricular',
    url_imagen: 'img/auricular.jpg',
};

const productos = [
    {
        id: 1,
        nombre: 'Sony MDR-ZX110',
        precio: 20,
        categoria_id: categoria.id,
        url_imagen: 'img/0001 .jpg',
        detalle: `Tipo: On-ear, Conexión: Cable de 1.2m, Respuesta de frecuencia: 12Hz-22kHz. Ideal para: Uso diario básico.`,
        cantidad: 15,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'blanco', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: 'JBL Tune 510BT',
        precio: 40,
        categoria_id: categoria.id,
        url_imagen: 'img/0002 .jpg',
        detalle: `Tipo: On-ear inalámbrico, Conexión: Bluetooth 5.0, Duración batería: 40 horas. Ideal para: Música sin cables y comodidad.`,
        cantidad: 20,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'azul', aumento: 0 },
                    { valor: 'blanco', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: 'Philips SHP9500',
        precio: 70,
        categoria_id: categoria.id,
        url_imagen: 'img/0003 .jpg',
        detalle: `Tipo: Over-ear, Conexión: Cable desmontable de 1.5m, Respuesta de frecuencia: 12Hz-35kHz. Ideal para: Experiencia de sonido detallado.`,
        cantidad: 10,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 4,
        nombre: 'Anker Soundcore Life Q20',
        precio: 60,
        categoria_id: categoria.id,
        url_imagen: 'img/0004 .jpg',
        detalle: `Tipo: Over-ear inalámbrico, Conexión: Bluetooth, Cancelación de ruido activa, Batería: 40 horas. Ideal para: Aislamiento y comodidad.`,
        cantidad: 12,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'gris', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 5,
        nombre: 'Beats Solo3 Wireless',
        precio: 150,
        categoria_id: categoria.id,
        url_imagen: 'img/0005.jpg',
        detalle: `Tipo: On-ear inalámbrico, Conexión: Bluetooth, Duración batería: 40 horas. Ideal para: Música con estilo y calidad.`,
        cantidad: 8,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'blanco', aumento: 0 },
                    { valor: 'rojo', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 6,
        nombre: 'Bose QuietComfort 35 II',
        precio: 200,
        categoria_id: categoria.id,
        url_imagen: 'img/0006.jpg',
        detalle: `Tipo: Over-ear inalámbrico, Conexión: Bluetooth, Cancelación de ruido activa. Ideal para: Aislamiento y alta calidad.`,
        cantidad: 5,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 7,
        nombre: 'Sennheiser HD 450BT',
        precio: 130,
        categoria_id: categoria.id,
        url_imagen: 'img/0007.jpg',
        detalle: `Tipo: Over-ear inalámbrico, Conexión: Bluetooth, Cancelación de ruido activa, Duración batería: 30 horas. Ideal para: Sonido de alta calidad y comodidad.`,
        cantidad: 7,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'blanco', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 8,
        nombre: 'Sony WH-1000XM4',
        precio: 250,
        categoria_id: categoria.id,
        url_imagen: 'img/0008.jpg',
        detalle: `Tipo: Over-ear inalámbrico, Conexión: Bluetooth, Cancelación de ruido avanzada, Batería: 30 horas. Ideal para: Experiencia auditiva premium.`,
        cantidad: 5,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 9,
        nombre: 'Apple AirPods Max',
        precio: 550,
        categoria_id: categoria.id,
        url_imagen: 'img/0009.jpg',
        detalle: `Tipo: Over-ear inalámbrico, Conexión: Bluetooth, Cancelación de ruido activa, Audio espacial. Ideal para: Sonido envolvente y calidad premium.`,
        cantidad: 3,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'gris espacial', aumento: 0 },
                    { valor: 'plata', aumento: 0 },
                    { valor: 'verde', aumento: 0 },
                ]
            }
        ]
    },
    {
        id: 10,
        nombre: 'Jabra Elite 85h',
        precio: 180,
        categoria_id: categoria.id,
        url_imagen: 'img/0010.jpg',
        detalle: `Tipo: Over-ear inalámbrico, Conexión: Bluetooth, Cancelación de ruido adaptativa, Duración batería: 36 horas. Ideal para: Uso prolongado y calidad en llamadas.`,
        cantidad: 6,
        variantes: [
            {
                nombre: 'Color',
                valores: [
                    { valor: 'negro', aumento: 0 },
                    { valor: 'beige', aumento: 0 },
                    { valor: 'azul', aumento: 0 },
                ]
            }
        ]
    }
];


