import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl, MenuItem, Select} from '@mui/material'
import { LoadingButton } from '@mui/lab'

export default function ModalContrataciones (props){
    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Información de la Contratación </InputLabel> 
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Materia:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField disabled value={props.contratacion.materia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Profesor:  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField disabled value={props.contratacion.profesor} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"34px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Email:  </InputLabel>   
                            <FormControl sx={{width:"87%"}}>
                                <TextField disabled value={props.contratacion.usuario} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"53px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField disabled value={props.contratacion.tipoClase} variant="outlined" size="small" style={{color:"#10223D", marginRight:"2px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Frecuencia:  </InputLabel>   
                            <FormControl sx={{width:"78%"}}>
                                <TextField disabled value={props.contratacion.frecuencia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"15px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Duración:  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField disabled value={props.contratacion.duracion +" hs"}  variant="outlined" size="small" style={{color:"#10223D", marginLeft:"29px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px", paddingBottom:"5px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Costo:  </InputLabel>   
                            <FormControl sx={{width:"87%"}}>
                                <TextField disabled value={"$ " + props.contratacion.costo} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"51px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Alumno:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField disabled value={props.contratacion.alumno} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Email:  </InputLabel>   
                            <FormControl sx={{width:"88%"}}>
                                <TextField disabled value={props.contratacion.usuario_alumno} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"53px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Telefono:  </InputLabel>   
                            <FormControl sx={{width:"83%"}}>
                                <TextField disabled value={props.contratacion.telefono_alumno} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"33px", marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Mensaje:  </InputLabel>   
                            <FormControl sx={{width:"83%"}}>
                                <TextField multiline disabled value={props.contratacion.mensaje} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"33px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Horario:  </InputLabel>   
                            <FormControl sx={{width:"85%"}}>
                                <TextField multiline disabled value={props.contratacion.horario} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"40px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" sx={{borderBottom: "1px solid #10223D", paddingBottom:"5px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Estado:  </InputLabel>   
                            <FormControl sx={{width:"86%"}}>
                                <Select 
                                    disabled
                                    value={props.contratacion.estado} 
                                    variant="outlined" 
                                    size="small" 
                                    style={{color:"#10223D",marginLeft:"43px",marginTop:"2px"}}
                                > 
                                    <MenuItem value={10}>Solicitada</MenuItem>
                                    <MenuItem value={20}>Aceptada</MenuItem>
                                    <MenuItem value={30}>Finalizada</MenuItem>
                                    <MenuItem value={40}>Cancelada</MenuItem>
                                </Select> 

                                {/* <TextField 
                                    disabled="true"
                                    value={props.contratacion.estado} 
                                    variant="outlined" size="small" 
                                    style={{color:"#10223D",marginLeft:"43px",marginTop:"2px"}}
                                > 
                                </TextField>  */}
                            </FormControl>         
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                                <LoadingButton onClick={()=>props.close()} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Cerrar</LoadingButton> 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};