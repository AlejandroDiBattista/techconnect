import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '@radix-ui/themes';
const Logo = () => {
    const navigate = useNavigate();    
    return <>
        <Text size="6"  onClick={() => navigate('/')}>Tecno Connet</Text>
    </>
};

export default Logo;