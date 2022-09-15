import React from "react";
import foto from "../../Components/media/foto.jpg"
import Rating from '@mui/material/Rating';

import "./card.css"
import { Box, Grid } from "@mui/material";

import data from "../../data/clases.json"

const Clases = data.Clases


function Card() {
    return(
        <div className="card">
            <img src={foto} alt=""></img>
            <div className="card-body">
               
                <Grid container xs={6} sm={6} md={6} lg={6} margin="auto" justifyContent="center" alignItems="center">                  
                    <Grid item alignItems="center">
                        <Box alignItems="center" justifyContent="center">
                            <h4 className="card-title" alignItems="center"> Cosme Fulaniito</h4>
                            <Rating className="card-raiting" value={5} precision={0.5} size="large" ></Rating>
                        </Box>
                        <h4 className="card-materia"> Matematica</h4>
                        <h4 className="card-materia"> $500</h4> 
                    </Grid>   
                </Grid> 
                <p className="card-desc" margin="auto" justifyContent="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores magni distinctio ducimus fugit. Alias aspernatur vitae atque minus dolor. 
                Odit quos iste adipisci sapiente eos aliquid reprehenderit cupiditate hic! Numquam.</p>

            </div>

        </div>
    )
}

export default Card;