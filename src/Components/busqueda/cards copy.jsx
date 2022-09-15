import { Grid } from "@mui/material";
import React from "react";
import Card from "./card.jsx"
import foto from "../../Components/media/foto.jpg"
import data from "../../data/clases.json"

const Clases = data
console.log(Clases)

function Cards(){
    return(
        <div container>
            <Grid container marginTop={0} spacing={0} xs={6} sm={6} md={6} lg={6} direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                    {
                        Clases.map(clase=>(<Card key={Clases.id} 
                            foto={foto}
                            profesor={clase.profesor}
                            calificacion={clase.calificacion}
                            costo={clase.costo}
                            descripcion={clase.descripcion}
                            materia={clase.materia}
                        ></Card>))
                    }
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards