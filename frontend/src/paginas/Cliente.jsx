import DataService from "../datos/datos";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, Text, TextField, Flex } from "@radix-ui/themes";
import { Accion } from "../components/Accion";

const formatearNombre = (texto) => 
  texto.replace(/([A-Z])/g, ' $1')
       .replace(/[_-]/g, ' ')
       .replace(/\s+/g, ' ')
       .trim()
       .replace(/\b\w/g, c => c.toUpperCase());

const DATOS_EJEMPLO = {
  domicilio: "Av Jujuy 337",
  localidad: "San Miguel de Tucuman", 
  codigoPostal: "4000",
  email: "example@gmail.com",
  telefono: "(381) 555-1234",
  tarjeta: "4567 1234 5678 9012"
};

const TIPOS_CAMPO = {
  email: "email",
  telefono: "tel",
  default: "text"
};

const VALIDACIONES = {
  email: {
    patron: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mensaje: 'Ingrese un email válido'
  },
  telefono: {
    patron: /^\(\d{3}\)\s\d{3}-\d{4}$/,
    mensaje: 'Formato: (381) 555-1234'
  },
  codigoPostal: {
    patron: /^\d{4}$/,
    mensaje: 'Ingrese 4 dígitos'
  },
  tarjeta: {
    patron: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
    mensaje: 'Formato: XXXX XXXX XXXX XXXX'
  }
};

const validarCampo = (campo, valor) => {
  if (!valor.trim()) return `El campo ${formatearNombre(campo)} es obligatorio`;
  if (VALIDACIONES[campo]?.patron && !VALIDACIONES[campo].patron.test(valor)) {
    return VALIDACIONES[campo].mensaje;
  }
  return '';
};

const formatearTelefono = (valor) => {
  // Eliminar todo excepto números
  const numeros = valor.replace(/\D/g, '');
  
  if (numeros.length <= 3) {
    return `(${numeros}`;
  }
  if (numeros.length <= 6) {
    return `(${numeros.slice(0, 3)}) ${numeros.slice(3)}`;
  }
  return `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6, 10)}`;
};

const formatearTarjeta = (valor) => {
  const numeros = valor.replace(/\D/g, '');
  return numeros.replace(/(\d{4})(?=\d)/g, '$1 ').trim().slice(0, 19);
};

export function Cliente() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(Object.fromEntries(
    Object.keys(DATOS_EJEMPLO).map(key => [key, ""])
  ));
  const [formErrors, setFormErrors] = useState({});

  const validarFormulario = () => {
    const errors = {};
    Object.keys(formData).forEach(field => {
      const error = validarCampo(field, formData[field]);
      if (error) errors[field] = error;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'domicilio' && value === "*") {
      setFormData(DATOS_EJEMPLO);
      setFormErrors({});
      return;
    }

    // Aplicar formato según el tipo de campo
    let formattedValue = value;
    if (name === 'telefono') {
      formattedValue = formatearTelefono(value);
    } else if (name === 'tarjeta') {
      formattedValue = formatearTarjeta(value);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Validación en tiempo real
    const error = validarCampo(name, formattedValue);
    setFormErrors(prev => ({
      ...prev,
      [name]: error,
      submit: ''  // Limpiar error general al editar
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      const { compraId } = await DataService.traerCompraActiva();
      if (!compraId) {
        setFormErrors(prev => ({
          ...prev,
          submit: "No hay una compra activa. Por favor, agregue productos al carrito."
        }));
        return;
      }

      await DataService.actualizarCliente(compraId, formData);
      await DataService.confirmarCompra(compraId);
      navigate('/');
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      setFormErrors(prev => ({
        ...prev,
        submit: error.message || "Error al procesar la compra. Por favor, intente nuevamente."
      }));
    }
  };

  return (
    <Card>
      <Text size="4" as="p" weight="bold">Ingrese sus datos</Text>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="4">
          {Object.keys(formData).map(field => (
            <Flex key={field} direction="column" gap="1">
              <Text size="3" as="label" htmlFor={field}>{formatearNombre(field)}</Text>
              <TextField.Root
                name={field}
                variant="outlined"
                type={TIPOS_CAMPO[field] || TIPOS_CAMPO.default}
                value={formData[field]}
                onChange={handleChange}
                status={formErrors[field] ? "error" : undefined}
              />
              {formErrors[field] && (
                <Text size="2" color="red">{formErrors[field]}</Text>
              )}
            </Flex>
          ))}
        </Flex>
        {formErrors.submit && (
          <Text size="2" color="red">{formErrors.submit}</Text>
        )}
        <Flex mt="4">
          <Accion texto="Confirmar Compra" onClick={handleSubmit} />
        </Flex>
      </form>
    </Card>
  );
}

export default Cliente;