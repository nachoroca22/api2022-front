import * as React from 'react';
import {Paper, Grid, Typography, Card, CardMedia} from '@mui/material';
import { LoadingButton } from '@mui/lab'
import foto from '../../media/foto.jpg'
import Rating from '@mui/material/Rating';

export default function CardSticky (props,children){

    return(

                <Grid container position="fixed" top="120px" xs={12} sm={12} md={12} lg={4}>
                        <Paper elevation={10} sx={{alignItems:"center",maxWidth:"200px", width:"200px",backgroundColor:"#F2EDDB",borderRadius:"20px", marginLeft:"25px",padding:2}}>
                            <Grid container alignItems="center" justifyItems="center" justifyContent="center">
                                <CardMedia 
                                    component="img"
                                    style={{
                                        border: "1.5px solid #10223D",
                                        width: "180px",
                                        borderRadius:"15px",
                                        maxHeight: "250px",
                                                
                                    }}
                                    display="flex"
                                    image={foto}
                                    alt="foto pefil"       
                                /> 
                                <Typography variant='h6' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"10px" ,marginBottom:"1px"}}>
                                    {props.profesor}
                                </Typography> 
                                <Rating readOnly value={props.calificacion} precision={0.5} size="medium" sx={{marginTop:"5px", paddingBottom:"5px"}}></Rating>
                                <Grid container  alignItems="center" justifyItems="center" justifyContent="center" textAlign="center">
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Typography variant='body2' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"1px"}}>
                                            Tarifa
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Typography variant='h6' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginBottom:"10px"}}>
                                            ${props.costo}
                                        </Typography> 
                                    </Grid>                                  
                                </Grid>
                                <LoadingButton 
                                    variant="contained" 
                                    size='large' 
                                    sx={{borderRadius:"10px",marginBottom:"20px" }}
                                > Contratar
                                </LoadingButton>
                                
                            </Grid>                                                    
                        </Paper>
                   
                </Grid>

    )};
