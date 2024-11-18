import { Card, CardContent, Typography, ButtonGroup, Button } from "@mui/material";

export function SelectorVariante({variante, varianteIndex, seleccionado, onClick}) {
    return (
        <Card variant="outlined" style={{ marginBottom: "16px" }}>
            <CardContent>
                <Typography variant="h6">{variante.nombre}</Typography>
                <ButtonGroup variant="outlined" style={{ display: "flex", flexWrap: "wrap" }}>
                    {variante.valores.map((valor, valorIndex) => (
                        <Button
                            key={valorIndex}
                            value={valor.valor}
                            onClick={() => onClick(varianteIndex, valorIndex)}
                            variant={seleccionado === valorIndex ? "contained" : "outlined"}
                        >
                            {`${valor.valor} ${valor.aumento > 0 ? `+ $${valor.aumento}` : ""}`}
                        </Button>
                    ))}
                </ButtonGroup>
            </CardContent>
        </Card>
    );
}

export default SelectorVariante;
