import * as React from 'react';
import {Paper, Grid, Typography, Box, CardMedia} from '@mui/material';
import { LoadingButton } from '@mui/lab'
import foto from '../../media/foto.jpg'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function CommentBox (props,children){

    return(
        <React.Fragment>
            <Box sx={{border: "1px double #d6533c", borderRadius:"20px", marginBottom:"15px", marginLeft:"10px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"15px"}}>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography variant='h6' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"15px", marginBottom:"10px"}}>
                            {props.alumno_nombre} 
                        </Typography>
                    </Grid>   
                    <Grid textAlign="end" xs={6} sm={6} md={6} lg={6} sx={{paddingTop:"15px"}}>
                        <Rating readOnly value={props.calificacion}></Rating>
                    </Grid>  
                </Grid>     
                <Typography variant='body' sx={{color:"#10223D",textAlign:"left",fontWeight:600}}>
                    {props.comentarios}
                </Typography>
            </Box>
            

        </React.Fragment>

    )};