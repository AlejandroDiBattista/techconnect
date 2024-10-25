import React from 'react';
import { Container } from '@mui/material';

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
      {children}
    </Container>
  );
}
