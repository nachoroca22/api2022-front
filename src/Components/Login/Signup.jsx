import React from 'react'
import { Grid,Paper, Avatar, TextField,MenuItem,Select,Typography, Modal} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'
import { useState } from "react";
import Modalmensaje from "./Modalconfimacion"
import {createAlumno} from '../../Services/alumnos'
import {createProfesor} from '../../Services/profesores'

 const Signup = ({props,isOpenModal,closeModal})=>{

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'40vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c",  borderRadius:"10px", width:"35%",margin:'8px'};
   
    const initialAlumno = {
        apellido: "",
        name: "",
        usuario: "",
    }
    const [alumno, setAlumno] = React.useState(initialAlumno);

    const [isOpenModalMensaje, setIsOpenModalMensaje] = useState(false);
    const openModalMensaje = () =>{setIsOpenModalMensaje(true)};
    const closeModalMensaje = () =>{setIsOpenModalMensaje(false)};


    const handleChange = (e) => {
        setAlumno((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCreateAlumno = () => {
        createAlumno(alumno)
          .then((response) => {
      })
        closeModal();
    }
      
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="15">
                        <TextField 
                        onChange={handleChange} 
                        placeholder='Nombre' 
                        name="name"                   
                        width="100%" 
                        size='small'
                        required/>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="5px">
                        <TextField 
                        onChange={handleChange} 
                        placeholder='Apellido' 
                        name="apellido"                   
                        width="100%" 
                        size='small'
                        required/>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="5px" marginBottom="30px">
                        <TextField 
                        onChange={handleChange} 
                        placeholder='Email' 
                        name="usuario"                   
                        width="100%" 
                        size='small'
                        required/>
                    </Grid>
                    <Grid item align="center" spacing={3}>
                        <LoadingButton 
                            onClick={handleCreateAlumno}
                            variant="contained" 
                            style={btnstyle} 
                            fullWidth>
                            Soy profe!
                        </LoadingButton>
                        <LoadingButton 
                            onClick={handleCreateAlumno}
                            variant="contained" 
                            style={btnstyle} 
                            fullWidth>
                            Soy alumno!
                        </LoadingButton>
                        <Typography color="#d6533c" marginTop={2} textAlign="center"> Vas a recibir un correo con la password para acceder </Typography>
                    </Grid> 
                </Paper> 
        
    )
};
export default Signup