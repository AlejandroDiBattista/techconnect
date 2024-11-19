import { Button } from "@radix-ui/themes"

export function Accion({ texto, onClick=()=>{} }) {
    return (
      <Button variant="soft" size="3" onClick={onClick}>
        {texto}
      </Button>
    );
  }