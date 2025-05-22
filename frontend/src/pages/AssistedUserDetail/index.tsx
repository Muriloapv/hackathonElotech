import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface AssistedUserDetail {
  id: string;
  name: string;
  email: string;
  phone: string;
  disabilityType: string;
  emergencyContact: string;
  address: string;
  recurrentRoutes: string[];
  medicalInfo: string;
  additionalContacts: string[];
}

const mockAssistedUsersDetail: Record<string, AssistedUserDetail> = {
  'user1': {
    id: 'user1',
    name: 'Ana Clara Silva',
    email: 'ana.clara@exemplo.com',
    phone: '(99) 99999-9999',
    disabilityType: 'Cadeirante',
    emergencyContact: 'Carlos Silva (Pai) - (99) 88888-8888',
    address: 'Rua das Flores, 123, Bairro Alegre, Cidade - UF',
    recurrentRoutes: [
      'Casa -> Centro Médico (Seg, Qua, Sex - 08:00)',
      'Casa -> Fisioterapia (Ter, Qui - 14:00)',
    ],
    medicalInfo: 'Uso de cadeira de rodas, necessidade de auxílio para embarque/desembarque.',
    additionalContacts: [
      'Dra. Beatriz (Médica) - (99) 33333-3333',
      'Enfermeira Joana - (99) 22222-2222',
    ],
  },
  'user2': {
    id: 'user2',
    name: 'João Pedro Santos',
    email: 'joao.pedro@exemplo.com',
    phone: '(99) 77777-7777',
    disabilityType: 'Deficiência Visual',
    emergencyContact: 'Maria Santos (Mãe) - (99) 66666-6666',
    address: 'Avenida do Sol, 456, Bairro Luz, Cidade - UF',
    recurrentRoutes: [
      'Casa -> Trabalho (Seg a Sex - 07:30)',
      'Casa -> Centro Cultural (Sáb - 10:00)',
    ],
    medicalInfo: 'Necessidade de guia visual, sensibilidade à luz forte.',
    additionalContacts: [
      'Terapeuta João - (99) 11111-1111',
    ],
  },
  'user3': {
    id: 'user3',
    name: 'Maria Fernanda Lima',
    email: 'maria.fernanda@exemplo.com',
    phone: '(99) 55555-5555',
    disabilityType: 'Deficiência Auditiva',
    emergencyContact: 'Fernando Lima (Irmão) - (99) 44444-4444',
    address: 'Travessa da Paz, 789, Bairro Tranquilo, Cidade - UF',
    recurrentRoutes: [
      'Casa -> Curso de Libras (Ter, Qui - 19:00)',
    ],
    medicalInfo: 'Comunicação via Libras ou escrita, não responde a sinais sonoros.',
    additionalContacts: [
      'Professor de Libras - (99) 00000-0000',
    ],
  },
};

const AssistedUserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<AssistedUserDetail | null>(null);

  useEffect(() => {
    // Simula a busca do usuário pelos dados mock
    if (userId && mockAssistedUsersDetail[userId]) {
      setUser(mockAssistedUsersDetail[userId]);
    } else {
      // TODO: Tratar caso usuário não encontrado (redirecionar, mostrar mensagem)
      setUser(null);
    }
  }, [userId]);

  if (!user) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" color="error">
            Usuário não encontrado.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Avatar
              sx={{ width: 80, height: 80, mr: 3 }}
              alt={user.name}
              src="/path-to-profile-image.jpg" // Substituir pela foto real
            />
            <Box>
              <Typography variant="h4" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {user.email}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="text.secondary">Telefone:</Typography>
              <Typography variant="body1">{user.phone}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="text.secondary">Tipo de Deficiência:</Typography>
              <Typography variant="body1">{user.disabilityType}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="text.secondary">Endereço:</Typography>
              <Typography variant="body1">{user.address}</Typography>
            </Grid>
             <Grid item xs={12}>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Rotas Recorrentes:
              </Typography>
              <List dense>
                {user.recurrentRoutes.map((route, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={route} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Informações Médicas Relevantes:
              </Typography>
              <Typography variant="body1">{user.medicalInfo}</Typography>
            </Grid>
            <Grid item xs={12}>
               <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Contatos Adicionais:
              </Typography>
              <List dense>
                {user.additionalContacts.map((contact, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={contact} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default AssistedUserDetail; 