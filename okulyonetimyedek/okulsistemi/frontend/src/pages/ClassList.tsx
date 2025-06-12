import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Class {
  id: number;
  name: string;
  grade: number;
  section: string;
  teacher: {
    id: number;
    firstName: string;
    lastName: string;
  };
  students: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
}

const ClassList: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Sınıflar yüklenirken hata oluştu:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Bu sınıfı silmek istediğinizden emin misiniz?')) {
      try {
        await axios.delete(`http://localhost:8080/api/classes/${id}`);
        setClasses(classes.filter((classItem) => classItem.id !== id));
      } catch (error) {
        console.error('Sınıf silinirken hata oluştu:', error);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sınıf Listesi
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/classes/new')}
        sx={{ mb: 2 }}
      >
        Yeni Sınıf Ekle
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sınıf Adı</TableCell>
              <TableCell>Sınıf Seviyesi</TableCell>
              <TableCell>Şube</TableCell>
              <TableCell>Sınıf Öğretmeni</TableCell>
              <TableCell>Öğrenci Sayısı</TableCell>
              <TableCell>İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classes.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell>{classItem.name}</TableCell>
                <TableCell>{classItem.grade}</TableCell>
                <TableCell>{classItem.section}</TableCell>
                <TableCell>
                  {classItem.teacher
                    ? `${classItem.teacher.firstName} ${classItem.teacher.lastName}`
                    : '-'}
                </TableCell>
                <TableCell>{classItem.students.length}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/classes/${classItem.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(classItem.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ClassList; 