import * as React from 'react';
import Profesor from '../Components/profesor/profesor'
import  Navbar from "../Components/landing/navBar/navBar"

function Profesores() {

    
    return (
      <React.Fragment >
        <Navbar></Navbar>   
        <Profesor></Profesor>               
      </React.Fragment>
    );
  }
  
  export default Profesores;