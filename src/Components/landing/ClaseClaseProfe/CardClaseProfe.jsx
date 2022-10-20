import * as React from 'react';
import {Container, Box, Paper, Grid, Typography, Card, CardMedia, InputLabel} from '@mui/material';
import CardSticky from './CardStiky';
import CommentBox from './CommentBox';
import data from "../../../data/contrataciones.json"

const contrataciones = data

export default function ModalClasesProfe (props,children){

    return( 
        <React.Fragment>

        <CardSticky 
            profesor={props.profesor}
            calificacion={props.calificacion}
            costo={props.costo}
        >
        </CardSticky>
        <Container  >
            <Grid container  justifyContent="end">
                <Grid item xs={6} sm={8} md={9} lg={10}></Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        {props.materia}
                    </Typography>  
                </Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}></Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Paper elevation={10} sx={{alignItems:"center",backgroundColor:"#d6533c",borderRadius:"20px", marginLeft:"10px",padding:2, marginTop:"20px"}}>
                        <Typography variant='h6' sx={{color:"#F2EDDB",textAlign:"left",fontWeight:600, marginTop:"10px"}}>                            
                            {props.presentacion}
                        </Typography>  
                    </Paper>             
                </Grid>  
                <Grid item xs={6} sm={8} md={9} lg={10}></Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Acerca de la clase
                    </Typography>  
                    <Paper elevation={10} sx={{alignItems:"center",backgroundColor:"#d6533c",borderRadius:"20px", marginLeft:"10px",padding:2, marginTop:"20px"}}>
                        <Typography variant='h6' sx={{color:"#F2EDDB",textAlign:"left",fontWeight:600, marginTop:"10px"}}>
                            {props.descripcion}
                        </Typography>  
                    </Paper>  
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Sobre {props.profesor}
                    </Typography> 
                    <Paper elevation={10} sx={{alignItems:"center",backgroundColor:"#d6533c",borderRadius:"20px", marginLeft:"10px",padding:2, marginTop:"20px"}}>
                        <Typography variant='h6' sx={{color:"#F2EDDB",textAlign:"left",fontWeight:600, marginTop:"10px"}}>
                            {props.titulos}
                        </Typography>  
                    </Paper> 
                </Grid> 

                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Opiniones
                    </Typography> 
                    {contrataciones.map(contratacion=>(<CommentBox key={contratacion.id} 
                        id={contratacion.id}
                        alumno_nombre={contratacion.alumno_nombre}
                        calificacion={contratacion.calificacion}
                        comentarios={contratacion.comentarios}
                        ></CommentBox>))
                    } 
                </Grid>
            </Grid> 

        </Container>
        
        </React.Fragment>

        )
};


