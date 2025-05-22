import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container, Box, Typography, Paper } from '@mui/material';
// Adicionando importações de tipos necessários do 'leaflet' e 'react-leaflet' com 'import type'
import type { LatLngExpression, LatLngTuple } from 'leaflet';
import type { MapContainerProps, TileLayerProps, PolylineProps } from 'react-leaflet';
// Importações de tipos específicos, se necessário
// import { LatLngExpression } from 'leaflet'; // Exemplo de importação de tipo do leaflet

// Dados mock de rotas acessíveis em Maringá (coordenadas teóricas de exemplo)
const mockAccessibleRoutes: LatLngTuple[][] = [
  [
    [ -23.4252, -51.9375 ], // Exemplo: Catedral de Maringá (centro)
    [ -23.4206, -51.9331 ], // Exemplo: Av. Brasil
    [ -23.4146, -51.9282 ]  // Exemplo: Av. Getúlio Vargas
  ],
  [
    [ -23.4252, -51.9375 ], // Exemplo: Catedral de Maringá
    [ -23.4175, -51.9447 ], // Exemplo: Av. Tiradentes
    [ -23.4108, -51.9519 ]  // Exemplo: Terminal Intermodal
  ]
];

const AccessibleRoutesMap = () => {
  // Coordenadas centrais iniciais (Maringá, PR - aproximado)
  const initialCenter: LatLngExpression = [ -23.4252, -51.9375 ];
  const initialZoom = 14; // Ajustado o zoom para ser mais próximo da cidade

  // Props para MapContainer com tipagem explícita
  const mapContainerProps: MapContainerProps = {
    center: initialCenter,
    zoom: initialZoom,
    style: { height: '60vh', width: '100%' }, // Altura ajustada para o paper
    scrollWheelZoom: false,
  };

  // Props para TileLayer com tipagem explícita
  const tileLayerProps: TileLayerProps = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mapa de Rotas Acessíveis em Maringá
        </Typography>
        <Paper elevation={3} sx={{ height: '60vh', width: '100%', mt: 2 }}>
          <MapContainer {...mapContainerProps}>
            <TileLayer {...tileLayerProps} />

            {/* Renderiza as rotas acessíveis */}
            {mockAccessibleRoutes.map((route, index) => (
              <Polyline
                key={index}
                positions={route}
                color="red"
                weight={5}
              />
            ))}

            {/* Exemplo de marcador no centro (opcional) */}
            {/* <Marker position={initialCenter as LatLngExpression}>
              <Popup>
                Catedral de Maringá
              </Popup>
            </Marker> */}
          </MapContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default AccessibleRoutesMap; 