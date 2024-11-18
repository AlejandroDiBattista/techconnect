import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { Layout } from './componentes/Layout';
import { Inicio } from './paginas/Inicio';
import { Elegir } from './paginas/Elegir';
import { Detalle } from './paginas/Detalle';
import { Cliente } from './paginas/Cliente';
import { Carrito } from './paginas/Compra'; // Asegúrate de que la ruta es correcta


export function App() {
    return (
        <>
        <Router>
            <Layout>
                <Container style={{ marginTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/elegir/:id" element={<Elegir />} />
                        <Route path="/detalle/:id" element={<Detalle />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/cliente" element={<Cliente />} />
                        <Route path="/compra" element={<Carrito />} />
                    </Routes>
                </Container>
            </Layout>
        </Router>
        </>
    );
}