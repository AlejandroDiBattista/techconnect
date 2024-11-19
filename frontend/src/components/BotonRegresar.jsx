import { Button, IconButton } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";


export function BotonRegresar({soloIcono = false}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  if (soloIcono) return (
    <IconButton variant="soft" radius="full" onClick={handleClick}>
      <ChevronLeftIcon />
    </IconButton>
  );

  return (
    <Button variant="soft" radius="full" onClick={handleClick} color="white">
      <ChevronLeftIcon />Volver
    </Button>
  )
}

export default BotonRegresar;
