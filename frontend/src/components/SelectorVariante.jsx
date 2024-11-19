// import { Card, CardContent, Typography, ButtonGroup, Button } from "@mui/material";
import { SegmentedControl, Card, Text } from "@radix-ui/themes";

function nombre(texto) {
    // Separar palabras que tienen mezcla de mayúsculas/minúsculas
    const palabras = texto
      .split(/(?=[A-Z])|[\s_-]/) // Separa por mayúsculas, espacios, guiones o guiones bajos
      .filter(word => word.length > 0) // Eliminar elementos vacíos
      .map(word => word.toLowerCase()); // Convertir todo a minúsculas
  
    // Convertir primera letra de cada palabra a mayúscula
    return palabras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
export function SelectorVariante({variante, seleccion, onClick}) {
    return (
        <Card>
            <Text size="3" as="p">{variante.nombre}</Text>
            <SegmentedControl.Root defaultValue={seleccion+1} >
                {variante.valores.map(({valor, aumento}, i) => (
                    <SegmentedControl.Item key={i} value={i+1} onClick={() => onClick(i)} >
                        <Text>{`${nombre(valor)} ${aumento > 0 ? ` + $${aumento}` : ""}`}</Text>
                    </SegmentedControl.Item>
                ))}
            </SegmentedControl.Root>
        </Card>
    );
}

export default SelectorVariante;
