import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Menu from '../componentes/Menu';

export function Layout({ children }) {
  return (
    <Container
      maxWidth={false}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        paddingTop: '20px',
      }}
    >
      <Menu />
      {children}
      
      <Box
        component="footer"
        sx={{
          width: '100%',
          backgroundColor: '#1976d2', // Color azul
          padding: '20px',
          marginTop: '350px', // Mueve el footer hacia abajo
        }}
      >
        <Typography variant="body1" align="center" style={{ color: 'white' }}>
          este es el footer
        </Typography>
      </Box>
    </Container>
  );
}
