// import { Card, CardContent, Typography, ButtonGroup, Button } from "@mui/material";
import { SegmentedControl, Card, Text } from "@radix-ui/themes";

export function SelectorVariante({variante, varianteIndex, seleccionado, onClick}) {
    return (
        <Card>
                {/* <h5 variant="h6">{variante.nombre}</h5> */}
                <Text size="3" as="div">{variante.nombre}</Text>
                <SegmentedControl.Root defaultValue={seleccionado} radius="full">
                    {variante.valores.map((valor, valorIndex) => (
                        <SegmentedControl.Item key={valorIndex} value={valor.valor}
                            onClick={() => onClick(varianteIndex, valorIndex)} >
                                <Text>{`${valor.valor} ${valor.aumento > 0 ? `+ $${valor.aumento}` : ""}`}</Text>
                        </SegmentedControl.Item>
                    ))}
                </SegmentedControl.Root>
        </Card>
    );
}

export default SelectorVariante;
