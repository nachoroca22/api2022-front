import { Grid } from "@mui/material";
import React from "react";
import "./busqueda.css"
import Filtro from '../busqueda/filtro'


function busqueda() {
    return (
        <div>
            <Grid container className="busqueda" padding={5} marginTop={10} spacing={2}>
                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                    <Filtro ></Filtro>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                    <Filtro ></Filtro>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                    <Filtro ></Filtro>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                    <Filtro ></Filtro>
                </Grid> 
            </Grid> 
        </div>
        
    )
}

export default busqueda;