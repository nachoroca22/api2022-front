import React,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,InputLabel} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'

export default function Login (){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c" ,width:"30%",margin:'8px 0'};

    const [loading, setLoading] = useState(false);
    const [formData,setFormData] = useState({
        usuario:'',
        password: '',
    });
    const [usuario,password] = formData;
    const handleOnChange = (evento)=>{
        setFormData({...formData,[evento.target.name] : evento.target.value});
    };
    
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid>

                        
                    </Grid>
                    <TextField 
                    placeholder='Ingrese el correo' 
                    name="usuario"
                    value={usuario}
                    onChange={handleOnChange}
                    fullWidth 
                    required/>

                    <TextField 
                    placeholder='Ingrese la password' 
                    name="password"
                    type='password' 
                    value={password}
                    onChange={handleOnChange}
                    fullWidth 
                    required/>
                    <Grid align="center" margin="5px">
                        <LoadingButton 
                            loading={loading}
                            disabled={!loading ? false : true}
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