import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Layout
import Layout from './components/common/Layout';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RoutesPage from './pages/Routes';
import CaregiverLogin from './pages/CaregiverLogin';
import CaregiverRegister from './pages/CaregiverRegister';
import CaregiverDashboard from './pages/CaregiverDashboard';
import AssistedUserDetail from './pages/AssistedUserDetail';

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/caregiver/login" element={<CaregiverLogin />} />
          <Route path="/caregiver/register" element={<CaregiverRegister />} />
          <Route
            path="/caregiver/dashboard"
            element={
              <Layout>
                <CaregiverDashboard />
              </Layout>
            }
          />
          <Route
            path="/caregiver/assisted-user/:userId"
            element={
              <Layout>
                <AssistedUserDetail />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/routes"
            element={
              <Layout>
                <RoutesPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
