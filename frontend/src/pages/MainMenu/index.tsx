import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Bem-vindo ao Transporte Inclusivo
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Escolha como deseja acessar o sistema
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Opção para Usuário Comum */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Sou Usuário
              </Typography>
              <Typography paragraph>
                Acesse sua conta para solicitar transportes adaptados, gerenciar rotas e atualizar seu perfil.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/login')}
                fullWidth
              >
                Entrar como Usuário
              </Button>
               <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate('/register')}
                fullWidth
                sx={{ mt: 2 }}
              >
                Cadastrar como Usuário
              </Button>
            </Box>
          </Grid>

          {/* Opção para Cuidador */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Sou Cuidador
              </Typography>
              <Typography paragraph>
                Acompanhe, gerencie e solicite transporte para as pessoas sob seus cuidados.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/caregiver/login')}
                fullWidth
              >
                Entrar como Cuidador
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate('/caregiver/register')}
                fullWidth
                sx={{ mt: 2 }}
              >
                Cadastrar como Cuidador
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainMenu;