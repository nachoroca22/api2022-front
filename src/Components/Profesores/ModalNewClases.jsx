import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl} from '@mui/material'
import Rating from '@mui/material/Rating';
import { LoadingButton } from '@mui/lab';

export default function ModalEditClases (props,clase,children){

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
                                <TextField variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField variant="outlined" size="small" style={{color:"#10223D", marginRight:"2px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                                         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Costo ($):  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField variant="outlined" type="number" size="small" style={{color:"#10223D", marginLeft:"28px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Frecuencia:  </InputLabel>   
                            <FormControl sx={{width:"79%"}}>
                                <TextField variant="outlined" type="number" size="small" style={{color:"#10223D", marginLeft:"15px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Duración (hs):  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField variant="outlined" type="number" size="small" style={{color:"#10223D", marginLeft:"0px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center"  sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Descripción:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField multiline variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            <LoadingButton variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Guardar</LoadingButton> 
                        </Grid>

                    </Grid>
                </Paper> 

    )
};