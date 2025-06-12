import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface Teacher {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthDate: string;
  teacherNumber: string;
  subject: string;
}

const TeacherForm: React.FC = () => {
  const [teacher, setTeacher] = useState<Teacher>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    birthDate: '',
    teacherNumber: '',
    subject: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchTeacher();
    }
  }, [id]);

  const fetchTeacher = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/teachers/${id}`);
      setTeacher(response.data);
    } catch (error) {
      console.error('Öğretmen bilgileri yüklenirken hata oluştu:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/teachers/${id}`, teacher);
      } else {
        await axios.post('http://localhost:8080/api/teachers', teacher);
      }
      navigate('/teachers');
    } catch (error) {
      console.error('Öğretmen kaydedilirken hata oluştu:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Öğretmen Düzenle' : 'Yeni Öğretmen Ekle'}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Öğretmen No"
                name="teacherNumber"
                value={teacher.teacherNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ad"
                name="firstName"
                value={teacher.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Soyad"
                name="lastName"
                value={teacher.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="E-posta"
                name="email"
                type="email"
                value={teacher.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Telefon"
                name="phoneNumber"
                value={teacher.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Doğum Tarihi"
                name="birthDate"
                type="date"
                value={teacher.birthDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Branş"
                name="subject"
                value={teacher.subject}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres"
                name="address"
                multiline
                rows={4}
                value={teacher.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
              >
                {id ? 'Güncelle' : 'Kaydet'}
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/teachers')}
              >
                İptal
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default TeacherForm; 