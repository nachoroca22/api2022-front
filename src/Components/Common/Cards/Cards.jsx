import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card.jsx"

export default function Cards(props){

    return(
        <div>
            <Grid container spacing={2} backgroundColor='#F2EDDB' direction="row" justifyContent="space-evenly" alignItems="center">
                {props.clases.map((elemento) => (<Card key={elemento._id} 
                                    id_clase={elemento.id_clase}
                                    foto={elemento.nombreImagen}
                                    profesor={elemento.name + " " + elemento.apellido}
                                    materia={elemento.materia}
                                    tipoClase={elemento.tipoClase}
                                    costo={elemento.costo}
                                    frecuencia={elemento.frecuencia}
                                    duracion={elemento.duracion}
                                    descripcion={elemento.descripcion}
                                    calificacion={elemento.calificacion}
                                    
                                ></Card>))}
            </Grid>
        </div>
    )
}
