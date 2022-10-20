import { Grid, Box } from '@mui/material'
import React from 'react'
import imagenbuscar from '../../media/search.png'
import imagencontact from "../../media/contact.png"
import imagenagenda from "../../media/agenda.png"
import './about.css'

export default function about() {
    
  return (
    <Grid container className='about-container'  justifyContent="center" >
        <Grid item xs={12} sm={6} md={4} lg={3} className="desc-buscar">
            <h3> 1 - Busca </h3>          
            <p>Buscá entre varios perfiles al profesor que más se acerque a tus necesidades.</p>        
            <img src={imagenbuscar} alt='about' className='about-img'></img>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} className="desc-buscar"  >
            <h3> 2 - Contacta </h3>
            <p>Ponete en contacto con el profesor por mail, whatsaap o redes sociales.</p>   
            <img src={imagencontact} alt='about' className='about-img' ></img>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} className="desc-buscar">
            <h3> 3 - Agenda </h3>
            <p>Coordinen la clase juntos y programa el dia y el horario que mejor te resulte.</p>       
            <img src={imagenagenda} alt='about' className='about-img'></img>
        </Grid>

    </Grid>      
  )
}
