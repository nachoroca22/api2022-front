import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, Typography } from '@mui/material';
import Home from './Pages/landing';


function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App; 