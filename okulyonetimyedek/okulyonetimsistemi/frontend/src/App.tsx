import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import Home from './pages/Home';
import StudentList from './pages/StudentList';
import StudentForm from './pages/StudentForm';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import ClassList from './pages/ClassList';
import ClassForm from './pages/ClassForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Okul Yönetim Sistemi
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={Link} to="/students">
            Öğrenciler
          </Button>
          <Button color="inherit" component={Link} to="/teachers">
            Öğretmenler
          </Button>
          <Button color="inherit" component={Link} to="/classes">
            Sınıflar
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/:id" element={<StudentForm />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teachers/new" element={<TeacherForm />} />
            <Route path="/teachers/:id" element={<TeacherForm />} />
            <Route path="/classes" element={<ClassList />} />
            <Route path="/classes/new" element={<ClassForm />} />
            <Route path="/classes/:id" element={<ClassForm />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
