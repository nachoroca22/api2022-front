import * as React from 'react';
import  Navbar from "../Components/landing/navBar/NavBar"
import Cards from '../Components/Common/Cards/Cards.jsx';
import { useParams } from 'react-router-dom';
import Filter from '../Components/Common/Filter/Filter.jsx'
import {Grid} from '@mui/material';
import {obtenerClasesFiltradas} from "../Services/clases"

function Busquedalanding() {

  const {materia,tipo,frecuencia,calificacion} = useParams()
 
  const initialClasesFiltradas = {
    name: "",
    apellido: "",
    id_user: null,
    materia: "",
    tipoClase: "",
    costo: "",
    frecuencia: "",
    duracion: "",  
    descripcion: "",
    id_clase: null,    
    totalCount: null,
  }
  const [clasesFiltradas, setClasesFiltradas] = React.useState([initialClasesFiltradas]);
  const [submitted, setSubmitted] = React.useState(false);

  const recargarClasesFiltradas = () => {
    obtenerClasesFiltradas()
      .then((response) => {
        setClasesFiltradas( 
            {name: response.data.name,
            apellido: response.data.apellido,
            id_user: response.data.id_user,
            materia: response.data.materia,
            tipoClase: response.data.tipoClase,
            costo: response.data.costo,
            frecuencia: response.data.frecuencia,
            duracion: response.data.duracion,
            descripcion: response.data.descripcion,
            id_clase: response.data.id_clase,  
            totalCount: response.data.totalCount}); 
            })
        
  };

  if (submitted === false){
      setSubmitted(true)
      recargarClasesFiltradas();
  }
  console.log(clasesFiltradas)
  


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