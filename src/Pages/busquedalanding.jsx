import * as React from 'react';
import  Navbar from "../Components/landing/navBar/navBar"
import Busqueda from "../Components/busqueda/busqueda"
import Cards from '../Components/busqueda/cards';

function busquedalanding() {

    //console.log(datita.cursos[1])
    return (
      <React.Fragment >
        <Navbar></Navbar>
        <Busqueda></Busqueda>
        <Cards></Cards>  
      </React.Fragment>
    );
  }
  
  export default busquedalanding;