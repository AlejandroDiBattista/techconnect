import { Flex } from "@radix-ui/themes"
import BotonRegresar from "./BotonRegresar";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { Accion } from "./Accion";

const estiloCabecera = {
  position: 'fixed',
  top: 0,
  width: "100%",
  backgroundColor: '#f8f8f8',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '8px 16px',

  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
}

const estiloPie = {
  position: 'fixed',
  bottom: 0,
  width: "100%",
  backgroundColor: '#f8f8f8',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '8px 16px',

  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',

}

export function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <Flex direction="column" >
      <Flex as="header" style={estiloCabecera} justify="between" >
        <BotonRegresar soloIcono />
        <Logo />
        <Accion texto="Ver Compra actual" onClick= {() => navigate('/compra')}/>
      </Flex>

      <Flex as="main" justify="center" align="center"  style={{margin:"0 auto"}}>
          {children}
      </Flex>

      <footer style={estiloPie}>
      <p>© 2024 Mi Sitio Web</p>
      </footer>
    </Flex>
  )
}
