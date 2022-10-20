import React from 'react'
import { Grid,Paper, Avatar, TextField,MenuItem,Select,Typography, FormControl} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'

export default function Login (){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c",  borderRadius:"10px", width:"35%",margin:'8px'};

    const [nombre, setNombre] = React.useState('Composed TextField');
    const handleChangeNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    }

    const [apellido, setApellido] = React.useState('Composed TextField');
    const handleChangeApellido = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApellido(event.target.value);
    }

    const [email, setEmail] = React.useState('Composed TextField');
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const [formRol,setRol] = React.useState('')
    const handleOnchangeRol = (event: SelectChangeEven) => {
        setRol(event.target.value);   
    }

    const handleSubmit = (nombre,apellido,email,rol) => {
        alert("Debe completar usuario y password",nombre,apellido,email,rol)     
    }
      
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="15">
                        <TextField 
                        onChange={handleChangeNombre}
                        placeholder='Nombre' 
                        name="nombre"                   
                        width="100%" 
                        size='small'
                        required/>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="5px">
                        <TextField 
                        onChange={handleChangeApellido}
                        placeholder='Apellido' 
                        name="apellido"                   
                        width="100%" 
                        size='small'
                        required/>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop="5px" marginBottom="30px">
                        <TextField 
                        onChange={handleChangeEmail}
                        placeholder='Email' 
                        name="email"                   
                        width="100%" 
                        size='small'
                        required/>
                    </Grid>
{/*                     <Grid item xs={12} sm={12} md={12} lg={12} container marginTop="5px" direction="row" justifyContent="center" alignItems="center">
                        <FormControl sx={{width:'70%'}}> 
                            <Select 
                                defaultValue=""
                                placeholder='Rol'
                                name="Rol"  
                                value={formRol}  
                                sx={{alignSelf:"center",marginTop:"2px", height:"40px", width:"200px" ,borderRadius:"15px"}}
                                onChange={handleOnchangeRol}
                            >
                                <MenuItem value={10}>Alumno</MenuItem>
                                <MenuItem value={20}>Profesor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid> */}
                    <Grid item align="center" spacing={3}>
                        <LoadingButton 
                            onClick={()=>handleSubmit(nombre,apellido,email,formRol)}
                            variant="contained" 
                            style={btnstyle} 
                            fullWidth>
                            Soy profe!
                        </LoadingButton>
                        <LoadingButton 
                            onClick={()=>handleSubmit(nombre,apellido,email,formRol)}
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