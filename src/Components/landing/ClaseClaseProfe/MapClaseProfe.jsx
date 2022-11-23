import React from "react";
import CardClaseProfe from "./CardClaseProfe.jsx";
import  Navbar from "../navBar/NavBar.jsx";
import { useParams } from 'react-router-dom';
import { Grid } from "@mui/material";
import { obtenerClaseFull } from "../../../Services/clases";


        
function MapClaseProfe(){

    let {id}  = useParams();

    const [submitted, setSubmitted] = React.useState(false);

    const [clase, setClase] = React.useState({
        nombreImagen:"",
        apellido: "",
        name:  "",
        calificacion:  "",
        costo:  "",
        descripcion:  "",
        duracion:  "",
        id_clase:  "",
        id_user:  "",
        materia:  "",
        tipoClase:  "",
        presentacion:  "",
        estudios:  "",
        usuario:  "",
        frecuencia:  "", 
    });

    const cargarClase = () => {
        obtenerClaseFull(id)
          .then((response) => {
            setClase({
                nombreImagen: response.data.nombreImagen,
                apellido: response.data.apellido,
                name: response.data.name,
                calificacion: response.data.calificacion,
                costo: response.data.costo,
                descripcion: response.data.descripcion,
                duracion: response.data.duracion,
                id_clase: response.data.id_clase,
                id_user: response.data.id_user,
                materia: response.data.materia,
                tipoClase: response.data.tipoClase,
                presentacion: response.data.presentacion,
                estudios: response.data.estudios,
                frecuencia: response.data.frecuencia,
                usuario: response.data.usuario, 
        
          })
        })
    };
    if (submitted === false){
        setSubmitted(true)
        cargarClase();    
  
    } 
    return(
        <React.Fragment>
        <Navbar></Navbar>
        <Grid sx={{marginTop:"80px",backgroundColor:'#F2EDDB', minHeight:"950px", paddingTop:"20px"}}>
            <CardClaseProfe
                datosclase ={clase}
            >
            </CardClaseProfe>
        </Grid>
        </React.Fragment>
    ) 
}
export default MapClaseProfe