import * as React from 'react';
import  Navbar from "../Components/landing/navBar/navBar"
import Cards from '../Components/common/cards/cards.jsx';
import { useParams } from 'react-router-dom';
import Filter from '../Components/common/filter/filter.jsx'
import {Grid} from '@mui/material';

function Busquedalanding() {

  const {materia,tipo,frecuencia,calificacion} = useParams()

    return (
      <React.Fragment >
        <Navbar></Navbar>
        <Grid container xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center"
          sx={{marginTop:"80px",paddingBottom:"15px",paddingTop:"15px" ,marginBottom:"30px", height:"flex", backgroundColor: "#000000"}}
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