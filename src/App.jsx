import React,{Component}  from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Switch, ThemeProvider, Typography } from '@mui/material';
import Home from './Pages/landing.jsx';
import Busqueda from './Pages/busquedalanding.jsx';
import Cards from './Components/busqueda/cards.jsx';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path="/busqueda" element={<Busqueda/>}> </Route>
          <Route path='/cards' element={<Cards></Cards>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 