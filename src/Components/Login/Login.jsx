import React from 'react'
import { Grid,Paper, Avatar, TextField, Typography,Link, InputLabel} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'
//import { useNavigate } from "react-router-dom";

import { loginProfesor,loginAlumno,resetPasswordAlumno,resetPasswordProfesor } from "../../Services/login";
import {
    setToken,
    setActiveSession,
    removeToken,
    removeActiveSession,
    setRol,
    removeRol,
    setID,
    removeID,
  } from "../../Services/mysession";

export default function Login (props){
    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c", borderRadius:"10px",width:"35%",margin:'8px'};

    //const navigate = useNavigate();
    const [user, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mensajeSignin, setMensajeSigin] = React.useState("");
    const [recuperoPassword, setRecuperoPassword] = React.useState(false);
    const [viewLogin, setViewLogin] = React.useState(true);
    const [mensajeOlvidastePass, setMensajeOlvidastePass] = React.useState("¿Olvidaste tu contraseña?");
    const [mensajeRecuperoPass, setMensajeRecuperoPass] = React.useState("Regresar");
    const [mensajeCambioPass, setMensajeCambioPass] = React.useState(null);

    const handleResetPasswordAlumno =(usuario) => {
        resetPasswordAlumno(usuario)
        .then((response) => {
            setMensajeCambioPass("Se envio la password al correo indicado.")
        }) 
    }

    const handleResetPasswordProfesor =(usuario) => {
        resetPasswordProfesor(usuario)
        .then((response) => {
            setMensajeCambioPass("Se envio la password al correo indicado.")
        }) 
    }
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      }
    
    const viewRecuperPassword = () => {
        setRecuperoPassword(!recuperoPassword)
        setMensajeSigin("")
        setViewLogin(!viewLogin)
        setMensajeCambioPass("")
    }
    
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      }
    
    const handleSubmitProfesor = (user,password) => {
        if(user ==="" || password ===""){
            setMensajeSigin("Debe completar todos los datos.")
        }else{
           loginProfesor(user,password)
            .then((response) => {
             if (response.status !== 400) {
                setToken(response.token);
                setActiveSession(true);
                setRol(response.rol);
                setID(response.id_user);
                props.onClose()
                window.location.reload(false);
                
            } else{
                setMensajeSigin("Usuario o password incorrecto")
            }
           })
    }}

    const handleSubmitAlumno = (user,password) => {
        if(user ==="" || password ===""){
            setMensajeSigin("Debe completar todos los datos.")
        }else{
           loginAlumno(user,password).then((response) => {
            if (response.status !== 400) {
                setToken(response.token);
                setActiveSession(true);
                setRol(response.rol);
                setID(response.id_alumno);
                props.onClose()
                window.location.reload(false);

            } else{
                setMensajeSigin("Usuario o password incorrecto")
            }
        })
    }} 
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    {viewLogin ?
                    <Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="20px">
                            <TextField 
                                onChange={handleChangeName}
                                placeholder='Ingrese el correo' 
                                name="user"                   
                                width="100%" 
                                required/>     
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                            <TextField 
                                onChange={handleChangePassword}
                                placeholder='Ingrese la password' 
                                name="password" 
                                type="password"
                                width="100%"
                                required/>
                        </Grid>
                        <Grid align="center" margin="10px">
                            <LoadingButton 
                                onClick={()=>handleSubmitProfesor(user,password)}
                                variant="contained" 
                                style={btnstyle} 
                                fullWidth>
                                    Soy profe!
                            </LoadingButton>
                            <LoadingButton 
                                onClick={()=>handleSubmitAlumno(user,password)}
                                variant="contained" 
                                style={btnstyle} 
                                fullWidth>
                                    Soy Alumno!
                            </LoadingButton>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                            <InputLabel style={{color:"#10223D", fontSize:"19px",marginBottom:"20px"}}> {mensajeSignin} </InputLabel> 
                        </Grid>
                    </Grid>
                    : false}
                    <Typography textAlign="center" marginTop="5px">
                        <Link sx={{fontSize:"20px"}} onClick={viewRecuperPassword}> {recuperoPassword === false ? mensajeOlvidastePass : mensajeRecuperoPass} </Link>
                    </Typography> 
                    {recuperoPassword ?
                        <Grid container alignItems="center" justifyContent="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} align="center" >
                                <TextField 
                                        sx={{margin:"10px", marginTop:"20px"}}
                                        size='small'
                                        onChange={handleChangeName}
                                        placeholder='Ingrese el correo' 
                                        name="user"                   
                                        required/> 
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={12} lg={12} align="center" marginTop={"20px"} marginBottom={"10px"}>
                                <LoadingButton 
                                    
                                    size='small'
                                    onClick={()=>handleResetPasswordAlumno(user)}
                                    variant="contained" 
                                    sx={{borderRadius:"10px", width:"180px"}} 
                                    >
                                        Recuperar Alumno!
                                </LoadingButton>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                                <LoadingButton 
                                    size='small'
                                    onClick={()=>handleResetPasswordProfesor(user)}
                                    variant="contained" 
                                    sx={{backgroundColor:"#10223D", borderRadius:"10px", width:"180px"}} 
                                    >
                                        Recuperar Profe!
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    :true }
                    <Grid container alignItems="center" justifyContent="center">
                        <InputLabel style={{color:"#10223D", fontSize:"19px",marginTop:"20px"}}> {mensajeCambioPass} </InputLabel> 
                    </Grid>
                </Paper> 
        
    )
};