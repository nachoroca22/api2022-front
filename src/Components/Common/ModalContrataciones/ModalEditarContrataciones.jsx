import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl, MenuItem, Select} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import {actualizarEstadoContratacion} from "../../../Services/contrataciones"

export default function ModalEditarContrataciones (props,contratacion){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};
    const [botonCerrar, setBotonCerrar] = React.useState(undefined);
    const [mensajeActualizacion, setMensajeContratacion] = React.useState("");
    const [updateContratacion,setUpdateContratacion] = React.useState({
        id_contratacion: props.contratacion.id_contratacion,
        estado: props.contratacion.estado,
    });

    const handleChange = (e) => {
        setUpdateContratacion((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const actualizarEstado = () =>{
        actualizarEstadoContratacion(updateContratacion);
        setMensajeContratacion("Se actualizo la contratacion");
        setBotonCerrar(true)
    } 
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        {/* <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Información de la Contratación </InputLabel> 
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
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Alumno:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField disabled="true" value={props.contratacion.alumno_nombre} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Email:  </InputLabel>   
                            <FormControl sx={{width:"88%"}}>
                                <TextField disabled="true" value={props.contratacion.alumno} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"53px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Telefono:  </InputLabel>   
                            <FormControl sx={{width:"83%"}}>
                                <TextField disabled="true" value={props.contratacion.alumno_telefono} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"33px", marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Costo:  </InputLabel>   
                            <FormControl sx={{width:"88%"}}>
                                <TextField disabled="true" value={props.contratacion.costo} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"49px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid> */}
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Estado:  </InputLabel>   
                            <FormControl sx={{width:"86%"}}>
                                <Select 
                                    onChange={handleChange}
                                    value={updateContratacion.estado} 
                                    name="estado"
                                    variant="outlined" 
                                    size="small" 
                                    style={{color:"#10223D",marginLeft:"43px",marginTop:"2px"}}
                                > 
                                    <MenuItem value={10}>Solicitada</MenuItem>
                                    <MenuItem value={20}>Aceptada</MenuItem>
                                    <MenuItem value={30}>Finalizada</MenuItem>
                                    <MenuItem value={40}>Cancelada</MenuItem>
                                </Select> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeActualizacion} </InputLabel> 
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            {botonCerrar ? undefined :<LoadingButton onClick={actualizarEstado} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Actualizar</LoadingButton>}
                            {botonCerrar ? <LoadingButton onClick={()=>props.close()} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Cerrar</LoadingButton> : undefined} 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};