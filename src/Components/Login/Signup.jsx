import React from 'react'
import { Grid,Paper, InputLabel, Avatar, TextField, Modal} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'
import { useState } from "react";
import {createAlumno} from '../../Services/alumnos'
import {createProfesor} from '../../Services/profesores'

 const Signup = ({props,isOpenModal,closeModal})=>{

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'40vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c",  borderRadius:"10px", width:"35%",margin:'8px'};
   
    const initialUsuario = {
        apellido: "",
        name: "",
        usuario: "",
    }
    const [usuario, setUsuario] = React.useState(initialUsuario);

    const [isOpenModalMensaje, setIsOpenModalMensaje] = useState(false);
    const openModalMensaje = () =>{setIsOpenModalMensaje(true)};
    const closeModalMensaje = () =>{setIsOpenModalMensaje(false)};
    const [mensajeSignup, setMensajeSignup] = React.useState("");
    const [botonCerrar, setBotonCerrar] = React.useState(false);


    const handleChange = (e) => {
        setUsuario((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCreateAlumno = () => {
        if(usuario.apellido ==="" || usuario.name ==="" || usuario.usuario ===""){
            setMensajeSignup("Debe completar todos los datos.")
        }else{
            createAlumno(usuario)
          .then((response) => {
                if( response.message === "Succesfully Created Alumno"){
                    setBotonCerrar(true)
                    setMensajeSignup("Se envio la password al correo ingresado.")
                }else{
                    setBotonCerrar(false)
                    setMensajeSignup("El correo ya se encuentra registrado.")
                    
                }
            })
        }
    }

    const handleCreateProfesor = () => {
        if(usuario.apellido ==="" || usuario.name ==="" || usuario.usuario ===""){
            setMensajeSignup("Debe completar todos los datos.")
        }else{
        createProfesor(usuario)
          .then((response) => {
                if( response.message !== "Succesfully Created Profesor" ){
                    setBotonCerrar(false)
                    setMensajeSignup("El correo ya se encuentra registrado.")
                }else{  
                    setBotonCerrar(true)
                    setMensajeSignup("Se envio la password al correo ingresado.")  
                }
            })
        }
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
                    <Grid container alignItems="center" justifyContent="center">
                        <InputLabel style={{color:"#10223D", fontSize:"19px",marginBottom:"20px"}}> {mensajeSignup} </InputLabel> 
                    </Grid>

                    {botonCerrar ? false :
                        <Grid item align="center" spacing={3}>
                            <LoadingButton 
                                onClick={handleCreateProfesor}
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
                        </Grid>
                    }
                    {botonCerrar ? 
                        <Grid item align="center" spacing={3}>
                            <LoadingButton 
                                onClick={()=>closeModal()} 
                                variant="contained" 
                                sx={{borderRadius:"10px",marginTop:"15px" }}
                                > Cerrar
                            </LoadingButton> 
                        </Grid>: false} 
                </Paper> 
        
    )
};
export default Signup