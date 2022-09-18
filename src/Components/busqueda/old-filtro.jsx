import React from 'react'
import { Grid } from "@mui/material";
import { useState } from 'react'
import "./filtro.css"
import "./busqueda.css"
import data from "../../data/filtros.json"

const Materias = data[0]["Materias"]
const tipoClase = data[1]["tipoClase"]
const frecuencia = data[2]["frecuencia"]
const Calificacion = data[3]["Calificacion"]  

function filtro() {
  return (
    <div>
     
      <Grid container className="busqueda" padding={5} marginTop={10} spacing={2}>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Materia' className='select_join' > 
            <option>Materia</option>
            {Materias.map((elemento) => (
              <option key={elemento.id}> {elemento.nombre} </option>
             ))}
          </select>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Tipo de Clase' className='select_join' > 
            <option>Tipo de Clase</option>
            {tipoClase.map((elemento) => (
              <option key={elemento.id}> {elemento.nombre} </option>
            ))}
          </select>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Frecuencia' className='select_join' > 
            <option>Frecuencia</option>
            {frecuencia.map((elemento) => (
              <option key={elemento.id}> {elemento.nombre} </option>
            ))}
          </select>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
          <select name='Calificacion' className='select_join' >
            <option>Calificacion</option>
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


