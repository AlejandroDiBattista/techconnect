// import { Card, CardContent, Typography, ButtonGroup, Button } from "@mui/material";
import { SegmentedControl, Card, Text } from "@radix-ui/themes";

const nombre = (texto) => texto.replace(/\b\w/g, char => char.toUpperCase());

export function SelectorVariante({ variante, seleccion, onClick }) {
    return (
        <Card>
            <Text size="3" as="p">{variante.nombre}</Text>
            <SegmentedControl.Root defaultValue={seleccion + 1} >
                {variante.valores.map(({ valor, aumento }, i) => (
                    <SegmentedControl.Item key={i} value={i + 1} onClick={() => onClick(i)} >
                        <Text>{`${nombre(valor)} ${aumento > 0 ? ` + $${aumento}` : ""}`}</Text>
                    </SegmentedControl.Item>
                ))}
            </SegmentedControl.Root>
        </Card>
    );
}

export default SelectorVariante;
