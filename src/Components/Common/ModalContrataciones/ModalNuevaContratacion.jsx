import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { crearContratacion } from '../../../Services/contrataciones';
import { obtenerAlumno} from "../../../Services/alumnos";

export default function ModalNuevaContratacion (props){


    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};
    const [botonCerrar, setBotonCerrar] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [mensajeContratacion, setMensajeContratacion] = React.useState("");
    const id_alumno = localStorage.getItem("id")
    const [alumno, setAlumno] = React.useState({
        id_alumno: null,
        apellido_alumno: null,
        name_alumno: null,
        usuario_alumno: null,
        rol: null,
        telefono_alumno: null,
        estado_alumno: null,
        fechaNac_alumno: null,  
        genero_alumno: null,
        nivel_primaria: null, 
        nivel_secundaria: null,    
        nivel_terciario: null,    
        nivel_universitario: null,
    }); 
   

    const recargarAlumno = () => {
        obtenerAlumno(id_alumno)
          .then((response) => {
            setAlumno( 
                {id_alumno: response.data.id_alumno,
                apellido_alumno: response.data.apellido_alumno,
                name_alumno: response.data.name_alumno,
                usuario_alumno: response.data.usuario_alumno,
                telefono_alumno: response.data.telefono_alumno,
                rol: response.data.rol,
                estado_alumno: response.data.estado_alumno,
                fechaNac_alumno: response.data.fechaNac_alumno,
                genero_alumno: response.data.genero_alumno,
                nivel_primaria: response.data.nivel_primaria,  
                nivel_secundaria: response.data.nivel_secundaria,
                nivel_terciario: response.data.nivel_terciario,
                nivel_universitario: response.data.nivel_universitario,
            }); 
            setNewContratacion({
                ...newContratacion,
                id_alumno : response.data.id_alumno,
                alumno: response.data.name_alumno + " " + response.data.apellido_alumno,
                telefono_alumno: response.data.telefono_alumno,
                usuario_alumno: response.data.usuario_alumno,
            })

        })         
      }; 
      const [newContratacion,setNewContratacion] = React.useState({
        id_alumno: "",
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
        alumno: "",
        telefono_alumno: "",
        usuario_alumno: "",
    });

    const handleInputChange = (event) => {
        setNewContratacion({
            ...newContratacion,
            [event.target.name] : event.target.value
        })
    };
    
    if(submitted === false){
        setSubmitted(true)
        recargarAlumno()

     };

     const handleSubmiteed = (event) => {
        console.log("alumno.name_alumno",alumno.name_alumno)
        
        event.preventDefault();
        if (newContratacion.mensaje ==="" || newContratacion.horario===""){
            setMensajeContratacion("Debe completar todos los campos.");
        }else{
            crearContratacion(newContratacion);
            setMensajeContratacion("Se realizo la contratacion");
            setBotonCerrar(true);
        }
        
    }
    
    console.log("aluuuumno",alumno)
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Informaci??n de la Contrataci??n </InputLabel> 
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
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Duraci??n:  </InputLabel>   
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
                            {botonCerrar ? undefined : 
                            <Grid>
                                <LoadingButton variant="contained" onClick={handleSubmiteed} sx={{borderRadius:"10px",marginTop:"15px", marginRight:"10px" }}> Contratar</LoadingButton>
                                <LoadingButton variant="contained" onClick={() => props.onClose()} sx={{borderRadius:"10px",marginTop:"15px", marginRight:"10px" }}> Camcelar</LoadingButton>
                            </Grid>} 
                            
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