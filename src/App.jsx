import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
import { ProtectedRoute} from './ProtectedRoutes/ProtectedRoute';


function App() {



  return (

    <div className='App'>
      <ThemeProvider theme={temaPersonalizado}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/busqueda/clase/:id' element={<ModalClasesProfe/>}></Route> 
            <Route path="/busqueda/" element={<Busqueda />}> </Route>
            {/* <Route path="/busqueda/:materia/:tipoclase/:frecuencia/:calificacion/" element={<Busqueda />}> </Route>  */}
            <Route path='/profesores/home/' element={<ProfesoresHome/>}></Route>   
            <Route path='/profesores/clases' element={<ProfesoresClases/>}></Route>       
            <Route path='/profesores/contrataciones' element={<ProfesoresContrataciones/>}></Route> 
            <Route path='/profesores/contratacionesFinalizadas' element={<ProfesoresContratacionesFinalizadas/>}></Route>       
            <Route path='/profesores/comentarios' element={<ProfesoresComentarios/>}></Route>  
            <Route path='/alumnos/home/' element={<AlumnosHome/>}></Route>  
            <Route path='/alumnos/contrataciones' element={<AlumnosContrataciones/>}></Route> 
            <Route path='/alumnos/contratacionesfinalizadas' element={<AlumnosContratacionesFinalizadas/>}></Route> 

          </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App; 