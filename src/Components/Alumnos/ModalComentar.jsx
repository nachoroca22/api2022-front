import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl} from '@mui/material'
import Rating from '@mui/material/Rating';
import { LoadingButton } from '@mui/lab';

export default function ModalClases (props,contratacion,children){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Información de la Clase </InputLabel> 
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Materia:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField disabled="true" value={props.contratacion.clase_id} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField disabled="true" value={props.contratacion.tipo} variant="outlined" size="small" style={{color:"#10223D", marginRight:"2px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                                         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Profesor:  </InputLabel>   
                            <FormControl sx={{width:"83%"}}>
                                <TextField disabled="true" value={props.contratacion.profesor} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"33px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Email:  </InputLabel>   
                            <FormControl sx={{width:"88%"}}>
                                <TextField disabled="true" value={props.contratacion.profesorEmail} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"52px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'10px', fontSize:"15px"}}> Calificación:  </InputLabel>   
                            <Rating value={props.contratacion.calificacion} precision={0.5} size="medium"sx={{marginTop:"10px",marginLeft:"10px",alignSelf:"center"}}></Rating>
                        </Grid>
                        <Grid container alignItems="center"  sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Comentario:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField multiline value={props.contratacion.comentarios} variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            <LoadingButton variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Comentar</LoadingButton> 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};