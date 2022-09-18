import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Landing.jsx';
import Busqueda from './Pages/Busquedalanding.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path="/busqueda/:materia/:tipo/:frecuencia/:calificacion/" element={<Busqueda />}> </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 