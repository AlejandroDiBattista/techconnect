import { Link as RouterLink } from "react-router-dom";

import { useEffect, useState } from "react";
import DataService from "../datos/datos.js";
import MostrarCategoria from "../components/MostrarCategoria";
import { Text, Flex , Grid} from "@radix-ui/themes";

export function Inicio() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => { DataService.traerCategorias().then(setCategorias);}, []);

  return (
    <Flex direction="column" justify="start" gap="3">
          <Text size="6" as="p">Bienvenido a Techconnect</Text>
          <Text size="1" as="p">
            En Techconnect, nos dedicamos a ofrecerte los mejores celulares,
            notebooks y tablets para mantenerte conectado en todo momento.
            Descubre nuestra amplia gama de productos y disfruta de la
            tecnología al alcance de tu mano.
          </Text>

          <Text size="4" >Nuestros productos</Text>
          <Grid columns="3" gap="3">
            {categorias.map(categoria => <MostrarCategoria key={categoria.id} categoria={categoria} />)}
          </Grid>
          <Text size="4" as="p">Sobre nosotros</Text>
          <Text size="1" as="p" color="gray">
            Techconnet es una tienda en línea dedicada a ofrecer una amplia gama
            de productos tecnológicos, incluyendo celulares, tablets y
            notebooks. Nuestro objetivo es proporcionar a nuestros clientes
            dispositivos de la mejor calidad con un excelente servicio al
            cliente. Nos enorgullecemos de contar con un equipo experto que está
            siempre dispuesto a ayudar en la elección del producto perfecto para
            cada necesidad. Además, ofrecemos opciones de entrega rápida y
            segura para que puedas disfrutar de tus compras sin demoras. En
            Techconnet, la satisfacción del cliente es nuestra prioridad, y
            trabajamos arduamente para superar tus expectativas.
          </Text>
    </Flex>
  );
}

export default Inicio;
