import {Grid} from "@mui/material";
import React from "react";
import "./profesor.css"


function Profesor() {
    return (
            <Grid 
                container 
                direction="column" 
                alignItems="center"
                marginTop={10}>

                <Grid className="descripcion">
                    <h1>Descripcionnnnnnnnnn</h1>
                    <h1>Descripcionnnnnnnnnn</h1>
                    <h1>Descripcionnnnnnnnnn</h1>
                </Grid>
                <Grid className="acercaClase">
                        <h1>Acerca de las clases</h1>
                </Grid>
                <Grid className="acercaProfesor">
                        <h1>Datos Profesor</h1>
                </Grid>
                <Grid className="opiniones">
                        <h1>Opiniones</h1>
                </Grid>

            </Grid> 
    )
}

export default Profesor;