import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Inicio } from './paginas/Inicio';
import { Elegir } from './paginas/Elegir';
import { Detalle } from './paginas/Detalle';
import { Cliente } from './paginas/Cliente';
import { Carrito } from './paginas/Compra'; // Asegúrate de que la ruta es correcta

import { Theme, Box } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/layout.css";

export function App() {
    return (
        <>
            <Theme 
                accentColor="green" 
                grayColor="gray" 
                panelBackground="solid" 
                scaling="110%" 
                scheme="light"
                radius="full">
                <Router>
                    <Layout>
                        <Box style={{margin:'0 auto', width:'1000px', padding:"100px 50px"}}>
                            <Routes>
                                <Route path="/" element={<Inicio />} />
                                <Route path="/elegir/:id" element={<Elegir />} />
                                <Route path="/detalle/:id" element={<Detalle />} />
                                <Route path="/cliente" element={<Cliente />} />
                                <Route path="/compra" element={<Carrito />} />
                            </Routes>
                        </Box>
                    </Layout>
                </Router>
            </Theme>
        </>
    );
}