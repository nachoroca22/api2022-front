import React from 'react'
import { Grid,Paper, Avatar, TextField, Typography,Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'
import { useNavigate } from "react-router-dom";

import { loginProfesor,loginAlumno } from "../../Services/login";
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

export default function Login (){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c", borderRadius:"10px",width:"35%",margin:'8px'};

    const navigate = useNavigate();
    const [user, setName] = React.useState('Composed TextField');

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      }

    const [password, setPassword] = React.useState('Composed TextField');

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      }
    
    const handleSubmitProfesor = (user,password) => {
        {
           loginProfesor(user,password).then((response) => {
            removeToken();
            removeActiveSession();
            removeID();
            removeRol();

            if (response.status !== 400) {
                setToken(response.token);
                setActiveSession(true);
                setRol(response.rol);
                setID(response.id_user);
                navigate("/profesores/home")

                //this.props.history.replace("/profesores/home");
              } else{
                alert("login profesor erroneo")
              }
           })
    }}

    const handleSubmitAlumno = (user,password) => {
        {
           loginAlumno(user,password).then((response) => {
            removeToken();
            removeActiveSession();
            removeID();
            removeRol();

            if (response.status !== 400) {
                setToken(response.token);
                setActiveSession(true);
                setRol(response.rol);
                setID(response.id_alumno);
                navigate("/alumnos/home")

                //this.props.history.replace("/profesores/home");
              } else{
                alert("login alumno erroneo")
              }
           })
    }} 
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
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
                    <Typography textAlign="center" marginTop="5px">
                        <Link href="#" >
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </Typography> 
                </Paper> 
        
    )
};