import * as React from 'react';
import {TextField, Container, FormControl, MenuItem,Select, Grid, Typography, Card, CardMedia,InputLabel} from '@mui/material';
import foto from "../media/foto.jpg"
import NativeSelect from '@mui/material/NativeSelect';
import { LoadingButton } from '@mui/lab'
import { obtenerAlumno, actualizarAlumno} from "../../Services/alumnos";


export default function Perfil() {
    const initialAlumno = {
        id_alumno: null,
        apellido: "",
        name: "",
        usuario: "",
        rol: "",
        estado: null,
        fechaNac: "",  
        genero: "",
        nivel_primaria: "", 
        nivel_secundaria: "",    
        nivel_terciario: "",    
        nivel_universitario: "",
    }
    const token = sessionStorage.getItem("token")
    const id = sessionStorage.getItem("id")
    const [alumno, setAlumno] = React.useState(initialAlumno);
    const [submitted, setSubmitted] = React.useState(false);
    
    //funciones
    const recargarAlumno = () => {
        obtenerAlumno(id)
          .then((response) => {
            setAlumno( 
                {id_alumno: response.data.id_alumno,
                apellido: response.data.apellido,
                name: response.data.name,
                usuario: response.data.usuario,
                rol: response.data.rol,
                estado: response.data.estado,
                fechaNac: response.data.fechaNac,
                genero: response.data.genero,
                nivel_primaria: response.data.nivel_primaria,  
                nivel_secundaria: response.data.nivel_secundaria,
                nivel_terciario: response.data.nivel_terciario,
                nivel_universitario: response.data.nivel_universitario,
            }); 
        })         
      };
    
    if (submitted === false){
        setSubmitted(true)
        recargarAlumno();
        
    }
    
    const handleChange = (e) => {
        setAlumno((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    
    const handleActualizarAlumno = () => {
        actualizarAlumno(alumno)
          .then((response) => {
            console.log(response)       
      })
    }
    return (
        <Container> 
                <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>   
                    <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" marginBottom="30px">
                        <Typography color="#10223D" variant="h4" noWrap component="div" >
                            ¡Hola {alumno.name}!
                        </Typography>
                        <Typography color="#d6533c" variant="h5" noWrap component="div" >
                            Recorda siempre tener actualizado tu perfil.   
                        </Typography>
                    </Grid>
                    <Card 
                        style={{borderColor:"#FFC2B4",
                                backgroundColor:'transparent', 
                                width:"50%", 
                                padding:"20px",
                                border: "1px solid #10223D",
                                borderRadius:"20px"}}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField disabled onChange={handleChange} name="name" size='small' label="Nombre" id="Nombre" value={alumno.name}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField disabled  onChange={handleChange} name="apellido" size='small' label="Apellido" id="Apellido" value={alumno.apellido}></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"94%"}}>
                                    <Select onChange={handleChange} name="genero" size='small' value={alumno.genero}>
                                        <MenuItem value={10}>Femenino</MenuItem>
                                        <MenuItem value={20}>Masculino</MenuItem>
                                        <MenuItem value={30}>No binario</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                <TextField onChange={handleChange} name="fechaNac" size='small' id="date" label="Fecha de Nacimiento - dd/mm/yyyy" value={alumno.fechaNac}></TextField>
                                </FormControl>
                            </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"98%"}}>
                                    <TextField size='small' label="Nueva password" id="Password" type="password"></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container  xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center">
                                <FormControl  sx={{color:"#d6533c", minWidth:"98%"}}>
                                    <TextField disabled size='small' label="Email" id="Email"value={alumno.usuario}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"19px"}}> Estudios cursados:  </InputLabel>   
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Primaria:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%",marginLeft:"28px"}}>
                                        <Select onChange={handleChange} name="nivel_primaria" size='small' value={alumno.nivel_primaria}>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Secundaria:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%",marginLeft:"7px"}}>
                                        <Select onChange={handleChange} name="nivel_secundaria" size='small' value={alumno.nivel_secundaria}>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Terciario:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%",marginLeft:"30px"}}>
                                        <Select onChange={handleChange} name="nivel_terciario" size='small' value={alumno.nivel_terciario}>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Universitario:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%"}}>
                                        <Select onChange={handleChange} name="nivel_universitario" size='small' value={alumno.nivel_universitario}>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                                <LoadingButton onClick={handleActualizarAlumno} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Actualizar</LoadingButton> 
                            </Grid>
                        </Grid>    
                    </Card>
                </Grid>
        </Container>  
    );

}
