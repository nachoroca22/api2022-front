import React from 'react'
import { Grid,Paper, Avatar, TextField,MenuItem,Select,Typography, FormControl} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab'


export default function Login (props){

    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding :20,height:'50vh',width:400, margin:"50px auto"};
    const btnstyle={backgroundColor:" #d6533c",  borderRadius:"10px", width:"35%",margin:'8px'};
      
    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Typography color="#10223D" marginTop={2} textAlign="center"> Te enviamos un correo con las credenciales para acceder </Typography>
                    </Grid>
                    <Grid item align="center" spacing={3}>
                        <LoadingButton 
                            
                            variant="contained" 
                            style={btnstyle} 
                            fullWidth>
                            Cerrar
                        </LoadingButton>
                    </Grid> 
                    
                </Paper> 
        
    )
};