import { Container, Box, Typography, List, ListItem, ListItemText, Paper, Divider, IconButton, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Phone, WhatsApp, Info } from '@mui/icons-material';

interface AssistedUser {
  id: string;
  name: string;
  status: string; // Ex: 'Em casa', 'Em trânsito', 'Chegou ao destino'
  phone: string; // Adicionado telefone para contato rápido
}

const mockAssistedUsers: AssistedUser[] = [
  {
    id: 'user1',
    name: 'Ana Clara Silva',
    status: 'Em casa',
    phone: '+55999999999',
  },
  {
    id: 'user2',
    name: 'João Pedro Santos',
    status: 'Em trânsito',
    phone: '+55888888888',
  },
  {
    id: 'user3',
    name: 'Maria Fernanda Lima',
    status: 'Chegou ao destino',
    phone: '+55777777777',
  },
];

const CaregiverDashboard = () => {
  const navigate = useNavigate();
  const assistedUsers = mockAssistedUsers; // Usando mock data por enquanto

  const handleViewProfile = (userId: string) => {
    navigate(`/caregiver/assisted-user/${userId}`);
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  // TODO: Implementar exibição de alertas/notificações

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard do Cuidador
        </Typography>

        {/* Seção de Alertas (Placeholder) */}
        <Paper elevation={2} sx={{ mt: 4, p: 3, bgcolor: 'warning.light' }}>
          <Typography variant="h6" gutterBottom color="warning.dark">
            Alertas Recentes (TODO: Implementar)
          </Typography>
          <Typography variant="body2" color="warning.dark">
            Nenhum alerta no momento.
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ mt: 4, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Usuários Assistidos
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {assistedUsers.map((user) => (
              <ListItem
                key={user.id}
                secondaryAction={
                  <Box>
                    <IconButton edge="end" aria-label="info" onClick={() => handleViewProfile(user.id)}>
                      <Info />
                    </IconButton>
                    <IconButton edge="end" aria-label="phone" onClick={() => handleCall(user.phone)}>
                      <Phone />
                    </IconButton>
                    <IconButton edge="end" aria-label="whatsapp" onClick={() => handleWhatsApp(user.phone)}>
                      <WhatsApp />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemText
                  primary={user.name}
                  secondary={`Status: ${user.status}`}
                />
              </ListItem>
            ))}
          </List>

          {/* Botão para Adicionar Usuário Assistido */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={() => navigate('/caregiver/add-assisted-user')}
            >
              Adicionar Novo Usuário Assistido
            </Button>
          </Box>
        </Paper>

        {/* Seção de Monitoramento em Tempo Real (Placeholder) */}
        <Paper elevation={2} sx={{ mt: 4, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Monitoramento em Tempo Real (TODO: Implementar Mapa)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A localização dos usuários será exibida aqui em tempo real.
          </Typography>
          {/* TODO: Adicionar componente de mapa aqui */}
        </Paper>

      </Box>
    </Container>
  );
};

export default CaregiverDashboard; 