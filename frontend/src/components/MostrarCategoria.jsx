// components/MostrarCategoria.jsx
import { Link } from "react-router-dom";
import { Card, Inset, Flex } from '@radix-ui/themes';
import { Accion } from "./Accion";

function MostrarCategoria({ categoria }) {
    return (
        <>
            <Link to={`/elegir/${categoria.id}`}>
                <Card>
                    <Flex direction="column" gap="1" align="start">
                        <Inset clip="padding-box" side="top" pb="current">
                            <img src={`./public/images/${categoria.url_imagen}`} alt={categoria.nombre} width="100%" />
                        </Inset>
                        <Accion texto={`Ver ${categoria.nombre}`} />
                    </Flex>
                </Card>
            </Link>
        </>
    );
}

export default MostrarCategoria;