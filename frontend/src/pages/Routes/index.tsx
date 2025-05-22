import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Chip,
  IconButton,
} from '@mui/material';
import {
  DirectionsBus,
  AccessTime,
  LocationOn,
  WhatsApp,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material';

interface Route {
  id: string;
  name: string;
  origin: string;
  destination: string;
  duration: string;
  accessibility: string[];
  isFavorite: boolean;
}

const mockRoutes: Route[] = [
  {
    id: '1',
    name: 'Rota Centro - Zona Sul',
    origin: 'Centro',
    destination: 'Zona Sul',
    duration: '45 min',
    accessibility: ['Elevador', 'Rampa', 'Assento Preferencial'],
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Rota Zona Norte - Hospital',
    origin: 'Zona Norte',
    destination: 'Hospital Municipal',
    duration: '30 min',
    accessibility: ['Elevador', 'Rampa', 'Assento Preferencial', 'Braille'],
    isFavorite: true,
  },
];

const Routes = () => {
  const [routes, setRoutes] = useState<Route[]>(mockRoutes);
  const [searchOrigin, setSearchOrigin] = useState('');
  const [searchDestination, setSearchDestination] = useState('');

  const handleFavorite = (routeId: string) => {
    setRoutes(routes.map(route =>
      route.id === routeId
        ? { ...route, isFavorite: !route.isFavorite }
        : route
    ));
  };

  const handleRequestRoute = (route: Route) => {
    // TODO: Implementar integração com WhatsApp
    console.log('Solicitar rota:', route);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Rotas Disponíveis
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Origem"
                value={searchOrigin}
                onChange={(e) => setSearchOrigin(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Destino"
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                fullWidth
                variant="contained"
                sx={{ height: '100%' }}
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          {routes.map((route) => (
            <Grid item xs={12} key={route.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {route.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {route.origin} → {route.destination}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTime sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {route.duration}
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton
                      onClick={() => handleFavorite(route.id)}
                      color="primary"
                    >
                      {route.isFavorite ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    {route.accessibility.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<DirectionsBus />}
                    variant="outlined"
                    onClick={() => handleRequestRoute(route)}
                  >
                    Solicitar Transporte
                  </Button>
                  <Button
                    startIcon={<WhatsApp />}
                    variant="contained"
                    color="success"
                    onClick={() => handleRequestRoute(route)}
                  >
                    Confirmar via WhatsApp
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Routes; 