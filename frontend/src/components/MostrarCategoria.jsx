// components/MostrarCategoria.jsx
import { Grid2 as Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function MostrarCategoria({ categoria }) {
  return (
    <Grid item xs={12} md={4}>
      <Card component={RouterLink} to={`/elegir/${categoria.id}`}>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={`./public/images/${categoria.url_imagen}`}
        />
        <CardContent>
          <Typography variant="h6">{categoria.nombre}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MostrarCategoria;