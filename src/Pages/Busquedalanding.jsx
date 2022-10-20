import * as React from 'react';
import  Navbar from "../Components/landing/navBar/NavBar"
import Cards from '../Components/Common/Cards/Cards.jsx';
import { useParams } from 'react-router-dom';
import Filter from '../Components/Common/Filter/Filter.jsx'
import {Grid} from '@mui/material';

function Busquedalanding() {

  const {materia,tipo,frecuencia,calificacion} = useParams()

    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Grid container xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center"
          sx={{marginTop:"80px",paddingBottom:"15px",paddingTop:"15px" ,marginBottom:"3px", height:"flex", backgroundColor: "#F2EDDB"}}
        >
          <Filter></Filter>
        </Grid>
        <Cards
          materia={materia}
          tipo={tipo}
          frecuencia={frecuencia}
          calificacion={calificacion}
        ></Cards> 
 
      </React.Fragment>
    );
  }
  
  export default Busquedalanding;