import * as React from 'react';
import {Container, Box, Paper, Grid, Typography, Card, CardMedia, InputLabel} from '@mui/material';
import { LoadingButton } from '@mui/lab'
import foto from '../../media/foto.jpg'
import Rating from '@mui/material/Rating';

export default function ModalClasesProfe (props,calificacion,children){


    return(

        <Paper elevation={10} sx={{backgroundColor:"#F2EDDB", borderRadius:"20px", padding:5,height:'flex',width:1000, margin:"20px auto"}}>
            <Grid container justifyContent="center">
                <Typography variant='h4' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginBottom:"10px"}}>
                    {props.profesor}
                </Typography>
            </Grid>
            <Grid container spacing={2}>  
                <Grid item xs={6} md={4}>
                <CardMedia 
                    component="img"
                    style={{
                        border: "1.5px solid #10223D",
                        marginTop:"2px",
                        paddingTop:"1px",
                        width: "auto",
                        maxHeight: "190px",
                        borderRadius:"15px"
                    }}
                    image={foto}
                    alt="foto pefil"       
                />
                </Grid>
                <Grid item xs={6} md={8}>
                    <Box sx={{borderRadius:"10px",border: "1.5px solid #10223D",padding:"10px", marginTop:"6px"}}>
                        <Typography variant='h5' sx={{color:"#10223D",fontWeight:600}}>
                            {props.materia} <Rating readOnly value={props.calificacion} precision={0.5} size="medium" sx={{paddingLeft:"15px"}}></Rating>
                        </Typography> 
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600, marginTop:"1px"}}> 
                           Tipo: {props.tipo}
                        </Typography>
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600,marginTop:"1px"}}> 
                           Frecuencia: {props.frecuencia}
                        </Typography>
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600, marginTop:"1px"}}> 
                           Duracion: {props.duracion} hs
                        </Typography>
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600, marginTop:"1px"}}> 
                           Costo: ${props.costo}
                        </Typography>                
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} marginTop="15px" >
                    <Grid textAlign="center">
                        <Typography variant='h5' sx={{color:"#10223D", fontWeight:600, marginBottom:"10px"}}> Presentacion</Typography>
                    </Grid>
                    <Box sx={{borderRadius:"10px",border: "1.5px solid #10223D",padding:"1px", minHeight:"50px"}}>
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600, paddingTop:"4px", paddingLeft:"2px"}}>
                            {props.presentacion}
                        </Typography>                   
                    </Box>
                    
                    <Grid textAlign="center">
                        <Typography variant='h5' sx={{color:"#10223D", fontWeight:600, marginBottom:"10px",marginTop:"10px"}}> Formacion</Typography>
                    </Grid>
                    <Box sx={{borderRadius:"10px",border: "1.5px solid #10223D",padding:"1px", minHeight:"50px"}}>
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600, paddingTop:"4px", paddingLeft:"2px"}}>
                            {props.titulos}
                        </Typography>                   
                    </Box>

                    <Grid textAlign="center">
                        <Typography variant='h5' sx={{color:"#10223D", fontWeight:600, marginBottom:"10px",marginTop:"10px"}}> Clase</Typography>
                    </Grid>
                    <Box sx={{borderRadius:"10px",border: "1.5px solid #10223D",padding:"1px", minHeight:"50px"}}>
                        <Typography variant='h6' sx={{color:"#d6533c",fontWeight:600, paddingTop:"4px", paddingLeft:"2px"}}>
                            {props.descripcion}
                        </Typography>                   
                    </Box>
                </Grid>
            </Grid>
        </Paper>
        )
};