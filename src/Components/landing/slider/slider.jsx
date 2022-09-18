import React from 'react'
import { Grid } from '@mui/material'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import slides from "./slides"
import './slider.css'


function slider() {
  return (
    <Grid container className='carousel-container' alignContent="normal">
        <Grid item xs={12} sm={12} md={6} lg={3} className='carousel-title'>
            <h2> Materias </h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={9}>
            <Carousel
                plugins={['arrows',"infinite"]}
                centered
                infinite
                offset={50}
                slides={slides}
                itemWidth={250}
                
            />
        </Grid>
        
    </Grid>
   
  )
}
export default slider