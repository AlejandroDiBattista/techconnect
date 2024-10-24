import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <Typography variant="h4" style={{ cursor: 'pointer' }} onClick={handleHomeClick}>
            Tienda E-commerce
        </Typography>
    );
};

export default Logo;