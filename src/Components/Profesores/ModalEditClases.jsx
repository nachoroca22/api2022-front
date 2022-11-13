import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl, MenuItem, Select} from '@mui/material'
import Rating from '@mui/material/Rating';
import { LoadingButton } from '@mui/lab';
import {actualizarClase} from "../../Services/clases"



export default function ModalEditClases (props,clase,children){
    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};
    const frecuencia = ["Unica","Semanal","Mensual"]
    const tipoClase = ["Individual","Grupal"]
    const [botonCerrar, setBotonCerrar] = React.useState(false);
    const [mensajeUpdateClase, setMensajeUpdateClase] = React.useState("");

    const [newClase,setNewClase] = React.useState({
        id_profesor: localStorage.getItem("id"),
        id_clase: props.clase.id_clase,
        materia: props.clase.materia,
        tipoClase: props.clase.tipoClase,
        costo: props.clase.costo,
        frecuencia: props.clase.frecuencia,
        duracion: props.clase.duracion,
        descripcion: props.clase.descripcion
    });
    
    const handleSubmiteed = (event) => {
        event.preventDefault();
        actualizarClase(newClase)
        .then((response) => {
            response.message === "Succesfully Updated Clase" ? setMensajeUpdateClase("Se actualizo la clase.") : setMensajeUpdateClase("No se pudo actualizar la clase.") 
        })
        setBotonCerrar(true)
    }
    const handleInputChange = (e) => {
        setNewClase((prev) => ({
            ...prev,
            [e.target.name]: e.target.value 
        }))
    }
    
    const closeModal = () => {
        props.onClose()
        window.location.reload(false);
    }
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Información de la Clase </InputLabel> 
                            </Grid>
                            <Grid container alignItems="center" justifyContent="center">
                                <Rating value={newClase.calificacion} precision={0.5} size="medium" sx={{marginBottom:"15px", alignSelf:"center"}}></Rating>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Materia:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField disabled value={newClase.materia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <Select 
                                        disabled
                                        size="small"
                                        defaultValue={newClase.tipoClase}
                                        onChange={handleInputChange} 
                                        name="tipoClase"
                                        sx={{color:"#10223D", marginLeft:"1px",marginTop:"2px"}}
                                    >             
                                        {tipoClase.map((elemento) => (<MenuItem value={elemento} key={elemento}> {elemento} </MenuItem>
                                    ))}
                                </Select>

                            </FormControl>
                                         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Costo ($):  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField onChange={handleInputChange} InputProps={{inputProps: { min: 0 }}} name="costo" value={newClase.costo} type="number" variant="outlined" size="small" style={{color:"#10223D", marginLeft:"28px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Frecuencia:  </InputLabel>   
                            <FormControl sx={{width:"79%"}}>
                                <Select 
                                        disabled
                                        size="small"
                                        defaultValue={newClase.frecuencia}
                                        onChange={handleInputChange} 
                                        name="frecuencia"
                                        sx={{color:"#10223D", marginLeft:"16px",marginTop:"2px"}}
                                    >
                                        
                                        {frecuencia.map((elemento) => (<MenuItem value={elemento} key={elemento}> {elemento} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Duración (hs):  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField disabled onChange={handleInputChange} InputProps={{inputProps: { min: 0 }}} name="duracion" value={newClase.duracion} type="number" variant="outlined" size="small" style={{color:"#10223D", marginLeft:"0px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center"  sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Descripción:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField multiline name="descripcion" onChange={handleInputChange} value={newClase.descripcion} variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeUpdateClase} </InputLabel> 
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            {botonCerrar ? undefined : <Grid>
                            <LoadingButton onClick={handleSubmiteed}  variant="contained" sx={{borderRadius:"10px",marginTop:"15px", marginRight:"20px" }}> Actualizar</LoadingButton> 
                            <LoadingButton onClick= {() => {props.onClose()} } variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Cancelar</LoadingButton> 
                            </Grid>}
                            {botonCerrar ? <LoadingButton onClick={()=>closeModal()} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Cerrar </LoadingButton> : undefined} 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};