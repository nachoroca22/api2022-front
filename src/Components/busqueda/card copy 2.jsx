import React from "react";
import Rating from '@mui/material/Rating';

import "./card.css"
import { Box, Grid } from "@mui/material";


function Card(props) {

    return(
        <div className="card" col-md-4>
            <img src={props.foto} alt=""></img>
            <div className="card-body">
                <Grid container xs={6} sm={6} md={6} lg={6} margin="auto" justifyContent="center" alignItems="center">                  
                    <Grid item alignItems="center">
                        <Box alignItems="center" justifyContent="center">
                            <h4 className="card-title" alignItems="center"> {props.profesor}</h4>
                            <Rating className="card-raiting" value={props.calificacion} precision={0.5} size="large" ></Rating>
                        </Box>
                        <h4 className="card-materia"> {props.materia}</h4>
                        <h4 className="card-materia"> ${props.costo}</h4> 
                    </Grid>   
                </Grid> 
                <p className="card-desc" margin="auto" justifyContent="center"> {props.descripcion}</p>

            </div>

        </div>
    )
}

export default Card;