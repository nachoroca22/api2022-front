import React from 'react'
import { Grid,Paper,InputLabel,TextField,FormControl} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { rechazarComentario } from '../../Services/contrataciones';

export default function ModalConfirmar (props){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:550, margin:"50px auto"};
    const [rechazoComentario,setRechazoComentario] = React.useState({
        id_contratacion: props.comentario.id_contratacion,
        descargo_comentario: "",
    });
    const handleInputChange = (event) => {
        setRechazoComentario({
            ...rechazoComentario,
            [event.target.name] : event.target.value
        })
    }
    const borrarComentario = () => {
        rechazarComentario(rechazoComentario)
         .then((response) => {
            props.close()
            window.location.reload(false);
        }) 
    }

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                    
                        <Grid container alignItems="center" justifyContent="center">
                            <InputLabel sx={{color:"#10223D", marginTop:'5px', fontSize:"18px", textAlign:"center"}}> {props.mensaje}?  </InputLabel>                                
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', paddingBottom:'10px' ,fontSize:"20px"}}> Ingrese el descargo:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField multiline onChange={handleInputChange} name="descargo_comentario" variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            <LoadingButton 
                            onClick={borrarComentario}
                            variant="contained" 
                            sx={{borderRadius:"10px",marginTop:"15px",marginRight:"10px", width:"150px" }}
                            > Rechazar</LoadingButton> 
                      
                            <LoadingButton 
                                variant="contained" 
                                sx={{borderRadius:"10px",marginTop:"15px", width:"150px" }}
                                onClick={()=>props.close()}    
                            > Cancelar</LoadingButton> 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};