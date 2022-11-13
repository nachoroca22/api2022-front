import React from 'react'
import { Grid,Paper,InputLabel} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { disableClase } from '../../Services/clases';

export default function ModalConfirmar (props,mensaje,children){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:550, margin:"50px auto"};

    const borrarClase = () => {
        disableClase(props.clase.id_clase)
        .then((response) => {props.close()})
        }

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                    
                        <Grid container alignItems="center" justifyContent="center">
                            <InputLabel sx={{color:"#10223D", marginTop:'5px', fontSize:"18px", textAlign:"center"}}> {props.mensaje}{props.clase.materia}?  </InputLabel>                                
                        </Grid>
                        <Grid item  xs={6} sm={6} md={6} lg={6} container direction="row" justifyContent="center">
                            <LoadingButton 
                            onClick={borrarClase}
                            variant="contained" 
                            sx={{borderRadius:"10px",marginTop:"15px", width:"150px" }}
                            > Aceptar</LoadingButton> 
                        </Grid>
                        <Grid item  xs={6} sm={6} md={6} lg={6} container direction="row" justifyContent="center">
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