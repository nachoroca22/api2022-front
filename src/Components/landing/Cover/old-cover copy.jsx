import React from 'react'
import "./cover.css"
import videoHome from "../../media/cover.mp4"
import { Button,Grid, Select } from '@mui/material';
import imagen from '../../media/logo.png'
import data from "../../../data/filtros.json"
import { Container } from '@mui/system';

const Materias = data[0]["Materias"]
const tipoClase = data[1]["tipoClase"]
const frecuencia = data[2]["frecuencia"]
const Calificacion = data[3]["Calificacion"]  

const Cover = () => {
  return (
      <div className='cover-container'>
        <video className='video' src={videoHome} autoPlay loop muted />
        <img src={imagen}></img>
        <h1>¡Encontra tu profe ideal!</h1>
        <Container> 
        <Grid container direction="row" spacing={1} marginTop={10}>
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
        <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={5} direction="row" justifyContent="center" alignItems="center">
        <Button variant='outlined' 
           style={{borderColor:'#ffffff',textTransform:'initial',fontSize: 20, color:'white'}} 
           href='/busqueda'>
            Buscar materias</Button> 
        </Grid>
        </Grid>
        </Container>
          
           
    </div>

  );
};
export default Cover