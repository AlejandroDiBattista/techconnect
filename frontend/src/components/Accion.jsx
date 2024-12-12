import { Button } from "@radix-ui/themes"

export function Accion({ texto, onClick = ()=>{} }) {
    return (
      <Button size="5" onClick={onClick} variant="soft">{texto}</Button>
    );
  }