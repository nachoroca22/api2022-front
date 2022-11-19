import React, { useState }  from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from './Pages/Landing.jsx';
import Busqueda from './Pages/Busquedalanding.jsx';
import ProfesoresClases from './Components/Profesores/ProfesoresClases';
import ProfesoresHome from './Components/Profesores/ProfesoresHome';
import ProfesoresContrataciones from './Components/Profesores/ProfesoresContrataciones';
import ProfesoresComentarios from './Components/Profesores/ProfesoresComentarios';
import AlumnosHome from './Components/Alumnos/AlumnosHome';
import AlumnosContrataciones from './Components/Alumnos/AlumnosContrataciones';
import AlumnosContratacionesFinalizadas from './Components/Alumnos/AlumnosContratacionesFinalizadas';
import ProfesoresContratacionesFinalizadas from "./Components/Profesores/ProfesoresContratacionesFinalizadas"
import ModalClasesProfe from './Components/landing/ClaseClaseProfe/MapClaseProfe';
import { ThemeProvider } from '@emotion/react';
import { temaPersonalizado } from './theme/theme.jsx';
//import { ProtectedRoute} from './ProtectedRoutes/ProtectedRoute';



export default function App() {
  //const [alumno, setAlumno] = useState(false)
  const activeSession = localStorage.getItem('activeSession')

  return (

    <div className='App'>
      <ThemeProvider theme={temaPersonalizado}>
        <Router>
          <Routes>
          <Route exact path='/profesores/home/' element={activeSession? <ProfesoresHome /> : <Navigate to="/"></Navigate>}/> 
            <Route exact path='/profesores/clases' element={activeSession ? <ProfesoresClases /> : <Navigate to="/"></Navigate>}/>       
            <Route exact path='/profesores/contrataciones' element={activeSession ? <ProfesoresContrataciones /> : <Navigate to="/"></Navigate>}/>   
            <Route exact path='/profesores/contratacionesFinalizadas' element={activeSession ?  <ProfesoresContratacionesFinalizadas /> : <Navigate to="/"></Navigate>}/>       
            <Route exact path='/profesores/comentarios' element={activeSession  ? <ProfesoresComentarios /> : <Navigate to="/"></Navigate>}/>  
          <Route exact path='/alumnos/home/' element={activeSession ? <AlumnosHome/> : <Navigate to="/"></Navigate>}/>  
            <Route exact path='/alumnos/contrataciones' element={activeSession ? <AlumnosContrataciones /> : <Navigate to="/"></Navigate>}/>                   
            <Route exact path='/alumnos/contratacionesfinalizadas' element={activeSession ? <AlumnosContratacionesFinalizadas /> : <Navigate to="/"></Navigate>}/>              <Route path='/' element={<Home />}/>
          <Route path='/busqueda/clase/:id' element={<ModalClasesProfe />}/> 
          <Route path="/busqueda/" element={<Busqueda />}/>
          <Route path="*" element={<h1>Pagina Inexistente</h1>}/>
{/* 
            <Route exact path='/profesores/home/' element={(activeSession===true && rol==="Profesor") ? <ProfesoresHome /> : <Navigate to="/"></Navigate>}/> 
            <Route exact path='/profesores/clases' element={(activeSession===true && rol==="Profesor")  ? <ProfesoresClases /> : <Navigate to="/"></Navigate>}/>       
            <Route exact path='/profesores/contrataciones' element={(activeSession===true && rol==="Profesor")  ? <ProfesoresContrataciones /> : <Navigate to="/"></Navigate>}/>   
            <Route exact path='/profesores/contratacionesFinalizadas' element={ (activeSession===true && rol==="Profesor") ?  <ProfesoresContratacionesFinalizadas /> : <Navigate to="/"></Navigate>}/>       
            <Route exact path='/profesores/comentarios' element={(activeSession===true && rol==="Profesor")  ? <ProfesoresComentarios /> : <Navigate to="/"></Navigate>}/>  
            <Route exact path='/alumnos/home/' element={activeSession===true && rol==="Alumno"  ? <AlumnosHome/> : <Navigate to="/"></Navigate>}/>  
            <Route exact path='/alumnos/contrataciones' element={activeSession===true && rol==="Alumno" ? <AlumnosContrataciones /> : <Navigate to="/"></Navigate>}/>             
            <Route exact path='/alumnos/contratacionesfinalizadas' element={activeSession===true && rol==="Alumno" ? <AlumnosContratacionesFinalizadas /> : <Navigate to="/"></Navigate>}/>  
            <Route path='/' element={<Home />}/>
            <Route path='/busqueda/clase/:id' element={<ModalClasesProfe />}/> 
            <Route path="/busqueda/" element={<Busqueda />}/>
            <Route path="*" element={<h1>Pagina Inexistente</h1>}/> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
