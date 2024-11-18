import { Button, Snackbar } from "@mui/material";
import { useState } from "react";

export function BotonAgregarCarrito({ 
  producto, 
  onClick,
  variant = "contained",
  size = "medium",
  style = {}
}) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(producto);
    }
    setOpenSnackbar(true);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        color="primary"
        onClick={handleClick}
        style={style}
      >
        Agregar al Carrito
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message="Producto agregado al carrito"
      />
    </>
  );
}
