import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/landing.jsx';
import Busqueda from './Pages/busquedalanding.jsx';
import Profesores from './Pages/profesores.jsx';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path="/busqueda/:materia/:tipo/:frecuencia/:calificacion/" element={<Busqueda />}> </Route>
          <Route path="/profesores" element={<Profesores/>}> </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 