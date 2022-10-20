import React from "react";
import foto from "../../media/foto.jpg"
import data from "../../../data/clases.json"
import ModalClasesProfe from "./CardClaseProfe.jsx";
import  Navbar from "../navBar/NavBar.jsx";
import { useParams } from 'react-router-dom';
import { Grid } from "@mui/material";

const Clases = data
function ClaseProfe(){
    let {id}  = useParams();

    return(
        <React.Fragment>
        <Navbar></Navbar>
        <Grid sx={{marginTop:"80px",backgroundColor:'#F2EDDB', minHeight:"950px", paddingTop:"20px"}}>
        {Clases.filter(materia => materia.id == id).map(clase=>(<ModalClasesProfe key={Clases.id} 
            id={clase.id}
            foto={foto}
            profesor={clase.profesor}
            presentacion={clase.presentacion}
            titulos={clase.titulos}
            materia={clase.materia}
            tipo={clase.tipo}
            frecuencia={clase.frecuencia}
            duracion={clase.duracion}
            calificacion={clase.calificacion}
            descripcion={clase.descripcion}
            costo={clase.costo}
            ></ModalClasesProfe>))
        }
        </Grid>
        </React.Fragment>
    ) 
}
export default ClaseProfe