import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
}

interface Class {
  id?: number;
  name: string;
  grade: number;
  section: string;
  teacher: Teacher | null;
  students: Student[];
}

const ClassForm: React.FC = () => {
  const [classData, setClassData] = useState<Class>({
    name: '',
    grade: 1,
    section: '',
    teacher: null,
    students: [],
  });

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchTeachers();
    fetchStudents();
    if (id) {
      fetchClass();
    }
  }, [id]);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.error('Öğretmenler yüklenirken hata oluştu:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Öğrenciler yüklenirken hata oluştu:', error);
    }
  };

  const fetchClass = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/classes/${id}`);
      setClassData(response.data);
    } catch (error) {
      console.error('Sınıf bilgileri yüklenirken hata oluştu:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/classes/${id}`, classData);
      } else {
        await axios.post('http://localhost:8080/api/classes', classData);
      }
      navigate('/classes');
    } catch (error) {
      console.error('Sınıf kaydedilirken hata oluştu:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClassData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Sınıf Düzenle' : 'Yeni Sınıf Ekle'}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sınıf Adı"
                name="name"
                value={classData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sınıf Seviyesi"
                name="grade"
                type="number"
                value={classData.grade}
                onChange={handleChange}
                required
                inputProps={{ min: 1, max: 12 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Şube"
                name="section"
                value={classData.section}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={teachers}
                getOptionLabel={(option) =>
                  `${option.firstName} ${option.lastName}`
                }
                value={classData.teacher}
                onChange={(_, newValue) => {
                  setClassData((prev) => ({
                    ...prev,
                    teacher: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sınıf Öğretmeni"
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                options={students}
                getOptionLabel={(option) =>
                  `${option.firstName} ${option.lastName}`
                }
                value={classData.students}
                onChange={(_, newValue) => {
                  setClassData((prev) => ({
                    ...prev,
                    students: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Öğrenciler"
                    placeholder="Öğrenci seçin"
                  />
                )}
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
                onClick={() => navigate('/classes')}
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

export default ClassForm; 