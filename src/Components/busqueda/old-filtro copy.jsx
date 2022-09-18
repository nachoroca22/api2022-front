import React from 'react'
import { Grid } from "@mui/material";
import { useState } from 'react'
import "./filtro.css"
import "./busqueda.css"
import data from "../../data/filtros.json"

const MateriasData = data[0]["Materias"]
const tipoClase = data[1]["tipoClase"]
const frecuencia = data[2]["frecuencia"]
const Calificacion = data[3]["Calificacion"]  

function filtro() {
  return (
    <div>
      <Grid container className="busqueda" padding={5} marginTop={10} spacing={2}>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select className='select_join' > Materias
            {MateriasData.map((elemento) => (
              <option key={elemento.id}> {elemento.nombre} </option>
             ))}
          </select>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Materias' className='select_join' > 
            {tipoClase.map((elemento) => (
              <option key={elemento.id}> {elemento.nombre} </option>
            ))}
          </select>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Materias' className='select_join' > 
            {frecuencia.map((elemento) => (
              <option key={elemento.id}> {elemento.nombre} </option>
            ))}
          </select>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Materias' className='select_join' > 
            {Calificacion.map((elemento) => (
                <option key={elemento.id}> {elemento.nombre} </option>
            ))}
          </select>
        </Grid>
      </Grid>
    </div>
    

  )
}
export default filtro;


