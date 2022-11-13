import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { crearContratacion } from '../../../Services/contrataciones';

export default function ModalNuevaContratacion (props){
    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};
    const [botonCerrar, setBotonCerrar] = React.useState(false);
    const [mensajeContratacion, setMensajeContratacion] = React.useState("");
    const [newContratacion,setNewContratacion] = React.useState({
        id_alumno: props.id_alumno,
        id_user: props.id_user,
        id_clase: props.id_clase,
        costo: props.costo,
        mensaje:"",
        horario: "",
        profesor: props.name + " " + props.apellido,
        usuario: props.usuario,
        tipoClase: props.tipoClase,
        duracion: props.duracion,
        frecuencia: props.frecuencia,
        materia: props.materia,
        alumno: props.name_alumno + " " + props.apellido_alumno,
        telefono_alumno: props.telefono_alumno,
        usuario_alumno: props.usuario_alumno,
    });

    const handleSubmiteed = (event) => {
        event.preventDefault();
        crearContratacion(newContratacion);
        setMensajeContratacion("Se realizo la contratacion");
        setBotonCerrar(true);
    }

    const handleInputChange = (event) => {
        setNewContratacion({
            ...newContratacion,
            [event.target.name] : event.target.value
        })
    }
    
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
                                <TextField disabled value={props.materia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Profesor:  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField disabled="true" value={props.name + " " + props.apellido} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"34px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField disabled value={props.tipoClase} variant="outlined" size="small" style={{color:"#10223D", marginRight:"2px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Frecuencia:  </InputLabel>   
                            <FormControl sx={{width:"78%"}}>
                                <TextField disabled value={props.frecuencia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"16px",marginTop:"2px"}}> </TextField> 
                            </FormControl>           
                        </Grid>
                        <Grid container alignItems="center" sx={{marginBottom:"5px", paddingBottom:"5px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Duración:  </InputLabel>   
                            <FormControl sx={{width:"81%"}}>
                                <TextField disabled value={props.duracion + " hs."} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"30px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px", paddingBottom:"5px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Costo:  </InputLabel>   
                            <FormControl sx={{width:"86%"}}>
                                <TextField disabled value={"$ " + props.costo} variant="outlined" size="small" style={{color:"#10223D",marginLeft:"51px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>                         
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Mensaje:  </InputLabel>   
                            <FormControl sx={{width:"83%"}}>
                                <TextField multiline onChange={handleInputChange} name="mensaje"  variant="outlined" size="small" style={{color:"#10223D",marginLeft:"33px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Horario:  </InputLabel>   
                            <FormControl sx={{width:"85%"}}>
                                <TextField multiline onChange={handleInputChange} name="horario" variant="outlined" size="small" style={{color:"#10223D",marginLeft:"40px",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeContratacion} </InputLabel> 
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            {botonCerrar ? undefined : <LoadingButton 
                            variant="contained" 
                            onClick={handleSubmiteed}
                            sx={{borderRadius:"10px",marginTop:"15px", marginRight:"10px" }}
                            > Contratar
                            </LoadingButton>} 
                            
                            {botonCerrar ? <LoadingButton 
                                onClick={() => props.onClose()}
                                variant="contained" 
                                sx={{borderRadius:"10px",marginTop:"15px" }}
                                > Cerrar
                            </LoadingButton> : undefined} 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};