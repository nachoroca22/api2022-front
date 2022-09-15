import { Grid } from "@mui/material";
import React from "react";
import Card from "./card.jsx"
import foto from "../../Components/media/foto.jpg"
import data from "../../data/clases.json"

const Clases = data
console.log(Clases)

function Cards(){
    return(
        <div>
            <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
                    {
                            Clases.map(clase=>(<Card key={Clases.id} 
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