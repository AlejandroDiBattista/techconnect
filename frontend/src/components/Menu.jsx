import { AppBar, Toolbar, Button, IconButton, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from '../components/Logo';

export function Menu() {
    const navigate = useNavigate();
    
    const handleCarritoClick = () => navigate('/compra');
    const handleBackClick    = () => navigate(-1);

    return (
        <Container>
            <AppBar>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" onClick={handleBackClick}><ArrowBackIcon /></IconButton>
                        <Logo />
                    </div>
                    <Button variant="contained" color="primary" onClick={handleCarritoClick}>Ver Compra actual</Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default Menu;

