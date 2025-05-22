import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Avatar,
  Divider,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  disabilityType: string;
  emergencyContact: string;
}

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  disabilityType: yup.string().required('Tipo de deficiência é obrigatório'),
  emergencyContact: yup.string().required('Contato de emergência é obrigatório'),
}).required();

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      // TODO: Implementar integração com API
      console.log(data);
      setIsEditing(false);
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Avatar
              sx={{ width: 100, height: 100, mr: 3 }}
              alt="Foto do perfil"
              src="/path-to-profile-image.jpg"
            />
            <Box>
              <Typography variant="h4" gutterBottom>
                Nome do Usuário
              </Typography>
              <Typography variant="body1" color="text.secondary">
                email@exemplo.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nome completo"
                  {...register('name')}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  disabled={!isEditing}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={!isEditing}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Telefone"
                  {...register('phone')}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  disabled={!isEditing}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Endereço"
                  {...register('address')}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  disabled={!isEditing}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Tipo de deficiência"
                  {...register('disabilityType')}
                  error={!!errors.disabilityType}
                  helperText={errors.disabilityType?.message}
                  disabled={!isEditing}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contato de emergência"
                  {...register('emergencyContact')}
                  error={!!errors.emergencyContact}
                  helperText={errors.emergencyContact?.message}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              {isEditing ? (
                <>
                  <Button
                    variant="outlined"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                  >
                    Salvar
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Perfil
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile; 