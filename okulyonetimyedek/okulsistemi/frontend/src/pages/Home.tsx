import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Okul Yönetim Sistemine Hoş Geldiniz
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/students')}
          >
            <PersonIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
            <Typography variant="h6" gutterBottom>
              Öğrenci Yönetimi
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Öğrenci bilgilerini görüntüleyin, ekleyin, düzenleyin ve silin.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/teachers')}
          >
            <SchoolIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
            <Typography variant="h6" gutterBottom>
              Öğretmen Yönetimi
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Öğretmen bilgilerini görüntüleyin, ekleyin, düzenleyin ve silin.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/classes')}
          >
            <ClassIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
            <Typography variant="h6" gutterBottom>
              Sınıf Yönetimi
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Sınıf bilgilerini görüntüleyin, ekleyin, düzenleyin ve silin.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 