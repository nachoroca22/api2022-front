import React from 'react'
import { Grid,Paper, Avatar, TextField,MenuItem,Select,InputLabel,FormControl} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'

export default function Login (){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const avatarStyle={backgroundColor:'#10223D'};
    const btnstyle={backgroundColor:" #d6533c" ,width:"30%",margin:'8px 0'};

    const [user, setName] = React.useState('Composed TextField');
    
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      }

    
    const handleSubmit = (user,rol) => {
        alert("Debe completar usuario y password",user,rol)
            
    }

    const [formRol,setRol] = React.useState('')

    const handleOnchangeRol = (event: SelectChangeEven) => {
        setRol(event.target.value);   
      }

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <Grid item>
                        <TextField 
                        onChange={handleChangeName}
                        placeholder='Ingrese el correo' 
                        name="user"                   
                        fullWidth 
                        required/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} container marginTop="10px" direction="row" justifyContent="center" alignItems="center">
                        <FormControl sx={{width:'70%'}}> 
                            
                            <Select 
                                defaultValue=""
                                placeholder='Rol'
                                name="Rol"  
                                value={formRol}  
                                sx={{alignSelf:"center",marginTop:"15px", height:"40px", width:"200px" ,borderRadius:"15px"}}
                                onChange={handleOnchangeRol}
                            >
                                <MenuItem value={10}>Alumno</MenuItem>
                                <MenuItem value={20}>Profesor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid align="center" margin="15px">
                        <LoadingButton 
                        onClick={()=>handleSubmit(user,formRol)}
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth>
                            Enviar
                        </LoadingButton>
                    </Grid> 
                </Paper> 
        
    )
};