import React from 'react'
import "./cover.css"
import videoHome from "../../media/cover.mp4"
import { Button,Grid } from '@mui/material';
import imagen from '../../media/logo.png'

const Cover = () => {
  return (
      <div className='cover-container'>
        <video className='video' src={videoHome} autoPlay loop muted />
        <h1>¡Encontra tu profe ideal!</h1>
        <img src={imagen}></img>
        <p> Profesores calificados, en linea o persencial</p>
        <Grid container justifyContent="center" >
          <Grid item>
           <Button variant='outlined' 
           style={{borderColor:'#ffffff',textTransform:'initial',fontSize: 26, color:'white'}} 
           href='/busqueda'>
            Buscar materias</Button> 
          </Grid>
        </Grid>
           
    </div>

  );
};
export default Cover