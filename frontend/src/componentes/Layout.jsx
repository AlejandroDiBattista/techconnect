import React from 'react';
import { Container } from '@mui/material';
import Menu from '../componentes/Menu'
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
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Menu />
      {children}
      <footer>Este es el footer</footer>
    </Container>
  );
}
