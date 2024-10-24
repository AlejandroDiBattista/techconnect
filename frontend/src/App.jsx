import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { Menu } from './componentes/Menu';
import { Layout } from './componentes/Layout';
import { Inicio } from './paginas/Inicio';
import { Elegir } from './paginas/Elegir';
import { Detalle } from './paginas/Detalle';
import { Carrito } from './paginas/Carrito';

export function App() {
    return (
        <Router>
            <Layout>
                <Menu />
                <Container style={{ marginTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/elegir/:id" element={<Elegir />} />
                        <Route path="/detalle/:id" element={<Detalle />} />
                        <Route path="/carrito" element={<Carrito />} />
                    </Routes>
                </Container>
            </Layout>
        </Router>
    );
}