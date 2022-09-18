import { Grid } from "@mui/material";
import React from "react";
import Card from "./card.jsx"
import foto from "../../media/foto.jpg"
import data from "../../../data/clases.json"


const Clases = data

function Cards(props){

    return(
        <div>
            <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
               
               {(Clases.filter(materia => materia.materia == props.materia || props.materia=="Todas")
               .filter(tipo => tipo.tipo == props.tipo || props.tipo=="Todas")
               .filter(frecuencia => frecuencia.frecuencia == props.frecuencia || props.frecuencia=="Todas")
               .filter(calificacion => calificacion.calificacion == props.calificacion || props.calificacion=="Todas"))
               .map(clase=>(<Card key={Clases.id} 
                                foto={foto}
                                profesor={clase.profesor}
                                calificacion={clase.calificacion}
                                costo={clase.costo}
                                descripcion={clase.descripcion}
                                materia={clase.materia}
                                tipo={clase.tipo}
                            ></Card>))
                }
            </Grid>
        </div>
    )
}
export default Cards