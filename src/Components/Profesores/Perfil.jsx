import * as React from 'react';
import {TextField, InputLabel,Container, FormControl, MenuItem,Select, Grid, Typography, Card, CardMedia} from '@mui/material';
import foto from "../media/foto.jpg"
import { LoadingButton } from '@mui/lab'
import { obtenerProfesor,actualizarProfesor } from "../../Services/profesores";

export default function Perfil() {
    const initialProfesor = {
        id_user: null,
        apellido: "",
        name: "",
        usuario: "",
        rol: "",
        estado: null,
        fechaIngreso: "",
        fechaNac: "",  
        genero: "",
        presentacion: "",    
        estudios: "",
    }
    const token = sessionStorage.getItem("token")
    const id = sessionStorage.getItem("id")
    const [profesor, setProfesor] = React.useState(initialProfesor);
    const [submitted, setSubmitted] = React.useState(false);
    const [mensajeUpdatePerfil, setMensajeUpdatePerfil] = React.useState("");


    const recargarProfesor = () => {
        obtenerProfesor(id)
          .then((response) => {
            setProfesor( 
                {id_user: response.data.id_user,
                apellido: response.data.apellido,
                name: response.data.name,
                usuario: response.data.usuario,
                rol: response.data.rol,
                estado: response.data.estado,
                fechaIngreso: response.data.fechaIngreso,
                fechaNac: response.data.fechaNac,
                genero: response.data.genero,
                presentacion: response.data.presentacion,  
                estudios: response.data.estudios}); 
                })
            
      };
    
    if (submitted === false){
        setSubmitted(true)
        recargarProfesor();    
    }
        
    const handleChange = (e) => {
        setProfesor((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleActualizarProfesor = () => {
        actualizarProfesor(profesor)
          .then((response) => {
            response.message === "Succesfully Updated Profesor" ? setMensajeUpdatePerfil("Se actualizo el perfil.") : setMensajeUpdatePerfil("No se pudo actualizar el perfil.")
        
      })
    }

    return (
        
        <Container> 
                <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>   
                    <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" marginBottom="30px">
                        <Typography color="#10223D" variant="h4" noWrap component="div" sx={{marginBottom:'20px'}}>
                            ¡Hola {profesor.name}! 
                        </Typography>
                        <Typography color="#d6533c" variant="h5" noWrap component="div" >
                            Recorda siempre tener actualizado tu perfil.   
                        </Typography>
                    </Grid>
                    
                    <Grid container xs={12} sm={12} md={12} lg={12} marginBottom={5}  justifyContent="center" justifyItems="center">
                        <Card style={{borderRadius:"20px"}}>
                            <CardMedia
                                component="img"
                                style={{
                                    paddingTop:"2px",
                                    width: "auto",
                                    maxHeight: "200px",
                                    borderRadius:"20px"
                                }}
                                image={foto}
                            >
                            </CardMedia>    
                        </Card>
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
                                    <TextField disabled label="Nombre" id="Nombre" value={profesor.name}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField disabled label="Apellido" id="Apellido" value={profesor.apellido}></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                    <Select onChange={handleChange} name="genero" size='small' value={profesor.genero}>
                                        <MenuItem value={10}>Femenino</MenuItem>
                                        <MenuItem value={20}>Masculino</MenuItem>
                                        <MenuItem value={30}>No binario</MenuItem>
                                    </Select>                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                <TextField onChange={handleChange} name="fechaNac" value={profesor.fechaNac} label="Fecha de Nacimiento - dd/mm/yyyy" id="date"></TextField>
                                </FormControl>
                            </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"96%"}}>
                                    <TextField label="Nueva password" id="Password" type="password"></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container  xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField value={profesor.usuario} disabled label="Usuario" id="Email"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField onChange={handleChange} name="estudios" value={profesor.estudios} label="Estudios" id="Estudios" multiline minRows={3} maxRows={20}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField onChange={handleChange} name="presentacion" value={profesor.presentacion} label="Presentacion" id="Presentacion" multiline minRows={3} maxRows={20}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeUpdatePerfil} </InputLabel> 
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                                <LoadingButton onClick={handleActualizarProfesor} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Actualizar</LoadingButton> 
                            </Grid>
                        </Grid>    
                    </Card>
                </Grid>
        </Container>  
    );

}
