import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  ButtonGroup,
} from "@mui/material";

function traerImagen(url){
  return url.split(",")[0];
}

function traerImagenes(urls){
  return urls.split(",").map(url => `/images/${url.strip()}`);
}

async function traerProducto(id) {
  try {
    console.log(`Fetching productos... ${id ? `for category ${id}` : "(none)"}`);
    const response = await fetch(`http://localhost:3000/productos`);
    const data = await response.json();
    console.log("productos fetched:", data);
    return data.filter((producto) => id ? producto._id == id : true)[0];
  } catch (error) {
    console.error("Error fetching productos:", error);
    return [];
  }
}

export function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [precio, setPrecio] = useState(0);
  const [aumentos, setAumentos] = useState({});
  const [seleccionadas, setSeleccionadas] = useState({});
  const [producto, setProducto] = useState(null);

  function ponerProducto(producto) {
    setProducto(producto);
    const aumentosIniciales = Object.fromEntries(
      producto.variantes.map((variante, index) => [index, variante.valores[0].aumento])
    );
    const seleccionadasIniciales = Object.fromEntries(
      producto.variantes.map((_, index) => [index, 0]) // Selecciona la primera opción por defecto
    );
    const precioInicial = Object.values(aumentosIniciales).reduce(
      (acc, curr) => acc + curr, producto.precio
    );
    setPrecio(precioInicial);
    setAumentos(aumentosIniciales);
    setSeleccionadas(seleccionadasIniciales);
  }

  useEffect(() => {
    traerProducto(id).then((data) => ponerProducto(data));
  }, [id]);


  function handleClick() {
    navigate(-1); // Esto hace que se navegue a la página anterior
  }

  const handleVarianteClick = (varianteIndex, valorIndex, aumento) => {
    setAumentos((prevAumentos) => {
      const nuevosAumentos = { ...prevAumentos, [varianteIndex]: aumento };
      const nuevoPrecio = Object.values(nuevosAumentos).reduce(
        (acc, curr) => acc + curr,
        producto.precio
      );
      setPrecio(nuevoPrecio);
      return nuevosAumentos;
    });
    setSeleccionadas((prevSeleccionadas) => ({
      ...prevSeleccionadas,
      [varianteIndex]: valorIndex,
    }));
  };

  if (producto == null) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Producto no encontrado
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Regresar
        </Button>
      </Container>
    );
  }
  return (
    <Container>
      <Card>
        <CardContent>
          {producto.url_imagen.split(",").map((url, index) => (
            <img
              key={index}
              src={`/images/${url}`}
              alt={producto.nombre}
              style={{ width: "600px", height: "600px", objectFit: "cover" }}
            />
          ))}
       
          <img
            src={`/images/${traerImagen(producto.url_imagen)}`}
            alt={producto.nombre}
            style={{ width: "600px", height: "600px", objectFit: "cover" }}
          />
          <Typography variant="h4" gutterBottom>
            Producto {producto.nombre}
          </Typography>
          <Typography variant="body1" paragraph>
            {producto.detalle}
          </Typography>
          <Typography variant="h2" color="secondary">
            Precio: ${precio || producto.precio}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Variantes
          </Typography>
          {producto.variantes.map((variante, index) => (
            <Card
              key={index}
              variant="outlined"
              style={{ marginBottom: "16px" }}
            >
              <CardContent>
                <Typography variant="h6"> {variante.nombre} </Typography>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {variante.valores.map((valor, valorIndex) => (
                    <Button
                      key={valorIndex}
                      value={valor.valor}
                      onClick={() =>
                        handleVarianteClick(index, valorIndex, valor.aumento)
                      }
                      variant={
                        seleccionadas[index] === valorIndex
                          ? "contained"
                          : "outlined"
                      }
                    >
                      {`${valor.valor} ${
                        valor.aumento > 0 ? `+ $${valor.aumento}` : ""
                      }`}
                    </Button>
                  ))}
                </ButtonGroup>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Detalle;
