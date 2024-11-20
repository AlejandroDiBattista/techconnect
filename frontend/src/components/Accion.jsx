import { Button } from "@radix-ui/themes"

export function Accion({ texto, onClick=()=>{} }) {
    return (
      <Button size="2" onClick={onClick} variant="soft">{texto}</Button>
    );
  }