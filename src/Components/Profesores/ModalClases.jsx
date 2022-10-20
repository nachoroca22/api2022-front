import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl} from '@mui/material'
import Rating from '@mui/material/Rating';

export default function ModalClases (props,clase,children){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Información de la Clase </InputLabel> 
                            </Grid>
                            <Grid container alignItems="center" justifyContent="center">
                                <Rating readOnly value={props.clase.calificacion} precision={0.5} size="medium" sx={{marginBottom:"15px", alignSelf:"center"}}></Rating>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Materia:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField disabled="true" value={props.clase.materia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField disabled="true" value={props.clase.tipo} variant="outlined" size="small" style={{color:"#10223D", marginRight:"2px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                                         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Costo ($):  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField disabled="true" value={props.clase.costo} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"28px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Frecuencia:  </InputLabel>   
                            <FormControl sx={{width:"79%"}}>
                                <TextField disabled="true" value={props.clase.frecuencia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"15px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Duración (hs):  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField disabled="true" value={props.clase.duracion} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"0px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center"  sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Descripción:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField multiline disabled="true" value={props.clase.descripcion} variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                    </Grid>
                </Paper> 

    )
};