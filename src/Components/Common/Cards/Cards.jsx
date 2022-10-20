import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card.jsx"
import foto from "../../media/foto.jpg"
import data from "../../../data/clases.json"


const Clases = data

function Cards(props){

    return(
        <div>
            <Grid container spacing={2} backgroundColor='#F2EDDB' direction="row" justifyContent="space-evenly" alignItems="center">
               
               {(Clases.filter(materia => materia.materia == props.materia || props.materia=="Todas")
               .filter(tipo => tipo.tipo == props.tipo || props.tipo=="Todas")
               .filter(frecuencia => frecuencia.frecuencia == props.frecuencia || props.frecuencia=="Todas")
               .filter(calificacion => calificacion.calificacion == props.calificacion || props.calificacion=="Todas"))
               .map(clase=>(<Card key={Clases.id} 
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
                            ></Card>))
                }
            </Grid>
        </div>
    )
}
export default Cards