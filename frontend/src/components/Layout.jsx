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
  padding: '4px 16px',

  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',

}

const estiloMain = {
  // marginTop: '64px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
  width: '100%',
  maxWidth: '1000px',
  marginLeft: '20%',
  marginRight: '20%',
}

export function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <Flex direction="column">
      <Flex as="header" style={estiloCabecera} justify="between" >
        <BotonRegresar soloIcono />
        <Logo />
        <Accion texto="Ver Compra actual" onClick= {() => navigate('/compra')}/>
      </Flex>

      <main style={estiloMain}>
          {children}
      </main>
      <footer style={estiloPie}>
      <p>© 2024 TechConnect - Tucumán</p>
      </footer>
    </Flex>
  )
}
