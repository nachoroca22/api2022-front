import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl} from '@mui/material'
import Rating from '@mui/material/Rating';
import { LoadingButton } from '@mui/lab';
import {comentarContratacion} from "../../Services/contrataciones"


export default function ModalClases (props){
    console.log("props",props)
    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};
    const [botonCerrar, setBotonCerrar] = React.useState(undefined);
    const [mensajeComentar, setMensajeComentar] = React.useState("");
    const [contratacion,setContratacion] = React.useState({
        id_contratacion: props.contratacion.id_contratacion,
        comentario: props.contratacion.comentario,
        calificacion_alumno: props.contratacion.calificacion_alumno,
    });

    const handleInputChange = (event) => {
        setContratacion({
            ...contratacion,
            [event.target.name] : event.target.value
        })
    }
    const realizarComentario = () =>{
        comentarContratacion(contratacion)
        .then((response) => {
            setMensajeComentar(response.message)
           /*  if(response.message === 'Contratacion actualizada' ){
                setMensajeComentar("Se envío el comentario para revisión.")
            }else{ setMensajeComentar(response.data)}  */
        setBotonCerrar(true)
    })} 

    const closeModal = () => {
        props.close()
        window.location.reload(false);
    }
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
                                <TextField disabled="true" value={props.contratacion.materia} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>

                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Profesor:  </InputLabel>   
                            <FormControl sx={{width:"83%"}}>
                                <TextField disabled="true" value={props.contratacion.profesor} variant="outlined" size="small" style={{color:"#10223D", marginLeft:"33px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>

                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'10px', fontSize:"15px"}}> Calificación:  </InputLabel>   
                            <Rating onChange={handleInputChange} value={contratacion.calificacion_alumno} name="calificacion_alumno" precision={1} size="medium"sx={{marginTop:"10px",marginLeft:"10px",alignSelf:"center"}}></Rating>
                        </Grid>
                        <Grid container alignItems="center"  sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Comentario:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField multiline disabled={props.is_disabled} onChange={handleInputChange} value={contratacion.comentario} name="comentario" variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeComentar} </InputLabel> 
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            {botonCerrar ? undefined :<LoadingButton onClick={realizarComentario}  variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Comentar</LoadingButton>}
                            {botonCerrar ?<LoadingButton onClick={() => closeModal()} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Cerrar</LoadingButton> : undefined} 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};