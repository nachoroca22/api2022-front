import React from 'react'
import { Grid,Paper, Avatar, TextField, Typography,Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'
import data from "../../data/users.json"

export default function Login (){
    const profe = data[0]["Profe"]
    const alumno = data[1]["Alumno"]

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c" ,width:"30%",margin:'8px 0'};

    const [user, setName] = React.useState('Composed TextField');
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      }

    const [password, setPassword] = React.useState('Composed TextField');

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      }
    
    const handleSubmit = (user,password) => {
        {
            if (user=="Alumno" && password=="12345")
            {
                alert("BINGO Alumno!");
            }

            if (user=="Profe" && password=="123456")
            {
                alert("BINGO Profe!");
            }
            else
            {
              alert("Debe completar usuario y password")
            }
    }}

    
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid item>
                        <TextField 
                        onChange={handleChangeName}
                        placeholder='Ingrese el correo' 
                        name="user"                   
                        fullWidth 
                        required/>
                        
                    </Grid>

                    <Grid item>
                    <TextField 
                    onChange={handleChangePassword}
                    placeholder='Ingrese la password' 
                    name="password" 
                    type="password"
                    fullWidth 
                    required/>
                    </Grid>
                    
                    <Grid align="center" margin="5px">
                        <LoadingButton 
                        onClick={()=>handleSubmit(user,password)}
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth>
                            Ingresar
                        </LoadingButton>
                    </Grid>
                    <Typography textAlign="center">
                        <Link href="#" >
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </Typography>
                    <Typography marginTop={2} textAlign="center"> ¿No tenes cuenta? 
                    <Typography >
                    <Link href="#" >
                            Registrate 
                    </Link>
                    </Typography>    
                    </Typography>  
                </Paper> 
        
    )
};