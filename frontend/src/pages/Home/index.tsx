import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Sistema de Transporte Inteligente e Inclusivo
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Mobilidade urbana acessível para todos
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Para Usuários
              </Typography>
              <Typography paragraph>
                • Cadastro personalizado com suas necessidades
                • Rotas adaptadas para sua mobilidade
                • Solicitação de transporte com retirada em casa
                • Confirmações via WhatsApp
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/register')}
                fullWidth
              >
                Cadastre-se
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Já é cadastrado?
              </Typography>
              <Typography paragraph>
                Acesse sua conta para:
                • Solicitar transportes
                • Gerenciar suas rotas
                • Atualizar seu perfil
                • Ver histórico de viagens
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => navigate('/login')}
                fullWidth
              >
                Entrar
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Seção para Cuidadores */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Para Cuidadores
              </Typography>
              <Typography paragraph>
                Acompanhe e gerencie o transporte das pessoas sob seus cuidados.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/caregiver/login')}
                fullWidth
              >
                Entrar como Cuidador
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 